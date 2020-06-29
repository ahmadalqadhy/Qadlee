import React from 'react'

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            post_type: 'video',
            photoFile: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.closeModal()
    }

    // handleFile(e){
    //     this.setState({photoFile: e.currentTarget.files[0]})
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }


    handleSubmit(e) {
        event.preventDefault();
        event.stopPropagation()
        const formData = new FormData()
        formData.append('post[title]', this.state.title)
        formData.append('post[post_type]', this.state.post_type)
        formData.append('post[photo]', this.state.photoFile)
        $.ajax({
            url: '/api/posts',
            method: "POST",
            data: formData,
            contentType: false,
            processData: false
        }).then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="modal-container">
                <div className="image-container">
                    <img className="form-profile-pic" src={this.props.currentUser.profilePicUrl} />
                </div>
                <div className="image-form-container">
                    <h2 className="image-form-username">{this.props.currentUser.username}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.update("title")}
                            className="image-form-title-input" />
                        <br />
                        <div className="image-form-input">
                            <h2><i className="fas fa-video icon2"></i></h2>
                            <h2>Upload a video</h2>
                            <br />
                            <input type="file" onChange={this.handleFile} />
                        </div>
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

export default VideoForm