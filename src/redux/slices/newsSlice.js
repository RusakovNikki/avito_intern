import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async function (URL) {
        try {
            const response = await fetch(URL)

            if (!response.ok) {
                throw new Error('Server error!')
            }

            const data = await response.json()

            return data
        } catch (error) {

        }

    }
)

const initialState = {
    newsItems: [],
    isLoading: false,
    isReload: false,
    error: null,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
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