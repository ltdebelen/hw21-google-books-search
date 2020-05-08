import React from "react";

function SearchBar(props) {
  return (
    <div className="container">
      <form onSubmit={props.searchBook}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="text"
            placeholder="Search for a book..."
            onChange={props.handleSearch}
            required={true}
          />
          <input
            type="submit"
            className="form-control mt-2 btn btn-primary"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
