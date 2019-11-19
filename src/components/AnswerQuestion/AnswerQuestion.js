import React, { Component } from 'react'

class AnswerQuestion extends Component {
    state = {
        formStatus: false,
        answerContent: '',
    }

    showAn = () => {
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
        const { answerContent } = this.state
        this.props.answerQuestion(answerContent)
        this.setState({ answerContent: "" })


    }


    render() {
        const { formStatus, answerContent } = this.state
        return (
            <div>
                {!formStatus ?
                    <button onClick={this.showAn}> Answer </button>
                    : <>
                        <form onSubmit={this.submitForm}>
                            <input type="text" name="answerContent" value={answerContent} onChange={this.handleOnChange} placeholder="add your question here..."></input>

                            <button>Response</button>
                        </form>
                        <button onClick={this.showAn}> cancel </button>

                    </>
                }
            </div>
        )
    }
}

export default AnswerQuestion;