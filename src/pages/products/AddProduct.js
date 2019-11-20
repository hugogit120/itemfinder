import React, { Component } from "react";
import apiService from "../../services/Api";
import service from "../../services/UploadService"
import './AddProduct.css'

class AddProduct extends Component {
    state = { title: "", image: "", description: "", price: "", category: "", image: "" };

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

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        // creamos un objeto FormData que permite compilar un conjunto de pares clave/valor para enviar mediante AJAX
        const uploadData = new FormData();
        // image => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        const uploaded = uploadData.append("image", e.target.files[0]);

        console.log(uploaded)

        service.handleUpload(uploadData)
            .then(response => {
                // console.log('response is: ', response);
                // after the console.log we can see that response carries 'secure_url' which we can use to update the state
                this.setState({ image: response.secure_url });
            })
            .catch(err => {
                console.log("Error while uploading the file: ", err);
            });
    }

    render() {
        const { title, image, description, price, category } = this.state;
        return (
            <div className="create-product-container">
                <form className="create-product-form" onSubmit={this.handleFormSubmit}>

                    <input type="file" id="file-input" name="file-input"
                        onChange={(e) => this.handleFileUpload(e)} className="create-product-input" name="image" />
                    <label htmlFor="file-input">image:</label>


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