import React from "react";

function savedBookCard(props) {
  return (
    <div className="card flex-row flex-wrap">
      <div className="card-header border-0">
        <img src={props.image} alt="" />
      </div>
      <div className="card-block px-2">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-muted">by: {props.author}</p>
        <p className="card-text">{props.description}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mb-3"
        >
          View
        </a>
        <button
          className="btn btn-danger ml-3 mb-3"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
      </div>
      <div className="w-100"></div>
      <div className="card-footer w-100 text-muted"></div>
    </div>
  );
}

export default savedBookCard;
