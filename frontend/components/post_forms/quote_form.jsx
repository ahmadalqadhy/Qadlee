import React from 'react'
// import ModalContainer from '../modal/modal'

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_type: "quote",
            title: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.closeModal()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state);
        this.props.createPost(post)
            .then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="modal-container">
                <div className="image-container">
                    <img className="form-profile-pic" src={this.props.currentUser.profilePicUrl} />
                </div>
                <div className="quote-form-container">
                    <h2 className="form-username">{this.props.currentUser.username}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder='"Quote"'
                            value={this.state.title}
                            onChange={this.update("title")}
                            className="quote-form-title-input"/>
                        <br/>
                        <input type="text"
                            placeholder='-- Source'
                            value={this.state.body}
                            onChange={this.update("body")}
                            className="quote-form-body-input" />
                        <div className="post-button-area">
                            <input type="submit" value="Post" className="post-button" />
                        </div>
                    </form>
                    <button className='close-button' onClick={this.handleClick}>Close</button>
                </div>
            </div>
        )
    }
}

export default QuoteForm