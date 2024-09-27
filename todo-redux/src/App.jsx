import React, { useRef, useState } from 'react';
import { add, edit, remove } from './config/redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const App = () => {
  // // ref for input field
  // const inputVal = useRef();



  // // dispatch to trigger redux actions
  // const dispatch = useDispatch();
  
  // // select todo data from Redux store
  // const todoData = useSelector((state) => state.todo.todo);

  // // handle adding task
  // const addTask = (event) => {
  //   if(!inputVal.value){
  //     alert("Enter Correct Todo")
  //     return
  //   }
  //   event.preventDefault();
  //   dispatch(add({
  //     title: inputVal.current.value
  //   }));
  //   inputVal.current.value = '';
  // }

  // // handle removing task
  // const removeTask = (id) => {
  //   dispatch(remove(id));
  // }

  // // handle editing task
  // const startEdit = (id, currentTitle) => {
  //   setEditMode(id);
  //   setEditInputValue(currentTitle);
  // }

  // const saveEdit = (id) => {
  //   dispatch(edit({ id, newTitle: editInputValue }));
  
  // }


  const inputVal = useRef()
  //dispatch
  const dispatch = useDispatch()
  //state
  const todoData = useSelector((state) => state.todo.todo)
  //on changing of todoData
  const addTask = (event) => {
    event.preventDefault()
    dispatch(add({
      title: inputVal.current.value
    }))
    // console.log(todoData)
    inputVal.current.value = ''
  }

  return (
    // <>
    //   <h1>Create Task</h1>
    //   <input type="text" placeholder='Add task' ref={inputVal} />
    //   <button onClick={addTask}>Add Task</button>

    //   <ul>
    //     {todoData.map((item) => (
    //       <li key={item.id}>
    //         {editMode === item.id ? (
    //           <>
    //             <input 
    //               type="text" 
    //               value={editInputValue} 
    //               onChange={(e) => setEditInputValue(e.target.value)}
    //             />
    //             <button onClick={() => saveEdit(item.id)}>Save</button>
    //           </>
    //         ) : (
    //           <>
    //             {item.title}
    //             <button onClick={() => startEdit(item.id, item.title)}>Edit</button>
    //             <button onClick={() => removeTask(item.id)}>Delete</button>
    //           </>
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <>
     <h1>create task</h1>
      <input type="text" placeholder='add task' ref={inputVal} />
      <button onClick={() => addTask(event)}>add task</button>
      <ul>
        {console.log("ali bad",todoData)}
        {
          todoData.map((value, index) => {
            // console.log("id",index)
           return <li key={index}>{value.title} <button onClick={()=>dispatch(edit(index))}>edit</button> <button onClick={()=>dispatch(remove(index))}>Delete</button></li>
          })
        }
      </ul>
    </>
  );
}

export default App;
