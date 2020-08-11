import React from 'react';
import CommentsForm from '../comments/comment_form_container'
import Comments from '../comments/comments'
import { Link } from 'react-router-dom'

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.klass = "";
    this.state = {
      showCommentForm: false,
    };

    this.showCommentForm = this.showCommentForm.bind(this);
    this.closeCommentForm = this.closeCommentForm.bind(this);
  }

  showCommentForm(e) {
    e.preventDefault();
    this.setState({ showCommentForm: true }, () => {
      document.addEventListener("click", this.closeCommentForm);
    });
  }

  closeCommentForm(e) {
    if (
      this.dropdownCommentForm &&
      !this.dropdownCommentForm.contains(event.target)
    ) {
      this.setState({ showCommentForm: false }, () => {
        document.removeEventListener("click", this.closeCommentForm);
      });
    }
  }

  textpost(post) {
    return (
      <div className="textpost">
        <h1 className="textpost-title">{post.title}</h1>
        <br />
        <h3 className="textpost-body">{post.body}</h3>
      </div>
    );
  }

  imagepost(post) {
    return (
      <div>
        <img className="imagepost" src={post.photoUrl} />
        <h2 className="caption">{post.title}</h2>
      </div>
    );
  }

  quotepost(post) {
    return (
      <div className="quotepost">
        <h1 className="quotepost-title">{post.title}</h1>
        <br />
        <h3 className="quotepost-body">{post.body}</h3>
      </div>
    );
  }

  videopost(post) {
    return (
      <div>
        <video className="videopost" controls>
          <source src={post.photoUrl} type="video/mp4" />
        </video>
        <h2 className="caption">{post.title}</h2>
      </div>
    );
  }

  audiopost(post) {
    return (
      <div className="audiopost">
        <audio className="audio" controls>
          <source src={post.photoUrl} type="audio/mpeg" />
        </audio>
        <h2 className="caption">{post.title}</h2>
      </div>
    );
  }

  linkpost(post) {
    return (
      <div>
        <a href={post.body} target="blank">
          <h1 className="linkpost-body">{post.body}</h1>
        </a>
        <h2 className="linkpost-title">{post.title}</h2>
      </div>
    );
  }

  chatpost(post) {
    return (
      <div>
        <h1 className="textpost-title">{post.title}</h1>
        <h3 className="chatpost-body">{post.body}</h3>
      </div>
    );
  }

  handleLike(likeParams) {
    // debugger
    if (this.props.post.liked_users.includes(this.props.currentUser.id)) {
      this.props.unlikePost(likeParams.post_id);
      this.klass = "far fa-heart item-icon";
    } else {
      this.props.likePost(likeParams);
      this.klass = "fas fa-heart item-icon";
    }
  }

  postUser() {
    const likeParams = {
      user_id: parseInt(this.props.currentUser.id),
      post_id: this.props.post.id,
    };
    
    const carr = this.props.post.comments ? Object.values(this.props.post.comments) : null;
    const comments = (
      <Comments comments={carr} user={this.props.currentUser} />
    );

    if (
      this.props.post.liked_users &&
      this.props.post.liked_users.includes(this.props.currentUser.id)
    ) {
      this.klass = "fas fa-heart item-icon";
    } else {
      this.klass = "far fa-heart item-icon";
    }
    // debugger

    return (
      <ul className="interaction-icons">
        <li onClick={() => this.props.deletePost(this.props.post.id)}>
          <i className="far fa-trash-alt item-icon"></i>
        </li>
        <li onClick={this.showCommentForm}>
          <i className="far fa-comment item-icon"></i>
          {this.state.showCommentForm ? (
            <div
              className="comment-drop"
              ref={(element) => {
                this.dropdownCommentForm = element;
              }}
            >
              {comments}
              <CommentsForm postId={this.props.post.id}></CommentsForm>
            </div>
          ) : null}
        </li>
        {/* <li>
          <i className="fas fa-retweet item-icon"></i>
        </li> */}
        <li onClick={() => this.handleLike(likeParams)}>
          <i className={this.klass}></i>
        </li>
      </ul>
    );
  }

  otherUser() {
    const likeParams = {
      user_id: parseInt(this.props.currentUser.id, 10),
      post_id: this.props.post.id,
    };

    const carr = Object.values(this.props.post.comments);
    const comments = <Comments comments={carr} user={this.props.currentUser} />;

    if (this.props.post.liked_users.includes(this.props.currentUser.id)) {
      this.klass = "fas fa-heart item-icon";
    } else {
      this.klass = "far fa-heart item-icon";
    }

    // debugger;
    return (
      <ul className="interaction-icons">
        <li onClick={this.showCommentForm}>
          <i className="far fa-comment item-icon"></i>
          {this.state.showCommentForm ? (
            <div
              className="comment-drop"
              ref={(element) => {
                this.dropdownCommentForm = element;
              }}
            >
              {comments}
              <CommentsForm postId={this.props.post.id}></CommentsForm>
            </div>
          ) : null}
        </li>
        {/* <li>
          <i className="fas fa-retweet item-icon"></i>
        </li> */}
        <li onClick={() => this.handleLike(likeParams)}>
          <i className={this.klass}></i>
        </li>
      </ul>
    );
  }

  interactionIcons() {
    return this.props.post.author_id === this.props.currentUser.id
      ? this.postUser()
      : this.otherUser();
  }

  postItem() {
    const post = this.props.post;
    //   debugger
    const pItem =
      post.post_type === "text"
        ? this.textpost(post)
        : post.post_type === "image"
        ? this.imagepost(post)
        : post.post_type === "link"
        ? this.linkpost(post)
        : post.post_type === "chat"
        ? this.chatpost(post)
        : post.post_type === "video"
        ? this.videopost(post)
        : post.post_type === "audio"
        ? this.audiopost(post)
        : this.quotepost(post);
    // debugger
    return pItem;
  }

  render() {
    return (
      <li className="post-container">
        <img
          src={this.props.post.author.profilePicUrl}
          className="profile-pics"
        />
        <div className="actual-post">
          <div className="username-area">
            <h2 className="post-username">{this.props.post.author.username}</h2>
          </div>
          <div className="post-content">{this.postItem()}</div>
          <div>{this.interactionIcons()}</div>
          {/* <CommentsForm postId={this.props.post.id}></CommentsForm> */}
        </div>
      </li>
    );
  }
}

export default PostItem
