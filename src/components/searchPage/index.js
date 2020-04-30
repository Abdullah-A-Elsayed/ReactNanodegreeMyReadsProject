import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookList from "../shared/bookList";
import propTypes from "prop-types";
function searchPage({ shelvesState, updateShelfHandler }) {
  const [searchStr, setSearchStr] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    if (!searchStr) return;
    const search = async () => {
      let books = await BooksAPI.search(searchStr, 20);
      if (books.error) return;
      for (let i = 0; i < books.length; i++) {
        if (
          shelvesState.currentlyReading.map((b) => b.id).indexOf(books[i].id) >
          -1
        )
          books[i].shelf = "currentlyReading";
        else if (shelvesState.read.map((b) => b.id).indexOf(books[i].id) > -1)
          books[i].shelf = "read";
        else if (
          shelvesState.wantToRead.map((b) => b.id).indexOf(books[i].id) > -1
        )
          books[i].shelf = "wantToRead";
        else {
          books[i].shelf = "none";
        }
      }
      setAllBooks(books);
    };
    search();
  }, [searchStr]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList books={allBooks} updateShelfHandler={updateShelfHandler} />
      </div>
    </div>
  );
}
searchPage.propTypes = {
  shelvesState: propTypes.object,
  updateShelfHandler: propTypes.func,
};
export default searchPage;
