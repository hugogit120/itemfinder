import React from 'react'

export default function Question({ questions }) {
    return questions.map((question) => {
        return (

            <div>
                <h3>{question.owner.username}</h3>
                <p>{question.body}</p>
            </div>
        )
    })


}
