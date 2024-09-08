import React, { useState } from 'react'
import './todo.css'



// const [list, setlist] = useState('')

const del =()=>{
    console.log('delet')
}
const edi =()=>{
    console.log('edit')
}

const sub = (ele) =>{
    // alert('tick')
    
}
const saner =(elme)=>{
    // let [arr, setarr] = useState([])
    // const [arr, setarr] = useState([])
    // arr.push(arr = elme.target.value)
    // arr.push(elme.target.value)
    console.log(elme.target.value)
    // arr.push(elme.target.value)
    // listarr.push(elme.target.value)
    // console.log(arr)
    // arr.push("reder")
}

function Todo() {
    return (
        <div className='todo'>
            <h1>Todo</h1>
            <form action='#'>
                <input type="text" placeholder='Enter your Todo' onChange={saner}/>
                <button onClick={sub}>Add</button>
            </form>
            <ul>
                <li>reder<button onClick={del}>Delete</button><button onClick={edi}>Edit</button></li>
            </ul>
        </div>

    )
}

export default Todo