import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import * as api from './config'
import { userReducer } from "./features/user-slice/user-slice";
import { photosReducer } from "./features/photos-slice/photos-slice";
import { usersReducer } from "./features/users-slice/users-slice";
import { postsReducer } from "./features/posts-slice/posts-slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        photos: photosReducer,
        users: usersReducer,
        posts: postsReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
})