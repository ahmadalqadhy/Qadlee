import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if(this.props.posts.length !== prevProps.posts.length){
            this.props.requestPosts()
        }
    }

    componentDidMount() {
        // debugger
        this.props.requestPosts();
    }

    render() {
        const { posts, currentUser } = this.props;
        if (!this.props.posts) return null
        const backwardPosts = posts.reverse()
        return (
          <div>
            <ul>
              {backwardPosts.map((post) => (
                <PostItem
                  key={`post${post.id}`}
                  post={post}
                  currentUser={currentUser}
                  deletePost={this.props.deletePost}
                  likePost={this.props.likePost}
                  unlikePost={this.props.unlikePost}
                />
              ))}
            </ul>
          </div>
        );
    }
}

export default PostIndex;
