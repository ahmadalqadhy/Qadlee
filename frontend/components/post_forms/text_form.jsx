import React from 'react'
// import ModalContainer from '../modal/modal'

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
                <button onClick={() => this.props.closeModal()}>CLOSE MODAL</button>
                {/* <ModalContainer/> */}
            </>
        )
    }
}

export default TextForm