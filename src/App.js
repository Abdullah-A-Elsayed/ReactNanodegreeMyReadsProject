import React, { useState } from "react";
// import * as BooksAPI from './BooksAPI'
import SearchPage from "./components/searchPage/";
import HomePage from "./components/homePage/";
import "./App.css";

function BooksApp() {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage setShowSearchPage={setShowSearchPage} />
      ) : (
        <HomePage setShowSearchPage={setShowSearchPage} />
      )}
    </div>
  );
}

export default BooksApp;
