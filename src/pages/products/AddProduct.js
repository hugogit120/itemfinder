import React, { Component } from "react";
import apiService from "../../services/Api";

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
            <div>
                <form onSubmit={this.handleFormSubmit}>

                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />

                    <label>image:</label>
                    <input type="text" name="image" value={image} onChange={this.handleChange} />

                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={this.handleChange} />

                    <label>Price:</label>
                    <input type="number" name="price" value={price} onChange={this.handleChange} />

                    <label>Category:</label>
                    <input type="text" name="category" value={category} onChange={this.handleChange} />

                    <input type="submit" value="createProduct" />
                </form>
            </div>
        );
    }
}

export default AddProduct;
