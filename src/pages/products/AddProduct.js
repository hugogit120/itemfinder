import React, { Component } from "react";
import apiService from "../../services/Api";
import './AddProduct.css'

class AddProduct extends Component {
    state = { title: "", image: "", description: "", price: "", category: "" };

    addProduct = async (product) => {
        const newProduct = await apiService.createProduct(product)
        console.log(newProduct)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { title, image, description, price, category } = this.state
        this.addProduct({ title, image, description, price, category });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { title, image, description, price, category } = this.state;
        return (
            <div className="create-product-container">
                <form className="create-product-form" onSubmit={this.handleFormSubmit}>

                    <label>image:</label>
                    <input className="create-product-input" type="text" name="image" value={image} onChange={this.handleChange} />

                    <label>Title:</label>
                    <input className="create-product-input" type="text" name="title" value={title} onChange={this.handleChange} />

                    <label>Description:</label>
                    <textarea className="create-product-input-description" type="text" name="description" value={description} onChange={this.handleChange} />

                    <label>Price:</label>
                    <input className="create-product-input" type="number" name="price" value={price} onChange={this.handleChange} />

                    <label>
                        Category:
          <select value={category} onChange={this.handleChange}>
                            <option value="electronics">electronics</option>
                            <option value="vehicle">vehicle</option>
                            <option value="computer">computer</option>
                        </select>
                    </label>

                    <input type="submit" value="createProduct" />
                </form>
            </div>
        );
    }
}

export default AddProduct;
