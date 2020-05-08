import React from "react";
import BookCard from "./BookCard";

function ResultsList(props) {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Results</div>
        <ul className="list-group list-group-flush">
          {props.books.map((book, index) => (
            <BookCard
              key={index}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors[0]}
              description={book.volumeInfo.description}
              link={book.volumeInfo.previewLink}
              handleSave={props.handleSave}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultsList;
