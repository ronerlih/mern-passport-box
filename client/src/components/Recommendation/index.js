import React from "react";
import { Row, Col } from "../Grid";

function Recommendation ({ reco_name, username, reco_link, reco_description, reco_pic, Button }) {
    return (
    <ListItem>
        <Row className="flex-wrap-reverse">
        <Col size="md-8">
            <h3 className="font-italic">{reco_name}</h3>
            <h5 className="font-italic">Recommended by: {username}</h5>
        </Col>
    <Col size="md-4">
            <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={reco_link}>
                Purchase item!
            </a>
            <Button />
            </div>
        </Col>
        </Row>
        <Row>
        <Col size="12 sm-4 md-2">
            <img className="img-thumbnail img-fluid w-100" src={reco_pic} alt={reco_name} />
        </Col>
        <Col size="12 sm-8 md-10">
            <p>{reco_description}</p>
        </Col>
        </Row>
    </ListItem>
    );
}

export default Recommendation;