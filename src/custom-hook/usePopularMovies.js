import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { MOVIES_API } from '../utils/constants';
import { getPopularMovies } from '../utils/slices/moviesListSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=4', MOVIES_API)
    const moviesData = await data.json();
    dispatch(getPopularMovies(moviesData.results))
  }
  useEffect(() => {
    getMoviesData()
  },[])
}

export default usePopularMovies
