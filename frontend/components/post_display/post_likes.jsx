import React from "react";

class PostLikes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLikes(this.props.postId);
  }

  numLikes() {
    const userLikes = Object.values(this.props.userLikes);
    return (
        <li>{userLikes.length()}</li>
    )
  }

  render() {
    return (
      <ul className="like-bubble">
        {!this.props.userLikes ? <li>Loading...</li> : this.numLikes()}
        <div id="like-triangle"></div>
      </ul>
    );
  }
}

export default PostLikes;
