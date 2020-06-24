import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'

import configureStore from './store/store'

import { requestPosts, requestPost, deletePost } from './actions/post_actions'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }

    ReactDOM.render(<Root store={store} />, root);

    //Test Stuff
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestPosts = requestPosts
    window.requestPost = requestPost
    window.deletePost = deletePost
});