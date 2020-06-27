import React from 'react';
import { Link } from 'react-router-dom' 

const PostItem = ({ post }) => {

    const textpost = () => (
        <li className='post-item'>
            <h1 className="text-item-title">{post.title}</h1>
            <h3 className="text-item-body">{post.body}</h3>
        </li>
    )

    const imagepost = () => (
        <li className='post-item'>
            <img src={post.photoUrl}/>
        </li>
    )

    const quotepost = () => (
        <li className='post-item'>
            <h1 className="quote-item-title">{post.title}</h1>
            <h3 className="quote-item-body">{post.body}</h3>
        </li>
    )

    const videopost = () => (
        <li>
            <video className="test-video" controls>
                <source src={post.photoUrl} type="video/mp4"/>
            </video>
        </li>
    )

    const audiopost = () => (
        <li>
            <audio controls>
                <source src={post.photoUrl} type="audio/mpeg" />
            </audio>
        </li>
    )

    const linkpost = () => (
        <li>
            <a href={post.body} target="blank"><h1>{post.body}</h1></a>
        </li>
    )

    const chatpost = () => (
        <li className='post-item'>
            <h1 className="text-item-title">{post.title}</h1>
            <h3 className="text-item-body">{post.body}</h3>
        </li>
    )


    return (
            // post.post_type === "text" ? textpost() 
             post.post_type === "image" ? imagepost()
            : post.post_type === "link" ? linkpost()
            : post.post_type === "chat" ? chatpost()  
            : post.post_type === "video" ? videopost() 
            : post.post_type === "audio" ? audiopost() 
            : quotepost())
}

export default PostItem
