import { configureStore } from '@reduxjs/toolkit'
import Data from "./data"
import Date from "./date";

export const store = configureStore({
    reducer: {
        data:Data,
        date:Date
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch