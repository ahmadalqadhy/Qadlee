import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
        // this.props.requestUsers();
    }

    render() {
        const { posts, currentUser } = this.props;
        if (!this.props.posts) return null
        return (
            <div>
                <ul>
                    {posts.map(post => (<PostItem key={`post${post.id}`} post={post} currentUser={currentUser}/>))}
                </ul>
            </div>
        )
    }
}

export default PostIndex;
