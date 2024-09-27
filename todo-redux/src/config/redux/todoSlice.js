// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name: "todo",
//     initialState: {
//         todo: []
//     },
//     reducers: {
//         add: (state, action) => {
//             state.todo.push({
//                 id: nanoid(),
//                 title: action.payload.title
//             });
//         },

//         edit: (state, action) => {
//             const { id, newTitle } = action.payload;
//             const todoItem = state.todo.find(item => item.id === id);
//             if (todoItem) {
//                 todoItem.title = newTitle;  // Update the todo title
//             }
//         },

//         remove: (state, action) => {
//             const index = state.todo.findIndex(item => item.id === action.payload);
//             if (index !== -1) {
//                 state.todo.splice(index, 1);  // Remove the todo item
//             }
//         }
//     }
// });

// export const { add, edit, remove } = todoSlice.actions;
// export default todoSlice.reducer;


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
            // console.log("edited",state.todo.splice(action.payload,1,1))
            // const editVal = prompt("Enter Your Edited Value")
            // console.log(editVal)
            // console.log(action.payload.title)
            // state.todo[action.payload.indexer] = action.payload.title
            // console.log(state.todo)
            // let giveEdit = action.payload.title
            // let indexNumber = action.payload.event
            // let stater = state.todo
            // console.log(stater[action.payload.indexer] = giveEdit)
            // console.log(action.payload.event)
            // console.log(state.todo.({
            //     title:giveEdit
            // }))

            const {title,event} = action.payload
            state.todo[event].title =  title

            // console.log(state.todo)
        },
        remove: (state, action) => {
            console.log(state.todo.splice(action.payload, 1))
        }
    }
})
export const { add, edit, remove } = todoSlice.actions
export default todoSlice.reducer
