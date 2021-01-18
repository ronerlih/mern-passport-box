import React, { Component, useEffect, useState } from "react";
import API from "../utils/API";
import { List } from "../components/List";
import Card from "../components/Card";
import { Form } from "../components/Form";
import DisplayRecos from "../components/DisplayRecos";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";

// function Search({ username }) {
//     const [searchState, setSearchState] = useState({
//         searchTerm: "",
//         prompt: "Search for a Product Recommendation",
//         username: ""    
//     })

//     const [resultState, setResultState] = useState({
//         results: [],
//         username: "",
//         message: ""
//     })

//     useEffect(() => {
//         //set user after successful component mount
//         setResultState({
//             results: [],
//             username: "",
//             message: "",
//             username
//         })  
//     }, [username]);
       


//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setSearchState({
//             ...searchState, 
//             [name]: value
//         });
//     };

//     function handleFormSubmit(event) {
//         event.preventDefault();
//         console.log("clicked");
//         getSearchedRecos();
//     };
    

//     function getSearchedRecos() {
//         API.findKeywordRecos()
//             .then(res =>
//                 setResultState({
//                     results: res,
//                     message: "",
//                     username: username
//                 })
//             )
//             .catch(() =>
//                 setResultState({
//                     results: [],
//                     message: "Please try again",
//                     username: username
//                 })
//             );
//     };

//     function handleRecoSave(id) {
//         const savedReco = resultState.results.find(result => result.id === id);

//         API.saveReco({
//             reco_id: savedReco.reco_id,
//             reco_name: savedReco.reco_name,
//             reco_pic: savedReco.reco_pic,
//             reco_description: savedReco.reco_description,
//             reco_link: savedReco.reco_link,
//             reco_keywords: savedReco.reco_keywords,
//             date: savedReco.reco_date,
//             username: savedReco.username
//         }).then(() => this.getSearchedRecos())
//     }

//         return (
//             <Container>
//                 <Row>
//                     <Col size="md-12">
//                         <Card title="Search For a Book">
//                             <Form
//                                 handleInputChange={handleInputChange}
//                                 handleFormSubmit={handleFormSubmit}
//                                 onChange = {e => setSearchState({searchTerm: e.target.value})}
//                             />
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <p>Upload your own:
//                         <button><Link to={"/uploadRec"}>Upload</Link></button>
//                     </p>
//                 </Row>
//                 <Row>
//                     <p>Or view your saved recommendations:
//                         <button><Link to={"/savedRecs"}>Saved</Link></button>
//                     </p>
//                 </Row>
//                 <Row>
//                     <Col size='md-12'>
//                         <Card title="Search Results">
//                             {resultState.results.length > 0 ? (
//                                 <List>
//                                     {resultState.results.map(result => (
//                                         <DisplayRecos
//                                             key={result._id}
//                                             title={result.reco_name}
//                                             pic={result.reco_pic}
//                                             link={result.reco_link}
//                                             description={result.reco_description}
//                                             keywords={result.reco_keywords}
//                                             date={result.reco_date}
//                                             Button={() => (
//                                                 <button
//                                                     className="btn btn-dark ml-2"
//                                                     onClick={() => this.handleRecoSave(result._id)}>Save Recommendation</button>
//                                             )}

//                                         />
//                                     ))}
//                                 </List>
//                             ) : (
//                                     <h3 className="text-center">{this.state.prompt}</h3>
//                                 )}
//                         </Card>


//                     </Col>
//                 </Row>
//             </Container>
//         )
    
// }

class Search extends Component {
    state = {
        recoResults: [],
        searchTerm: "",
        prompt: "Search For a Product Recommendation"
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("clicked");
        this.getSearchedRecos();
    };

    getSearchedRecos = () => {
        API.findKeywordRecos(this.state.searchTerm)
            .then(res =>
                this.setState({
                    recoResults: res.data
                })
            )
            .catch(() =>
                this.setState({
                    recoResults: [],
                    prompt: "Please try again"
                })
            );
    };

    handleRecoSave = id => {
        const reco = this.state.recoResults.find(reco => reco.id === id);

        API.saveReco({
            reco_Id: reco.reco_id,
            reco_name: reco.reco_name,
            reco_pic: reco.reco_pic,
            reco_description: reco.reco_description,
            reco_link: reco.reco_link,
            reco_keywords: reco.reco_keywords,
            date: reco.reco_date
        }).then(() => this.getSearchedRecos())
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card title="Search For a Book">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                searchTerm={this.state.searchTerm}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <p>Upload your own:
                        <button><Link to={"/uploadRec"}>Upload</Link></button>
                    </p>
                </Row>
                <Row>
                    <p>Or view your saved recommendations:
                        <button><Link to={"/savedRecs"}>Saved</Link></button>
                    </p>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <Card title="Search Results">
                            {this.state.recoResults.length > 0 ? (
                                <List>
                                    {this.state.recoResults.map(result => (
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
                                    <h3 className="text-center">{this.state.prompt}</h3>
                                )}
                        </Card>


                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;