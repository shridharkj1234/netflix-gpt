import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList, title }) => {
  return (
    <div className="px-8 ">
      <h1 className="font-light text-2xl py-4">{title+''}</h1>
      <div className="flex overflow-x-scroll gap-4 h-52">
        {movieList?.map((movie) => {
          return <MovieCard key={movie.id} poster={movie.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
