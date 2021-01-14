import React from "react";

function Card({ title, children }) {
  return (
    <div className="card text-center text-light bg-dark m-3">
      <div className="card-header text-left">
        <strong>{title} </strong>
      </div>
      <div className="card-body ">{children}</div>
    </div>
  );
}

export default Card;