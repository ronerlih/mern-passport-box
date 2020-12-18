import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "./pages/Comments";
import { Container } from "./components/Grid";
import Comment from "./pages/Comment";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head.js";

function App() {
  return (
    <Router>
      <Container fluid>
         <Head />
        <Switch>
          <Route exact path={["/", "/comment"]}>
            <Comments />
          </Route>
          <Route exact path="/comments/:id">
            <Comment />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
