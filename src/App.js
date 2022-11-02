import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import ProTypes from "prop-types";

function App() {
  return null;
}

Movie.prototype = {
  medium_cover_image: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default App;
