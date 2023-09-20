import React from "react";
import ViewMovieOverview from "./ViewMovieOverview";
import ViewMovieTrailer from "./ViewMovieTrailer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  //add movie trailer to state
  const movie = useSelector((state) => state.moviesList?.movieList);
  if (!movie.length) return
  const firstMovie = movie[0];
  const {original_title, overview, id} = firstMovie
  return (
    <div className="relative">
          <ViewMovieOverview title={original_title} overview={overview}/>
          <ViewMovieTrailer id={id}/>
    </div>
  );
};

export default MainContainer;
