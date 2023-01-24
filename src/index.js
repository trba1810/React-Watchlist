import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/layout/Header";
import Counter from "./Components/WatchPages/Counter";
import MoviePage from "./Components/WatchPages/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="p-3 m-3 row text-center">
      <Counter />
      <MoviePage />
    </div>
  </div>
);
