import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";

function UploadRec({ username }) {

    //setting initial state
    const [recos, setRecos] = useState([]);
    const [formObject, setFormObject] = useState({
        reco_name: "",
        reco_pic: "",
        reco_link: "",
        reco_description: "",
        reco_keywords: "",
        username: ""
    });

    //getting input element ref for focus
    // const titleInputElRef = useRef();
    // const picInputElRef = useRef();

    useEffect(() => {
        //set user after successful component mount
        setFormObject({
            reco_name: "",
            reco_pic: "",
            reco_link: "",
            reco_description: "",
            reco_keywords: "",
            username: "", username
        })

        loadMyRecos();

        // focus on titleInputEl if ref exists
        // titleInputElRef.current.focus()
        // picInputElRef.current.focus()
    }, [username]);

    //Informs user reco was uploaded
    // function recoUploaded() {
    //     alert("uploaded");
    // }

    function loadMyRecos() {
        API.getMyRecos()
            .then(res => setRecos(res.data))
            .catch(err => console.log(err));
    }

    //Handle updating component state when user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }
    // function handleInputChange(event) {
    //     const value = event.target.value;
    //     setFormObject({ ...formObject, [event.target.name]: value });
    // }


    // When form submitted, use API.saveReco method to save reco data
    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.description) {
    //         recoUploaded()
    //     }
    // }

    // When form submitted, use API.saveReco method to save reco data
    function handleFormSubmit(event) {
        event.preventDefault();
        // if (formObject.body) {
            API.uploadReco({
                reco_name: formObject.reco_name,
                reco_pic: formObject.reco_pic,
                reco_link: formObject.reco_link,
                reco_description: formObject.reco_description,
                reco_keywords: formObject.reco_keywords,
                username: formObject.username
            })
                // .then(recoUploaded)
                .then(() => setFormObject({
                    reco_name: "",
                    reco_pic: "",
                    reco_link: "",
                    reco_description: "",
                    reco_keywords: "",
                    username: ""
                }))
                .catch(err => console.log(err));
        // }
    }


    //add photo
    //add link
    //add description
    //add keywords
    //submit button to post 

    //add to recommendation_db
    //upload associated with user_id
    //attributes = reco_name, reco_pic, reco_link, reco_description, reco_keywords

    return <>
        <Container>
            <div>Upload</div>
            <Row>
                <Col size='md-12'>
                    <form>
                        <Col size='sm-12'>
                        
                                    <input className='form-control' value={formObject.reco_name} onChange={handleInputChange} name='reco_name' placeholder='Title' /> 
                                    <input className='form-control' value={formObject.reco_description} onChange={handleInputChange} name='reco_description' placeholder='description' /> 
                                    <input className='form-control' value={formObject.reco_pic} onChange={handleInputChange} name='reco_pic' placeholder='pic' />  
                                    <input className='form-control' value={formObject.reco_link} onChange={handleInputChange} name='reco_link' placeholder='link' />  
                                    <input className='form-control' value={formObject.reco_keywords} onChange={handleInputChange} name='reco_keywords' placeholder='keywords' />   
                           
                            {/* <ForwardRefInput ref={titleInputElRef} value={formObject.reco_name} onChange={handleInputChange} name='reco_name' placeholder='Title' />

                        <ForwardRefInput ref={picInputElRef} value={formObject.reco_pic} onChange={handleInputChange} name='reco_pic' placeholder='Photo' /> */}

                            {/* <ForwardRefInput ref={titleInputElRef} value={formObject.reco_link} onChange={handleInputChange} name='reco_link' placeholder='Link' />

                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_description} onChange={handleInputChange} name='reco_description' placeholder='Description' />

                        <ForwardRefInput ref={titleInputElRef} value={formObject.reco_keywords} onChange={handleInputChange} name='reco_keywords' placeholder='Keywords' /> */}
                        </Col>
                        <FormBtn
                            disabled={!formObject.reco_name}
                            onClick={handleFormSubmit}>
                            Upload Recommendation
					</FormBtn>
                    </form>
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    {recos.length ? (
                        <Table>
                            {recos.map(reco => (
                                <Tr key={reco._id}>
                                    <Td>
                                        {reco.reco_name}
                                    </Td>
                                </Tr>
                            ))}
                        </Table>
                    ) : (
                            <h3>Upload a Recommendation</h3>
                        )}


                </Col>
            </Row>
        </Container>
    </>


}

export default UploadRec;