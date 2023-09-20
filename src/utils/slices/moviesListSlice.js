import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieList: [],
    movieTrailer: []
}
const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        getMovies: (state,action)=>{
            state.movieList = action.payload 
        },
        addMoviesTrailer: (state,action)=>{
            state.movieTrailer = action.payload
        }
    }
})

export const {getMovies, addMoviesTrailer} = moviesListSlice.actions

export default moviesListSlice.reducer