import React from "react";
import BookList from "../shared/bookList";
export default function currentlyReading({ title, books, updateShelfHandler }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} updateShelfHandler={updateShelfHandler} />
      </div>
    </div>
  );
}
