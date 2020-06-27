import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TextFormContainer from '../post_forms/text_form_container';
import ChatFormContainer from '../post_forms/chat_form_container';
import QuoteFormContainer from '../post_forms/quote_form_container';
import ImageFormContainer from '../post_forms/image_form_container';
import VideoFormContainer from '../post_forms/video_form_container';
import LinkFormContainer from '../post_forms/link_form_container';
import AudioFormContainer from '../post_forms/audio_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'textform':
            component = <TextFormContainer />;
            break;
        case 'chatform':
            component = <ChatFormContainer />;
            break;
        case 'quoteform':
            component = <QuoteFormContainer />;
            break;
        case 'imageform':
            component = <ImageFormContainer />;
            break;
        case 'videoform':
            component = <VideoFormContainer />;
            break;
        case 'linkform':
            component = <LinkFormContainer />;
            break;
        case 'audioform':
            component = <AudioFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
