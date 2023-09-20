import React from "react";
import MovieList from "./movie-list/MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const { movieList, popularMovies, traindingMovies } = useSelector((state) => state.moviesList);
  return (
    <div className=" bg-black h-screen text-white relative w-screen ">
      <div className="absolute -top-80 left-0">
        <MovieList title="Now Playing Movies" movieList={movieList} />
        <MovieList title="Popular" movieList={popularMovies} />
        <MovieList title="Trending" movieList={traindingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
