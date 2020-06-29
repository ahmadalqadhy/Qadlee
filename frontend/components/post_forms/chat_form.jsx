import React from 'react'
// import ModalContainer from '../modal/modal'

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_type: "chat",
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
                <div className="chat-form-container">
                    <h2 className="form-username">{this.props.currentUser.username}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.update("title")}
                            className="text-form-title-input" />
                        <br />
                        <textarea
                            placeholder="Funeral Director: what happened to this Italian chef?&#x0a;Police Officer: we believe this man PASTA way&#x0a;Funeral Director: get out&#x0a;Police Officer: PASTA&#x0a;Funeral Director: ...&#x0a;Police Officer: WAY"
                            value={this.state.body}
                            onChange={this.update("body")}
                            className="chat-form-body-input"></textarea>
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

export default TextForm