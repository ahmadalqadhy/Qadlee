import PostIndex from './post_index';
import { requestPosts, deletePost } from '../../actions/post_actions'
import { likePost, unlikePost } from "../../actions/like_actions";
import { connect } from 'react-redux';
import { requestUsers } from '../../actions/users_actions';

const mapStateToProps = (state) => {
    return({
    currentUser: state.entities.users[state.session.id],
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    // users: Object.keys(state.entities.users).map(key => state.entities.users[key])
})
};

const mapDispatchToProps = (dispatch) => ({
    requestPosts: () => dispatch(requestPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
    likePost: (like) => dispatch(likePost(like)),
    unlikePost: (postId) => dispatch(unlikePost(postId)),
    requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);