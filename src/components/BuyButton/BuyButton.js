import React from 'react'
import './BuyButton.css'

function BuyButton(props) {
    return (
        <div className="float-bar" onClick={() => props.buyProduct()}>
            <button className="buy-button">Buy</button>
        </div>
    )
}

export default BuyButton