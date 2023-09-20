import { useDispatch } from "react-redux";
import { getMovies } from "../utils/slices/moviesListSlice";
import { useEffect } from "react";
import { MOVIES_API } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', MOVIES_API)
    const moviesData = await data.json();
    dispatch(getMovies(moviesData.results))
  }
  useEffect(() => {
    getMoviesData()
  },[])
}

export default useNowPlayingMovies