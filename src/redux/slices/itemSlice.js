import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItem = createAsyncThunk(
    'news/fetchItem',
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
        [fetchItem.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [fetchItem.fulfilled]: (state, action) => {
            state.isLoading = false
            state.item = action.payload
        },
        [fetchItem.rejected]: (state, action) => { },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = newsSlice.actions

export default newsSlice.reducer