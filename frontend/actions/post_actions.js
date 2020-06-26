import * as PostAPIUtil from '../util/posts_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'

const receiveAllPosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const requestPosts = () => dispatch => (
    PostAPIUtil.fetchPosts()
        .then(posts => {
            // debugger
            return (
                dispatch(receiveAllPosts(posts))
            )
        }
    )
)

export const requestPost = () => (dispatch) => (
    PostAPIUtil.fetchPost()
        .then(post => dispatch(receivePost(post)))
)

export const createPost = (post) => (dispatch) => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
)


export const deletePost = (postId) => (dispatch) (
    PostAPIUtil.deletePost()
        .then( () => dispatch(removePost(postId)))
)

