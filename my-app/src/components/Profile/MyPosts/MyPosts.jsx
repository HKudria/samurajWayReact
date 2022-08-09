import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My Posts
            <div>New Post</div>
            <div>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
           <Post message="post 1" likes="20"/>
           <Post message="post 2" likes="15"/>
           <Post message="post 3" likes="10"/>
        </div>
    )
}

export default MyPosts