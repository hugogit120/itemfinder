import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import './addQuestion.css'

class AddQuestion extends Component {
    state = {
        formStatus: false,
        questionContent: '',
    }

    showAddForm = () => {
        const { formStatus } = this.state
        this.setState({ formStatus: !formStatus })
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        const { questionContent } = this.state
        this.props.addNewQuestion(questionContent)
        this.setState({ questionContent: "" })


    }


    render() {
        const { formStatus, questionContent } = this.state
        return (
            <div className="ask-div">
                {!formStatus ?
                    <button className="ask-button" onClick={this.showAddForm}> ask something </button>
                    : <>
                        <form onSubmit={this.submitForm}>
                            <input type="text" name="questionContent" className="input-question" value={questionContent} onChange={this.handleOnChange} placeholder="add your question here..."></input>
                            <div className="buttons-container">
                                <button className="ask-button" type="submit">Add question</button>
                                <button className="ask-button" onClick={this.showAddForm}> cancel </button>
                            </div>
                        </form>


                    </>
                }
            </div>
        )
    }
}

export default withAuth(AddQuestion)