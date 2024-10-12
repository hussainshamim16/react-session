import React, { useEffect } from 'react'
import { useState } from 'react'

const Todo = () => {
    const [inputVal, setInputVel] = useState('Defaulter')
    const [arrInput, setArr] = useState([])

    // useEffect(() => { 

    // console.log('change hua')

    // }, [])

    const valuGet = (event) => {
        setInputVel(event.target.value)
        console.log("valuGet", inputVal)


    }

    const submitTodo = (event) => {
        // if(!inputVal){
        //     alert("Enter Todo Value !")
        //     event.preventDefault()
        //     return
        // }else{
        //     arrInput.push(inputVal)
        // }
        // setInputVel(event.target.value)
        // arrInput.push(inputVal)
        // console.log("inut vel",inputVal)
        // console.log("array",arrInput)
        setInputVel("")
        event.preventDefault()
        arrInput.push(inputVal)
        console.log("submitTodo")
    }

    const delet = (ev) => {
        // arrInput.splice(ev, 1)
        console.log(arrInput)
        console.log("delete", ev)
    }

    const edit = (ev) => {
        // const edit = prompt("enter your edit value")
        // const mergination = arrInput.splice(ev, 1, edit)
        // console.log(mergination)
        console.log("edite")
    }



    return (
        <div>

            <form>
                <input
                    type="text"
                    placeholder='enter your todo'
                    onChange={valuGet}
                    value={inputVal}
                />
                <button type='submit' onClick={submitTodo}>add todo</button>
            </form>
            <ol>
                {arrInput.map((value, index) => {
                    return <li key={index}>{value}
                        <button
                            onClick={() => edit(index)}
                            className='edite'
                        >Edit</button>
                        <button
                            onClick={() => delet(index)}
                            className='delete'
                        >Delete</button>
                    </li>
                })}
            </ol>

        </div>
    )
}

export default Todo