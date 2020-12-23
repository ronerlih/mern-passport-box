import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Detail(props) {
  const [comment, setComment] = useState({})

  // When this component mounts, grab the comment with the _id of props.match.params.id
  // e.g. localhost:3000/comments/599dcb67f0f16317844583fc
  const {id} = useParams()

  useEffect(() => {
    API.getComment(id)
      .then(res => setComment(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
               <strong> {comment.title} </strong>
              <p>
                {comment.body}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to all comments</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
