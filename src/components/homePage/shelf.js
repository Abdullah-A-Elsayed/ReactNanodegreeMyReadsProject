import React from "react";
import BookList from "../shared/bookList";
import propTypes from "prop-types";
function shelf({ title, books, updateShelfHandler }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} updateShelfHandler={updateShelfHandler} />
      </div>
    </div>
  );
}

shelf.propTypes = {
  title: propTypes.string,
  books: propTypes.array,
  updateShelfHandler: propTypes.func,
};
export default shelf;
