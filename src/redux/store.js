import { todoReducer } from "./slices/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer:{
        todo: todoReducer,
        
    }
})