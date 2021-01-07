import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";

function UploadRec({ username }) {

    //setting initial state
    const [formObject, setFormObject] = useState({
        reco_name: "",
        reco_pic: "",
        reco_link: "",
        reco_description: "",
        reco_keywords: "",
        username: ""
    });

    //getting input element ref for focus
    const titleInputElRef = useRef();

    useEffect(() => {
        //set user after successful component mount
        setFormObject({
            reco_name: "",
            reco_pic: "",
            reco_link: "",
            reco_description: "",
            reco_keywords: "",
            username: ""
        })

        // focus on titleInputEl if ref exists
        titleInputElRef.current.focus()
    }, [username]);

    //Informs user reco was uploaded
    function recoUploaded() {
        alert("uploaded");
    }

    //Handle updating component state when user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }


    // When form submitted, use API.saveReco method to save reco data
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.description) {
            recoUploaded()
        }
    }

    // When form submitted, use API.saveReco method to save reco data
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.body) {
    //         API.uploadReco({
    //             body: formObject.body,
    //             username: formObject.username
    //         })
    //             .then(recoUploaded)
    //             .then(() => setFormObject({
    //                 body: "",
    //                 username: ""
    //             }))
    //             .catch(err => console.log(err));
    //     }
    // }


    //add photo
    //add link
    //add description
    //add keywords
    //submit button to post 

    //add to recommendation_db
    //upload associated with user_id
    //attributes = reco_name, reco_pic, reco_link, reco_description, reco_keywords

    return <>
        <div>Upload</div>
        <Row>
            <Col size='md-12'>
                <form>
                    <Col size='sm-12'>
                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_name} onChange={handleInputChange} name='reco_name' placeholder='Title' />

                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_pic} onChange={handleInputChange} name='reco_pic' placeholder='Photo' />

                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_link} onChange={handleInputChange} name='reco_link' placeholder='Link' />
                   
                        <ForwardRefInput ref={titleInputElRef} value={formObject.description} onChange={handleInputChange} name='description' placeholder='Description' />

                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_keywords} onChange={handleInputChange} name='reco_keywords' placeholder='Keywords' />
                    </Col>
                    <FormBtn
                        disabled={!formObject.description}
                        onClick={handleFormSubmit}>
                        Upload Recommendation
					</FormBtn>
                </form>
            </Col>
        </Row>
    </>

}

export default UploadRec;