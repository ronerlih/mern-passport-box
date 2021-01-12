import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Input } from "../components/Form";
import { Container, Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";
import { List } from "../components/List";
import DisplayRecos from "../components/DisplayRecos";

function UploadRec({ username }) {

    //setting initial state
    const [recoState, setRecoState] = useState({
        recos: [],
        prompt: "You Have Not yet Uploaded a Recommendation!"
    });
    const [formObject, setFormObject] = useState({
        reco_name: "",
        reco_pic: "",
        reco_link: "",
        reco_description: "",
        reco_keywords: "",
        username: ""
    });


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

    }, [username]);

    function loadMyRecos() {
        API.getMyRecos()
            .then(res => setRecoState({ ...recoState, recos: res }))
            .catch(err => console.log(err));
    }

    //Handle updating component state when user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }


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

    return <>
        <Container>
            <div>Upload</div>
            <Row>
                <Col size='md-12'>
                    <form>
                        <Col size='sm-12'>
                            <Card title="Upload a Recommendation">
                                <form>
                                    <div className="form-group">
                                        <Input value={formObject.reco_name} onChange={handleInputChange} name='reco_name' placeholder='Title' />
                                        <Input className='form-control' value={formObject.reco_description} onChange={handleInputChange} name='reco_description' placeholder='description' />
                                        <Input className='form-control' value={formObject.reco_pic} onChange={handleInputChange} name='reco_pic' placeholder='pic' />
                                        <Input className='form-control' value={formObject.reco_link} onChange={handleInputChange} name='reco_link' placeholder='link' />
                                        <Input className='form-control' value={formObject.reco_keywords} onChange={handleInputChange} name='reco_keywords' placeholder='keywords' />
                                    </div>
                                </form>
                            </Card>
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
                    <Card>
                        {recoState.recos.length > 0 ? (
                            <List>
                                {recoState.recos.map(result => (
                                    <DisplayRecos
                                        key={result._id}
                                        title={result.reco_name}
                                        pic={result.reco_pic}
                                        link={result.reco_link}
                                        description={result.reco_description}
                                        keywords={result.reco_keywords}
                                        date={result.reco_date}
                                        Button={() => (
                                            <button
                                                className="btn btn-dark ml-2"
                                                onClick={() => this.handleRecoSave(result._id)}>Save Recommendation</button>
                                        )}

                                    />
                                ))}
                            </List>
                        ) : (
                                <h3 className="text-center">{recoState.prompt}</h3>
                            )}
                    </Card>
                </Col>
            </Row>
        </Container>
    </>


}

export default UploadRec;