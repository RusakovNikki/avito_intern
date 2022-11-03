import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async function () {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')

        const data = await response.json()

        return data
    }
)

const initialState = {
    newsItems: [],
    isLoading: false,
    error: null,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.isLoading = false
            state.newsItems = action.payload
        },
        [fetchNews.rejected]: (state, action) => { },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = newsSlice.actions

export default newsSlice.reducer