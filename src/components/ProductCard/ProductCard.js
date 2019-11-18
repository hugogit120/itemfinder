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
                            <div>

                                <img src={product.image} />

                                <h3>{product.title}</h3>

                            </div>
                        </Link>

                    </article>

                    : <p>pepe...</p>}
            </>
        )
    }
}




export default withAuth(ProductCard)