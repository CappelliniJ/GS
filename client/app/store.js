import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice'
import movieSlice from './movieSlice'
import userSlice from './userSlice'
import singleMovieSlice from './singleMovieSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: movieSlice,
        users: userSlice,
        singleMovie: singleMovieSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export * from '../features/auth/authSlice'
