import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const postId = ownProps.postId;
  return {
    currentUser: currentUser.id,
    body: '',
    postId: ownProps.postId
  };
};

const mdp = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

export default connect(msp, mdp)(CommentForm);
