import "./App.css";
import "primeicons/primeicons.css";
import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./components/searchPage/";
import HomePage from "./components/homePage/";
import { Route } from "react-router-dom";
import groupBy from "lodash.groupby";
function BooksApp() {
  const [shelvesState, setShelvesState] = useState({});
  // component did Mount -> BooksAPI.getAll()
  useEffect(() => {
    async function fetchShelvesData() {
      const allBooks = await BooksAPI.getAll();
      const groupedBooks = groupBy(allBooks, "shelf");
      if (!groupedBooks.currentlyReading) groupedBooks.currentlyReading = [];
      if (!groupedBooks.read) groupedBooks.read = [];
      if (!groupedBooks.wantToRead) groupedBooks.wantToRead = [];
      setShelvesState(groupedBooks);
    }
    fetchShelvesData();
  }, []);
  // moves a book to another shelf
  const updateShelfHandler = (book, shelf) => {
    if (shelf === book.shelf) return;
    BooksAPI.update(book, shelf);
    setShelvesState((prevState) => {
      // remove from state
      if (book.shelf !== "none") {
        const prevIndex = prevState[book.shelf]
          .map((b) => b.id)
          .indexOf(book.id);
        console.log(prevIndex);
        if (prevIndex > -1) {
          prevState[book.shelf].splice(prevIndex, 1);
        }
      }
      // add to state
      book.shelf = shelf;
      prevState[shelf].push(book);
      return { ...prevState };
      //Another solution: re-get all;
    });
  };
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            shelvesState={shelvesState}
            updateShelfHandler={updateShelfHandler}
          />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <SearchPage
            shelvesState={shelvesState}
            updateShelfHandler={updateShelfHandler}
          />
        )}
      />
    </div>
  );
}

export default BooksApp;
