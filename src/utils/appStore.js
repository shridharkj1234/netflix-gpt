import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import moviesReducer  from './slices/moviesListSlice'
export const appStore = configureStore({
    reducer: {
        user: userReducer,
        moviesList: moviesReducer 
    }
})

