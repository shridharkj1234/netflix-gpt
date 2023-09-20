import { useEffect } from "react";
import { MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getTrendingMovies } from '../utils/slices/moviesListSlice';

const useTraindingMovies = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=8",
      MOVIES_API
    );
    const moviesData = await data.json();
    dispatch(getTrendingMovies(moviesData.results));
  };
  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useTraindingMovies;
