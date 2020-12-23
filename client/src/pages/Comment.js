import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

function Comment() {
  const [comment, setComment] = useState({})
  // When this component mounts, grab the comment with the _id of props.match.params.id
  // e.g. localhost:3000/comments/599dcb67f0f16317844583fc
  const match = useRouteMatch('/comments/:id');
   
  useEffect(() => {
    API.getComment(match.params.id)
      .then(res => setComment(res.data))
      .catch(err => console.log(err));
  }, [match.params.id])

  return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
               <Card heading={comment.username}>
                  {comment.body}
               </Card>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link className="text-dark" to="/comments">← Back to all comments</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Comment;
