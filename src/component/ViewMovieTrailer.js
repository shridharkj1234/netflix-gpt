import React from "react";
import useNewMovieTrailer from "../custom-hook/useNewMovieTrailer";
import { useSelector } from "react-redux";

const ViewMovieTrailer = ({id}) => {
  useNewMovieTrailer(id);
  const {key}=useSelector((state)=>state.moviesList?.movieTrailer)
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1 `}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default ViewMovieTrailer;
