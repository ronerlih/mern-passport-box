import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { Input, ForwardRefInput, FormBtn } from "../components/Form";

function Comments() {
	// Setting our component's initial state
	const [comments, setComments] = useState([]);
	const [formObject, setFormObject] = useState({
      title: "",
      body: "",
   });
   
   // get input element ref for focus
   const titleInputElRef = useRef();

	// Load all comments and store them with setComments
	useEffect(() => {
      loadComments();
      // focus on titleInputEl if ref exists
      titleInputElRef.current.focus()
   }, []);
   

	// Loads all comments and sets them to comments
	function loadComments() {
		API.getComments()
			.then((res) => setComments(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a comment from the database with a given id, then reloads comments from the db
	function deleteComment(id) {
		API.deleteComment(id)
			.then((res) => loadComments())
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// When the form is submitted, use the API.saveComment method to save the comment data
	// Then reload comments from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.title && formObject.body) {
			API.saveComment({
				title: formObject.title,
				body: formObject.body,
			})
            .then((res) => loadComments())
            .then(() => setFormObject({
               title: "",
               body: "",
            }))
				.catch((err) => console.log(err));
		}
	}

	return <>
		<Row>
			<Col size='md-12'>
				<form>
					<Col size='sm-3'>
						<ForwardRefInput ref={ titleInputElRef } value={formObject.title} onChange={handleInputChange} name='title' placeholder='Title (required)' />
					</Col>
					<Col size='sm-12'>
						<Input value={formObject.body} onChange={handleInputChange} name='body' placeholder='your comment here' />
					</Col>
					<FormBtn
						disabled={!(formObject.title && formObject.body)}
						onClick={handleFormSubmit}>
						Submit Comment
					</FormBtn>
				</form>
			</Col>
		</Row>,
		<Row>
			<Col size='md-12'>
				{comments.length ? (
					<Table>
						{comments.map(comment => (
							<Tr key={comment._id}>
								<Td>
									<Link
										to={"/comments/" + comment._id}
										style={{ textAlign: "left", display: "block" }}>
										<strong>{comment.title}:</strong> {comment.body}
									</Link>
								</Td>
								<Td>{comment.date}</Td>
								<Td>
									<DeleteBtn onClick={() => deleteComment(comment._id)} />
								</Td>
							</Tr>
						))}
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
			</Col>
		</Row>,
	</>;
}

export default Comments;
