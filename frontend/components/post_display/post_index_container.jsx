import PostIndex from './post_index';
import { requestPosts, deletePost } from '../../actions/post_actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // debugger
    return({
    currentUser: state.entities.users[state.session.id],
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key])
})
};

const mapDispatchToProps = (dispatch) => ({
    requestPosts: () => dispatch(requestPosts()),
    deletePost: (id) => dispatch(deletePost(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);