import React from 'react'
import { useState } from 'react';
import QuizUI from './components/QuizUI'

// const App = () => {

//   let [quiestion, setquiestion] = useState(0);
//   let [score, setscore] = useState(0)
//   let [result, setresult] = useState(false)

// const hover = ()=>{}


//   let quiestionsApi = [
//     {
//       id: 1,
//       quiestionn: "html stand for !",
//       options: ["hyper texter markup language", "hyper text mekup language", "hyper text markup language", "hello text markup language"],
//       answer: "hyper text markup language"
//     },
//     {
//       id: 2,
//       quiestionn: "css stand for !",
//       options: ["caseer cading style sheet", "case cooding style sheet", "case cading style shepreat", "case cading style sheet"],
//       answer: "case cading style sheet"
//     },
//   ]

//   // console.log(quiestionsApi[0].answer)
//   const nextbtn = (elem) => {
//     if (elem.target.value === quiestionsApi[quiestion].answer) {
//       console.log("yes")
//     }
//     // console.log("input value", elem.target.value)
//   }

//   return <div>
//     {/* <h1>Html Quiz app</h1> */}
//     {/* {console.log(quiestionsApi)} */}
//     {/* <form action="#"> */}
//     {/* <input type="text" onChange={nextbtn}/> */}
//     {/* <button onClick={nextbtn}>button</button> */}
//     {/* </form> */}

//     <div className="quizSection">
//       <h1 id="quiestioner">
//         {quiestionsApi[quiestion].id + " "}{quiestionsApi[quiestion].quiestionn}
//       </h1>
//       <ul>
//       <ol id="optioner">
//         {/* <li>  {quiestionsApi[quiestion].options}</li> */}

//         {/* {quiestionsApi[quiestion].map((Val,ind,arr)=>{
//           console.log()
//         })} */}

//       {
//         quiestionsApi.map((v ,i ,a)=>{
//           // console.log(quiestionsApi[quiestion].options[i])
         
//           return <li key={i} onClick={hover}>{quiestionsApi[quiestion].options[i]}</li>
//           // console.log( <li key={i}>ali</li>)
//           // `<li key={i}>ali</li>`
          
//           // console.log(i)
//         })
        
//       }
//       </ol>
//         {
          
//           // quiestionsApi.map((v,i,a)=>{
            
//           //   return <li>hello</li>
//           // })
          
//           }
//       </ul>
//     </div>
//   </div>

// }


// // let QuizUi = () => {
// //   <h1>QuizUi</h1>
// // }

// export default App


// import React, { useState } from 'react';
// import Quiz from './Quiz';
// import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{
        textAlign: "center",
        color:"black",
        fontSize:"3em"
      }}>HTML Beginner Quiz</h1>
      <QuizUI />
    </div>
  );
}

export default App;
