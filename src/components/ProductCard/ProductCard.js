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
                        <Link to={`/product/${product._id}`} >
                            <div style={{ display: "flex" }}>

                                <img src={product.image} />

                                <div >
                                    <label>{product.title}</label>
                                    <label>{product.price}</label>
                                    <label>{product.owner._id}</label>
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