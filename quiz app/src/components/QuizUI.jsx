import React from 'react'

const QuizUI = (quiestion,options) => {
    return <div>
        <h1>{quiestion}</h1>
        <ul>
            <li>{options}</li>
        </ul>
    </div>

}

export default QuizUI