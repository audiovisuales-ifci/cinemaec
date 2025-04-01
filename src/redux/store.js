import { configureStore } from '@reduxjs/toolkit'
import notification from './notificationReducer'
import movies from './moviesReducer'
import loader from './loader.reducer'

const store = configureStore({
  reducer: {
    notification,
    movies,
    loader,
  },
})

export default store
