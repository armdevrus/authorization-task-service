import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    '@getUsers',
    async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = res.json()

        return data
    }
)

export const usersSlice = createSlice({
    name: '@posts',
    initialState: {
        entity: [],
        loading: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, _) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(getUsers.rejected, (state, _) => {
                state.loading = ''
                state.error = 'Something went wrong!'
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = ''
                state.entity.push(...action.payload)
            })
    }
})

export const usersReducer = usersSlice.reducer
// export const { addPhotos, addUsers, addPosts, toggleLoading } = photosSlice.actions