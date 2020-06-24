import React from 'react'

class TextForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: "text",
            title: "",
            body: ""
        }
    }

    render (){
        return(
            <>
                <h2>{this.props.currentUser.username}</h2>
                <button>{this.props.closeModal}</button>
            </>
        )
    }
}

export default TextForm