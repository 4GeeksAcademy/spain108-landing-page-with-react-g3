// Cards.jsx
import React from "react";

const Cards = ({ title, text, image }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div className="mt-auto">
            <a href="#" className="btn btn-primary">Find out more!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
