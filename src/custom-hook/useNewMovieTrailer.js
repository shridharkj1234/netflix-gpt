import { useEffect } from "react";
import { MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesTrailer } from "../utils/slices/moviesListSlice";

const useNewMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const movieTrailer = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          MOVIES_API
        );
        const jsonData = await movieTrailer.json();
        const filteredByTrailer = jsonData.results?.filter(
          (movie) => movie.type === "Trailer"
        );
        dispatch(addMoviesTrailer(filteredByTrailer[0]))
      };
      useEffect(() => {
        getMovieTrailer();
      }, []);
}

export default useNewMovieTrailer;