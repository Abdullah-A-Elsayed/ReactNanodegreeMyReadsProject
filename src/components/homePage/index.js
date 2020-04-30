import React from "react";
import Shelf from "./shelf";
import { Link } from "react-router-dom";
export default function homePage({ shelvesState, updateShelfHandler }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>
          MyReads <i className="pi pi-bookmark"></i>
        </h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title="Currently Reading"
            books={shelvesState.currentlyReading}
            updateShelfHandler={updateShelfHandler}
          />
          <Shelf
            title="Want to Read"
            books={shelvesState.wantToRead}
            updateShelfHandler={updateShelfHandler}
          />
          <Shelf
            title="Read"
            books={shelvesState.read}
            updateShelfHandler={updateShelfHandler}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
