import React, { useState } from "react";
// import * as BooksAPI from './BooksAPI'
import SearchPage from "./components/searchPage/";
import HomePage from "./components/homePage/";
import "./App.css";
import { Route } from "react-router-dom";
function BooksApp() {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  return (
    <div className="app">
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/search" render={() => <SearchPage />} />
    </div>
  );
}

export default BooksApp;
