import PostIndex from './post_index';
import { requestPosts } from '../../actions/post_actions'
import { requestUsers } from '../../actions/users_actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key])
});

const mapDispatchToProps = (dispatch) => ({
    requestPosts: () => dispatch(requestPosts()),
    requestUsers: () => dispatch(requestUsers()),
    deletepost: (id) => dispatch(deletePost(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);