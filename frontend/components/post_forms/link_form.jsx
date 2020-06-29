import React from 'react'
// import ModalContainer from '../modal/modal'

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_type: "link",
            title: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e){
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
                <div className="link-form-container">
                    <h2 className="link-form-username">{this.props.currentUser.username}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.update("title")}
                            className="link-form-title-input" />
                        <br />
                        <textarea
                            placeholder="Type or paste a URL"
                            value={this.state.body}
                            onChange={this.update("body")}
                            className="link-form-body-input"></textarea>
                        <div className="post-button-area">
                            <input type="submit" value="Post" className="link-post-button" />
                        </div>
                    </form>
                    <button className='link-close-button' onClick={this.handleClick}>Close</button>
                </div>
            </div>
        )
    }
}

export default LinkForm