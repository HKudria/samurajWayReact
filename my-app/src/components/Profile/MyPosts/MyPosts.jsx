import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>New Post</div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="post 1" likes="20"/>
                <Post message="post 2" likes="15"/>
                <Post message="post 3" likes="10"/>
            </div>
        </div>
    )
}

export default MyPosts