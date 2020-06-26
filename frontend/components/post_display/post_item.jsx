import React from 'react';

const PostItem = ({ post }) => {

    const textpost = () => (
        <li className='post-item'>
            <h1 className="text-item-title">{post.title}</h1>
            <h3 className="text-item-body">{post.body}</h3>
        </li>
    )

    const quotepost = () => (
        <li className='post-item'>
            <h1 className="quote-item-title">{post.title}</h1>
            <h3 className="quote-item-body">{post.body}</h3>
        </li>
    )

    return post.post_type === "text" ? textpost() : quotepost()
}

export default PostItem
