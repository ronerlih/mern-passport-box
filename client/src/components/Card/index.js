import React from "react";

function Card(props) {
  return (
    <div className="card text-center text-light bg-dark m-3">
      <div className="card-header text-left">
        <strong>{props.heading}: </strong>
      </div>
      <div className="card-body ">{props.children}</div>
    </div>
  );
}

export default Card;