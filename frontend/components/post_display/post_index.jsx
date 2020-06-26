import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    render() {
        const { posts } = this.props;
        if (!this.props.posts) return null
        return (
            <div>
                <ul>
                    {posts.map(post => (<PostItem key={`post${post.id}`} post={post}/>))}
                </ul>
            </div>
        )
    }
}

export default PostIndex;
