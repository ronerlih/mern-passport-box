import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { Input, TextArea, FormBtn } from "../components/Form";

function Comments() {
	// Setting our component's initial state
	const [comments, setComments] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all comments and store them with setComments
	useEffect(() => {
		loadComments();
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
				.catch((err) => console.log(err));
		}
	}

	return (
		<Row>
			<Col size='md-6'>
				<form>
					<Input onChange={handleInputChange} name='title' placeholder='Title (required)' />
					<TextArea onChange={handleInputChange} name='body' placeholder='your comment here' />
					<FormBtn
						disabled={!(formObject.title && formObject.body)}
						onClick={handleFormSubmit}>
						Submit Comment
					</FormBtn>
				</form>
			</Col>
			<Col size='md-6 sm-12'>
				{comments.length ? (
					<Table>
						{comments.map((comment) => (
                     <Tr>
                           <Link key={comment._id} to={"/comments/" + comment._id}>
									<Td>
										<strong>{comment.title}:</strong> {comment.body}
									</Td>
									<Td>{comment.date}</Td>
							</Link>
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
		</Row>
	);
}

export default Comments;
