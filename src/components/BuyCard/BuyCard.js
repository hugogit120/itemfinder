import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import BuyButton from '../BuyButton/BuyButton';
import "./BuyCard.css"

class BuyCard extends Component {

    render() {
        const { product } = this.props

        return (
            <>
                {product ?
                    <article className='buy-card' >
                        <Link className='link--' to={`/product/${product._id}`} >
                            <div>

                                <img src={product.image} className='buy-card-image' />

                                <div className=''>
                                    <label className=''>{product.title}</label>
                                </div>
                            </div>
                        </Link>

                    </article>

                    : <p>loading...</p>}
            </>
        )
    }
}




export default withAuth(BuyCard)