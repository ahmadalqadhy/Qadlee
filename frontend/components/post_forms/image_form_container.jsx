import { connect } from 'react-redux'
import { createPost } from '../../actions/post_actions'
import ImageForm from './Image_form'
import { closeModal } from '../../actions/modal_actions'

const mSTP = ({ session, entities }) => ({
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal)
})

export default connect(mSTP, mDTP)(ImageForm)