import React from 'react';

export default ({ post }) => {
    return (
        <li>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </li>
    );
}
