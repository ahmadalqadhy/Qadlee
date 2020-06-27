import React from 'react'

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post_type: 'video',
            photoFile: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    // handleFile(e){
    //     this.setState({photoFile: e.currentTarget.files[0]})
    // }

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
        formData.append('post[post_type]', this.state.post_type)
        formData.append('post[photo]', this.state.photoFile)
        $.ajax({
            url: '/api/posts',
            method: "POST",
            data: formData,
            contentType: false,
            processData: false
        })
    }

    render() {
        return (
            <div className="modal-image-form">
                <h2 className="form-username">{this.props.currentUser.username}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} />
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

export default VideoForm