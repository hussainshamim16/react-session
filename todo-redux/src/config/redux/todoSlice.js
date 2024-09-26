import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        add: (state, action) => {
            state.todo.push({
                id: nanoid(),
                title: action.payload.title
            });
        },

        edit: (state, action) => {
            const { id, newTitle } = action.payload;
            const todoItem = state.todo.find(item => item.id === id);
            if (todoItem) {
                todoItem.title = newTitle;  // Update the todo title
            }
        },

        remove: (state, action) => {
            const index = state.todo.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.todo.splice(index, 1);  // Remove the todo item
            }
        }
    }
});

export const { add, edit, remove } = todoSlice.actions;
export default todoSlice.reducer;
