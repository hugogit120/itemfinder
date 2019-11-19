import React from 'react'

function Button(props) {
    return (
        <div>
            <button>{props.children}</button>
        </div>
    )
}

export default Button