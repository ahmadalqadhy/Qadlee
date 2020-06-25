import PostIndex from './post_index';
import { requestPosts } from '../../actions/post_actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key])
});

const mapDispatchToProps = (dispatch) => ({
    requestPosts: () => dispatch(requestPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);