// import React from 'react'

// const QuizUI = (quiestion,options) => {
//     return <div>
//         <h1>{quiestion}</h1>
//         <ul>
//             <li>{options}</li>
//         </ul>
//     </div>

// }

// export default QuizUI


import React, { useState } from 'react';
import './quizUi.css';

const questions =  [
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
        { answerText: "Home Tool Markup Language", isCorrect: false },
        { answerText: "Hyperlink Text Management Language", isCorrect: false }
      ]
    },
    {
      questionText: "What is the first tag in an HTML document?",
      answerOptions: [
        { answerText: "<html>", isCorrect: false },
        { answerText: "<body>", isCorrect: false },
        { answerText: "<!DOCTYPE>", isCorrect: true },
        { answerText: "<head>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag is used to insert a line break?",
      answerOptions: [
        { answerText: "<br>", isCorrect: true },
        { answerText: "<lb>", isCorrect: false },
        { answerText: "<break>", isCorrect: false },
        { answerText: "<newline>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag is used to display an image?",
      answerOptions: [
        { answerText: "<img>", isCorrect: true },
        { answerText: "<picture>", isCorrect: false },
        { answerText: "<image>", isCorrect: false },
        { answerText: "<src>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag defines the title of a document?",
      answerOptions: [
        { answerText: "<title>", isCorrect: true },
        { answerText: "<meta>", isCorrect: false },
        { answerText: "<head>", isCorrect: false },
        { answerText: "<header>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag is used to define an input field in a form?",
      answerOptions: [
        { answerText: "<input>", isCorrect: true },
        { answerText: "<form>", isCorrect: false },
        { answerText: "<field>", isCorrect: false },
        { answerText: "<textbox>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag is used for creating headings?",
      answerOptions: [
        { answerText: "<h1> to <h6>", isCorrect: true },
        { answerText: "<header>", isCorrect: false },
        { answerText: "<head>", isCorrect: false },
        { answerText: "<h>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML attribute is used to define inline styles?",
      answerOptions: [
        { answerText: "style", isCorrect: true },
        { answerText: "class", isCorrect: false },
        { answerText: "id", isCorrect: false },
        { answerText: "styles", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML tag is used to create a hyperlink?",
      answerOptions: [
        { answerText: "<a>", isCorrect: true },
        { answerText: "<link>", isCorrect: false },
        { answerText: "<href>", isCorrect: false },
        { answerText: "<anchor>", isCorrect: false }
      ]
    },
    {
      questionText: "Which HTML element is used for inserting a comment?",
      answerOptions: [
        { answerText: "<!-- comment -->", isCorrect: true },
        { answerText: "<comment>", isCorrect: false },
        { answerText: "// comment", isCorrect: false },
        { answerText: "# comment", isCorrect: false }
      ]
    }
  ];
  ;

function QuizUI() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const ret = () => {
        location.reload()
    }

    return (
        <div className="quiz">
            {showScore ? (
                <div className="score-section">
                    your Score: {score} out of {questions.length}
                    <button onClick={ret}>return</button>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// function QuizUI(params) {

//     let [quiestioncounter, setQuestioncounter] = useState(0)
//     let [result, setResult] = useState(false)
//     let [score, setScore] = useState(0)

//     if (quiestioncounter == questions.length) {
//         alert('complete')

//         return
//       }

//     //   const nextQuiestion = setQuestioncounter(quiestioncounter+1)
//     //   if (quiestioncounter == questions.lenght) {
//     //     console.log("render true")
//     //   }

//     const anserChenker = (ele) => {
//         console.log(ele, 'ui')
//         setQuestioncounter(quiestioncounter + 1)
//         if (ele === true) {
//             setScore(score + 1 )
//             console.log(score)
//         }

//     }

//     return <div className="ui">
//         <h3>{questions[quiestioncounter].questionText}</h3>
//         <h4>quiestions : {quiestioncounter}/{questions.length}</h4>
//         <ol>
//             {
//                 questions[quiestioncounter].answerOptions.map((val, ind) => {
//                     // console.log()
//                     return <button key={ind} onClick={()=>anserChenker(val.isCorrect)}>{val.answerText}</button>
//                 })
//             }
//         </ol>
//     </div>

// }

export default QuizUI;
