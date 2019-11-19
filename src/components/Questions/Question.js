import React from 'react'
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Question({ question, children }) {
    return (
        <div className="question-box">
            <div className="question">
                <FontAwesomeIcon icon={faComment} /><h3>{question.body}</h3>
                <p>{question.owner.username}</p>
            </div>
            {!question.answer ? children : <p>{question.answer}</p>}
            <hr />
        </div>
    )
}
