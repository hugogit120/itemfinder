import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import apiService from "../services/Api"
import ProductCard from '../components/ProductCard/ProductCard';

class Index extends Component {

    state = {
        allProducts: "",
        searchfield: ""
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    async componentDidMount() {
        const allProducts = await apiService.getAllProducts()
        const { data } = allProducts
        this.setState({ allProducts: data })
    }

    render() {
        const { allProducts } = this.state

        let filteredProducts = allProducts;

        if (allProducts) {
            filteredProducts = this.state.allProducts.filter(products => {
                return products.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            //console.log(filteredProducts);
        }


        return (
            <div>
                <div className='pa2'>
                    <input
                        className='pa3 ba b--green bg-lightest-blue'
                        type='search'
                        placeholder='search products'
                        onChange={this.onSearchChange}
                    />
                </div>
                <h1>Products</h1>
                <section style={{ display: "flex", flexDirection: "column" }}>
                    {filteredProducts ?
                        filteredProducts.map((product, index) => {
                            return <ProductCard key={index} product={product}>{product.title}</ProductCard>
                        })
                        : <p>Loading...</p>}
                </section>

            </div>
        )
    }
}

export default withAuth(Index)

