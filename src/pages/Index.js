import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import apiService from "../services/Api"
import ProductCard from '../components/ProductCard';

class Index extends Component {

    state = { allProducts: null }

    async componentDidMount() {
        const allProducts = await apiService.getAllProducts()
        const { data } = allProducts
        this.setState({ allProducts: data })
    }

    render() {
        const { allProducts } = this.state
        return (
            <div>
                <h1>Products</h1>
                {allProducts ?
                    allProducts.map((product, index) => {
                        return <ProductCard key={index} product={product}>{product.title}</ProductCard>
                    })
                    : <p>Loading...</p>}
            </div>
        )
    }
}

export default withAuth(Index)