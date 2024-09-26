import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo"
    , initialState: {
        todo: []
    }
    , reducers: {
        add: (state, action) => {
            // console.log("action.payload.title")
            state.todo.push({
                id: nanoid(),
                title: action.payload.title
            })
        },

        edit: (state, action) => {
            console.log("edited",state.todo.splice(action.payload,1,1))
            // const editVal = prompt("Enter Your Edited Value")
            // console.log(editVal)
        },

        remove: (state, action) => {
            console.log(state.todo.splice(action.payload,1))
        }

    }
})

export const { add, edit, remove } = todoSlice.actions
export default todoSlice.reducer