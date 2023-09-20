import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieList: [],
    movieTrailer: [],
    popularMovies:[],
    traindingMovies:[]
}
const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        getMovies: (state,action)=>{
            state.movieList = action.payload 
        },
        getPopularMovies: (state,action)=>{
            state.popularMovies = action.payload 
        },
        getTrendingMovies: (state,action)=>{
            state.traindingMovies = action.payload 
        },
        addMoviesTrailer: (state,action)=>{
            state.movieTrailer = action.payload
        }
    }
})

export const {getMovies, addMoviesTrailer, getPopularMovies, getTrendingMovies} = moviesListSlice.actions

export default moviesListSlice.reducer