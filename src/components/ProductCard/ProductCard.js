import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import './ProductCard.css'


class ProductCard extends Component {

    render() {
        const { product } = this.props

        return (
            <>
                {product ?
                    <article className='boxshadow' >
                        <Link className='link-to-product' to={`/product/${product._id}`} >
                            <div style={{ display: "flex" }}>

                                <img src={product.image} className='cardImage' />

                                <div className='labelContainer'>
                                    <label className='label1'>{product.title}</label>
                                    <label className='label2'>{product.price}$</label>
                                    <label className='label3'>{product.updated_at}</label>
                                </div>
                            </div>
                        </Link>

                    </article>

                    : <p>pepe...</p>}
            </>
        )
    }
}




export default withAuth(ProductCard)