import React from "react";

export default function bookList({ books, updateShelfHandler }) {
  return (
    <ol className="books-grid">
      {!books && (
        <i className="pi pi-spin pi-spinner" style={{ fontSize: "3em" }}></i>
      )}
      {books &&
        books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                    onChange={(e) => {
                      const targetShelf = e.target.value;
                      if (
                        ["read", "wantToRead", "currentlyReading"].indexOf(
                          targetShelf
                        ) > -1
                      ) {
                        // update
                        updateShelfHandler(book, targetShelf);
                      }
                    }}
                    value={book.shelf}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(", ")}</div>
            </div>
          </li>
        ))}
    </ol>
  );
}
