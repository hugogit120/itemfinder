import React, { Component } from 'react';
import apiService from "../../services/Api";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';
import Question from '../../components/Questions/Question';

class ProductDetails extends Component {

    state = { product: "" }

    async componentDidMount() {
        const { id } = this.props.match.params
        const product = await apiService.getOneProduct(id)
        const { data } = product
        this.setState({ product: data })
    }


    render() {
        const { product } = this.state
        return (
            <>
                {product ?
                    <>
                        <article>
                            <img src={product.image} />

                            <h3>{product.title}</h3>

                            {this.props.isLoggedin && this.props.user._id === product.owner ? <Link to={`/product/${product._id}/edit`}>edit</Link> : null}
                        </article>
                        <Question questions={product.comments}></Question>
                    </>
                    : <p>pepe...</p>}

            </>
        )
    }
}

export default withAuth(ProductDetails);