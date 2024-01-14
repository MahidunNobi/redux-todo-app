import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./features/todoSlice"
import userReducers from "./features/users/userSlice"

export const store = configureStore({
    reducer: {
        todo: todoReducers,
        users: userReducers
    }
})