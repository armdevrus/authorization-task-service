import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    '@getPosts',
    async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = res.json()

        return data
    }
)

export const postsSlice = createSlice({
    name: '@posts',
    initialState: {
        entity: [],
        loading: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, _) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(getPosts.rejected, (state, _) => {
                state.loading = ''
                state.error = 'Something went wrong!'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = ''
                state.entity.push(...action.payload)
            })
    }
})

export const postsReducer = postsSlice.reducer
// export const { addPhotos, addUsers, addPosts, toggleLoading } = photosSlice.actions