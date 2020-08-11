import { RECEIVE_POSTS, REMOVE_POST, RECEIVE_POST } from '../actions/post_actions'
import { LIKE_POST, UNLIKE_POST } from "../actions/like_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions"
import { merge } from 'lodash';

const PostsReducer = ( state = {}, action ) => {
    Object.freeze(state)
    let nextState, likeId, like, idx, postId;
    switch (action.type) {
      case RECEIVE_POSTS:
        return action.posts;
      case RECEIVE_POST:
        return Object.assign({}, { [action.post.id]: action.post }, state);
      case REMOVE_POST:
        nextState = Object.assign({}, state);
        delete nextState[action.postId];
        return nextState;
      case RECEIVE_COMMENT:
        let post = action.comment.post_id;
        nextState = merge({}, state)
        nextState[post].comments.push({body: action.comment.body, author_id: action.comment.author_id,});
        return nextState;
      case LIKE_POST:
        nextState = merge({}, state);
        likeId = Object.keys(action.like)[0];
        like = action.like[likeId];  
        nextState[like.post_id].liked_users.push(like.user_id);
        return nextState;
      case UNLIKE_POST:
        nextState = merge({}, state);
        likeId = Object.keys(action.like)[0];
        like = action.like[likeId];
        idx = nextState[like.post_id].liked_users.indexOf(like.user_id);
        nextState[like.post_id].liked_users.splice(idx, 1);
        return nextState;
      default:
        return state;
    }
}

export default PostsReducer