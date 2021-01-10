import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";
import Recommendation from "../components/Recommendation";
import Search from "../components/Search";
import Card from "../components/Card";
import { List } from "../components/List";

function Home({ username }) {
        

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
};

getRecos = () => {
    API.getRecos(this.state.q)
    .then(res =>
        this.setState({
        recos: res.data
        })
    )
    .catch(() =>
        this.setState({
        recos: [],
        message: "No recommendations found, try a new query"
        })
    );
};

handleFormSubmit = event => {
    event.preventDefault();
    this.getRecos();
};

// save function, look over might need to change names
handleRecoSave = id => {
    const reco = this.state.recos.find(reco => reco.id === id);

    API.saveReco({
    recommendation: reco.reco_name,
    username: reco.reco_username,
    link: reco.reco_link,
    keywords: reco.reco_keywords,
    description: reco.reco_description,
    image: reco.reco_pic.thumbnail
    }).then(() => this.getRecos());
};

return <>
        <div>Home<button>
        <Link to={"/uploadRec"}>Upload Recommendation</Link>
    </button></div>
        ,
        <Container>
            <Row>
                <Col size="md-12">
                    <Card title="Search" icon="far fa-thumbs-up">
                        <Search
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Card title="Results">
                        {this.state.recos.length ? (
                            <List>
                                {this.state.recos.map(reco => (
                                    // look over, might need to change names 
                                    <Recommendation
                                        key={reco.id}
                                        recommendation={reco.reco_name}
                                        username={reco.username}
                                        link={reco.reco_link}
                                        description={reco.reco_description}
                                        image={reco.reco_pic}
                                        Button={() => (
                                            <button
                                                onClick={() => this.handleRecoSave(reco.id)}
                                                className="btn btn-primary ml-2"
                                            >
                        Save
                                            </button>
                                        )} />
                                ))}
                            </List>
                        ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                    </Card>
                </Col>
            </Row>
        </Container>;
        </>
};


export default Home;