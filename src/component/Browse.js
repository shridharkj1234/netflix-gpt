import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../custom-hook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import { useSelector } from 'react-redux';

const Browse = () => {
  
  //fetching movies from tmdb API
  useNowPlayingMovies();
  return (
    <div className='text-white'>
      <Header/>
      <MainContainer/>
      {/* <SecondContainer/> */}
    </div>
  )
}

export default Browse
