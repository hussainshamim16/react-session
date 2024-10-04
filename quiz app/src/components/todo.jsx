import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [inputVal = setInputVel] = useState('')
    const [arrInput = setArr] = useState([])
    const inputText = (event) => {
        // console.log("hello",)
        (event.target.value)
        // setInputVel(event.target.value)
        console.log(event.target.value) 
    }
    const addTodo = () => {
        console.log("hello")
    }


    return (
        <div>

            <input type="text" placeholder='enter your todo' onChange={()=>inputText(event)} />
            <button onClick={addTodo}>add todo</button>
            <ol>
                <li>sleeping</li>
            </ol>

        </div>
    )
}

export default Todo