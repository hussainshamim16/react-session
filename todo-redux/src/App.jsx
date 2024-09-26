import React, { useEffect, useRef, useState } from 'react';
import { add, edit, remove } from './config/redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const App = () => {

  // ref
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

  useEffect(() => {
    console.log("update todo data", todoData)
  }, [todoData])

  return (
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
  )
}

export default App

