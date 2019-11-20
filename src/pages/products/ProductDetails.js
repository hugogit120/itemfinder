import React, { Component } from 'react';
import apiService from "../../services/Api";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom';
import Question from '../../components/Questions/Question';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import AnswerQuestion from '../../components/AnswerQuestion/AnswerQuestion'
import BuyButton from '../../components/BuyButton/BuyButton'

import './ProductDetails.css'


class ProductDetails extends Component {

    state = {
        product: "",
        id: null,
        comments: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const product = await apiService.getOneProduct(id)
        const { data } = product
        this.setState({ product: data, id, comments: product.data.comments })
    }

    async addNewQuestion(question) {
        const { id, comments } = this.state
        //const { id } = this.state
        const comment = await apiService.addComment(question, id)
        console.log(comment)
        comments.push(comment)
        //create comment
        this.setState({ comments })
    }

    async buyProduct() {
        const { id } = this.state
        const user = await apiService.buyProduct(id)
        console.log(user)
    }

    async answerQuestion(answer, id) {
        const { comments } = this.state
        const answeredComment = await apiService.answerComment(answer, id)
        const commentsCopy = [...comments];
        const commentIndex = commentsCopy.findIndex(comment => comment._id === answeredComment._id)
        commentsCopy.splice(commentIndex, 1)
        commentsCopy.splice(commentIndex, 0, answeredComment);
        //create comment
        this.setState({ comments: commentsCopy })
    }



    render() {
        const { product, comments } = this.state
        return (
            <>
                {product ?
                    <>
                        <article>
                            <div className="image-detail-container">
                                <img className="product-image-detail" src={product.image} />
                            </div>

                            <h2 className="Price-detail">{product.price}$</h2>
                            <h3 className='title-detail'>{product.title}</h3>
                            <p className='detail-body'>{product.description}</p>

                            {this.props.isLoggedin && this.props.user._id === product.owner ? <Link to={`/product/${product._id}/edit`}>edit</Link> : null}
                        </article>

                        <section className="comments">

                            {comments.map(comment => {
                                return (
                                    <Question question={comment}>
                                        {this.props.isLoggedin && this.props.user._id === product.owner ? <AnswerQuestion answerQuestion={(answer) => this.answerQuestion(answer, comment._id)} /> : null}
                                    </Question>
                                )
                            })}

                            {this.props.isLoggedin && this.props.user._id !== product.owner ? <AddQuestion addNewQuestion={(question) => this.addNewQuestion(question)} /> : null}
                            {this.props.isLoggedin && this.props.user._id !== product.owner && !product.buyed ? <BuyButton buyProduct={() => this.buyProduct()} /> : null}
                        </section>
                    </>
                    : <p>pepe...</p>}


            </>
        )
    }
}

export default withAuth(ProductDetails);