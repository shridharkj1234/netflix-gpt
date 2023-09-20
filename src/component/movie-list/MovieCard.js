import React from 'react'
import { MOVIE_POSTER } from '../../utils/constants'

const MovieCard = ({poster}) => {
  return (
      <img alt='Movie Poster' src={MOVIE_POSTER+poster}/>
  )
}

export default MovieCard
