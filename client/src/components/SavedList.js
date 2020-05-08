import React from "react";
import SavedBookCard from "./SavedBookCard";

function SavedList(props) {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Results</div>
        <ul className="list-group list-group-flush">
          {props.books.map((book, index) => (
            <SavedBookCard
              key={index}
              image={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
              link={book.link}
              id={book._id}
              handleDelete={props.handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SavedList;
