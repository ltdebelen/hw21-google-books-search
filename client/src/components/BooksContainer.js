import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";

class BooksContainer extends Component {
  state = {
    books: [],
    searchField: "",
  };

  searchBook = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`
      )
      .then((data) => {
        if (data.data.totalItems > 0) {
          this.setState({ books: [...data.data.items] });
        } else {
          this.setState({ books: [] });
        }
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSave = (title, author, description, link, image) => {
    const book = {
      title,
      author,
      description,
      link,
      image,
    };

    axios.post("/api/books", book).then((data) => {
      if (data.status === 200) {
        alert("Book is added to your saved list!");
      }
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <ResultsList handleSave={this.handleSave} books={this.state.books} />
      </div>
    );
  }
}

export default BooksContainer;
