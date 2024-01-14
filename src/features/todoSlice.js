import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "First Task"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action)=>{               
                state.todos.push(action.payload)
            },
            prepare: (i)=>{
                return {payload: {
                    id:nanoid(),
                    text: i
                }}
            }
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {            
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo )
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer