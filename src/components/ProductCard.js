import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class ProductCard extends Component {

    render() {
        const { product } = this.props

        return (
            <>
                {product ?
                    <article>
                        <img src={product.image} />

                        <h3>{product.title}</h3>

                        <Link to={`/product/${product._id}`} >details</Link>

                    </article>
                    : <p>pepe...</p>}
            </>
        )
    }
}

export default withAuth(ProductCard)