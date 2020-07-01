import React from 'react';
import { Link } from 'react-router-dom' 

const PostItem = ({ currentUser, post, deletePost }) => {

    const textpost = () => (
        <div className="textpost">
            <h1 className="textpost-title">{post.title}</h1>
            <br/>
            <h3 className="textpost-body">{post.body}</h3>
        </div>
    )

    const imagepost = () => (
        <div>
            <img className="imagepost" src={post.photoUrl}/>
            <h2 className="caption">{post.title}</h2>
        </div>
    )

    const quotepost = () => (
            <div className="quotepost">
                <h1 className="quotepost-title">{post.title}</h1>
                <br/>
                <h3 className="quotepost-body">{post.body}</h3>
            </div>
    )

    const videopost = () => (
        <div>
            <video className="videopost" controls>
                <source src={post.photoUrl} type="video/mp4"/>
            </video>
            <h2 className="caption">{post.title}</h2>
        </div>
    )

    const audiopost = () => (
        <div className="audiopost">
            <audio className="audio" controls>
                <source src={post.photoUrl} type="audio/mpeg" />
            </audio>
            <h2 className="caption">{post.title}</h2>
        </div>
    )

    const linkpost = () => (
        <div>
            <a href={post.body} target="blank"><h1 className="linkpost-body">{post.body} ></h1></a>
            <h2 className="linkpost-title">{post.title}</h2>
        </div>
    )

    const chatpost = () => (
        <div>
            <h1 className="textpost-title">{post.title}</h1>
            <h3 className="chatpost-body">{post.body}</h3>
        </div>
    )

    const postUser = () =>(
        <ul className="interaction-icons">
            <li onClick={() => deletePost(post.id)}><i className="far fa-trash-alt item-icon"></i></li>
            <li><i className="far fa-comment item-icon"></i></li>
            <li><i className="fas fa-retweet item-icon"></i></li>
            <li><i className="far fa-heart item-icon"></i></li>
        </ul>
    )

    const otherUser = () =>(
        <ul className="interaction-icons">
            <li><i className="far fa-comment item-icon"></i></li>
            <li><i className="fas fa-retweet item-icon"></i></li>
            <li><i className="far fa-heart item-icon"></i></li>
        </ul>
    )

    const interactionIcons = (
        post.author_id === currentUser.id ? postUser()
        : otherUser()
    )

    const postItem =  (
            post.post_type === "text" ? textpost() 
            : post.post_type === "image" ? imagepost()
            : post.post_type === "link" ? linkpost()
            : post.post_type === "chat" ? chatpost()  
            : post.post_type === "video" ? videopost() 
            : post.post_type === "audio" ? audiopost() 
            : quotepost()
            )
     
    return (
        <li className="post-container">
            <img src={post.author.profilePicUrl} className="profile-pics"/>
            <div className='actual-post'>
                <div className = "username-area">
                    <h2 className="post-username">{post.author.username}</h2>
                </div>
                <div className="post-content">
                    {postItem}
                </div>
                <div>
                    {interactionIcons}
                </div>
            </div>
        </li>
    )
}

export default PostItem
