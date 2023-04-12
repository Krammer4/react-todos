import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: 'todos',
    initialState: { 
        todoList: [],
    },
    reducers:{
        addTodo:(state, action) => {
            state.todoList.push({
                name:action.payload, 
                id: Date.now(),
                completed:false,
            })
        },
        removeTodo:(state,action) =>{
            state.todoList = state.todoList.filter(todo=>todo.id !== action.payload)
        },
        toggleCompleted:(state, action) => {
            const toggledTodo = state.todoList.find(todo => todo.id == action.payload)
            toggledTodo.completed = !toggledTodo.completed
        },
        editTodo: (state, action) => {
            const editingTodo = state.todoList.find(todo => todo.id == action.payload.id)
            editingTodo.name = action.payload.name
        },
        clearList: (state,action)=>{
            state.todoList = []
        }

    }
})


export const todoReducer = todoSlice.reducer
export const {addTodo, removeTodo, toggleCompleted, editTodo, clearList} = todoSlice.actions