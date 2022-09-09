import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk(
    '@getPhotos',
    async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.json()

        return data
    }
)

export const photosSlice = createSlice({
    name: '@photos',
    initialState: {
        entity: [],
        loading: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state, _) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(getPhotos.rejected, (state, _) => {
                state.loading = ''
                state.error = 'Something went wrong!'
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = ''
                state.entity.push(...action.payload)
            })
    }
})

export const photosReducer = photosSlice.reducer
// export const { addPhotos, addUsers, addPosts, toggleLoading } = photosSlice.actions