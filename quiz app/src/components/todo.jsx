import React, { useState, useNavigate } from 'react'
import './todo.css'
import Navigate from './navigate'


// const del = () => {
//     console.log('delet')
// }
// const edi = () => {
//     console.log('edit')
// }

// const sub = (sammer) => {
//     // console.log('edit')
//     // alert('tick')

// }

// const saner = (elme) => 


//     /// all fanctions





//     // let [arr, setarr] = useState([])
//     // let [list, setlist] = useState()
//     // const [arr, setarr] = useState([])
//     // arr.push(arr = elme.target.value)
//     // arr.push(elme.target.value)
//     console.log(elme.target.value)
//     // setlist(list = "sammer")
//     // console.log(list)
//     // arr.push(elme.target.value)
//     // listarr.push(elme.target.value)
//     // console.log(arr)
//     // arr.push("reder")
// }

function Todo() {
    let [arrval, setarr] = useState("kareem")
    let [arrayOfvalue, setArrVell] = useState([])
    let [listRender, setlistRender] = useState([])
    let [navig] = useNavigate()


    // functional fnc 
    const del = () => {
        console.log('delet')
    }
    const edi = () => {
        console.log('edit')
    }

    const sub = (sammer) => {
        setlistRender(listRender.push(arrval))
        console.log(listRender)

    }

    // let [inputTodoVal,setTodoVal] = useState([])
    const saner = (elme) => {
        setarr(arrval = elme.target.value)
        //arrayOfvalue.push(arrval)
        //console.log(arrayOfvalue)
    }

    const naver = () => {nav = './navigate'
    }

    return (
        <div className='todo'>
            {/* <h1>Todo</h1>
            <form action='#'>
                <input type="text" placeholder='Enter your Todo' onChange={saner} value={arrval} />
                <button onClick={sub}>navigate</button>
            </form>
            <ul>
                <li>{listRender}<button onClick={del}>Delete</button><button onClick={edi}>Edit</button></li>
            </ul> */}
            <button onClick={naver}>navigate</button>
        </div>

    )
}


export default Todo