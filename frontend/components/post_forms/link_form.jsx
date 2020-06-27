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
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick (e){
    //     e.preventDefault()
    //     this.props.closeModal
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state);
        this.props.createPost(post)
        // .then(() => this.props.history.push("/dashboard"))
    }

    render() {
        return (
            <div className="modal-form">
                <h2 className="form-username">{this.props.currentUser.username}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Add a title, if you'd like"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="text-form-title-input" />
                    <br />
                    <textarea
                        placeholder="Type or paste a URL"
                        value={this.state.body}
                        onChange={this.update("body")}
                        className="text-form-body-input"></textarea>
                    <div className="post-button-area">
                        <input type="submit" value="Post" className="post-button" />
                    </div>
                </form>
                {/* <button onClick={() => this.props.closeModal()}>CLOSE MODAL</button> */}
                {/* <button onClick={this.handleClick}>CLOSE MODAL</button> */}
                {/* <ModalContainer/> */}
            </div>
        )
    }
}

export default LinkForm