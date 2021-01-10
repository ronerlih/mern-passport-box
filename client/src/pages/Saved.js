import React, { Component } from "react";
import Card from "../components/Card";
import Recommendation from "../components/Recommendation";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component {
state = {
    recos: []
};

componentDidMount() {
    this.getSavedRecos();
}

getSavedRecos = () => {
    API.getSavedRecos()
    .then(res =>
        this.setState({
        recos: res.data
        })
    )
    .catch(err => console.log(err));
};

handleRecoDelete = id => {
    API.deleteReco(id).then(res => this.getSavedRecos());
};

render() {
    return (
    <Container>
        <Row>
        <Col size="md-12">
            <Card title="Saved Recommendations" icon="far fa-heart">
            {this.state.recos.length ? (
                <List>
                {this.state.recos.map(reco => (
                    <Recommendation
                    key={reco._id}
                    recommendation={recommendation.reco_name}
                    username={reco.username}
                    link={reco.reco_link}
                    description={reco.reco_description}
                    image={reco.reco_pic}
                    Button={() => (
                        <button
                        onClick={() => this.handleRecoDelete(reco._id)}
                        className="btn btn-danger ml-2"
                        >
                        Delete
                        </button>
                    )}
                    />
                ))}
                </List>
            ) : (
                <h2 className="text-center">No Saved Recommendations</h2>
            )}
            </Card>
        </Col>
        </Row>
        <Footer />
    </Container>
    );
}
}

export default Saved;