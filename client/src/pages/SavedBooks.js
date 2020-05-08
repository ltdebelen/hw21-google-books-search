import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SavedList from "../components/SavedList";
import axios from "axios";

class savedBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get("/api/books").then((books) => {
      this.setState({ books: books.data });
    });
  }

  handleDelete = (id) => {
    axios.delete(`/api/books/${id}`).then((response) => {
      if (response.status === 200) {
        alert("Book has been deleted!");
        axios.get("/api/books").then((books) => {
          this.setState({ books: books.data });
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <SavedList books={this.state.books} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default savedBooks;
