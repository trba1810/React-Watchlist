import React from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { movieList: ["Harry Potter", "Goblin"] };
  });

  function handleAddMovie(newMovie) {
    setMovieState((prevState) => {
      return {
        movieList: prevState.movieList.concat(newMovie),
      };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};

export default MoviePage;
