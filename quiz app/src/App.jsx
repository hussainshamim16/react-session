import React from 'react'
import { useState } from 'react';

const App = () => {

  const [quiestion, setquiestion] = useState(0);
  const [score, setscore] = useState(0)
  const [result, setresult] = useState(false)


  const quiestionsApi = [
    {
      id: 1,
      quiestion: "html stand for !",
      options: ["hyper texter markup language", "hyper text mekup language", "hyper text markup language", "hello text markup language"],
      answer: "hyper text markup language"
    },
    {
      id: 2,
      quiestion: "css stand for !",
      options: ["caseer cading style sheet", "case cooding style sheet", "case cading style shepreat", "case cading style sheet"],
      answer: "case cading style sheet"
    },
  ]

  console.log(quiestionsApi[0].answer)
  const nextbtn = (elem) => {
    if (elem.target.value === quiestionsApi[quiestion].answer) {
      console.log("yes")
    }
    // console.log("input value", elem.target.value)
  }
  
  return <div>
    <h1>Html Quiz app</h1>
    {/* {console.log(quiestionsApi)} */}
    <form action="#">
      {/* <input type="text" onChange={nextbtn}/> */}
      {/* <button onClick={nextbtn}>button</button> */}
    </form>
  </div>

}


    let QuizUi = () => {
      <h1>QuizUi</h1>
    }

export default App