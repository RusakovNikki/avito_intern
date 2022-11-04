import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './slices/itemSlice'
import newsReducer from './slices/newsSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        item: itemReducer,
    },
})
