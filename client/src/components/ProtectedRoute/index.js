import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => (
   <Route render={ props => (
      children.props.id
       ? children
       : <Redirect to='/' />
   )} />
)
 export default ProtectedRoute;