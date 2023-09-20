import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../custom-hook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../custom-hook/usePopularMovies';
import useTraindingMovies from '../custom-hook/useTraindingMovies';

const Browse = () => {
  
  //fetching movies from tmdb API
  useNowPlayingMovies();
  usePopularMovies();
  useTraindingMovies();
  return (
    <div className=''>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse
