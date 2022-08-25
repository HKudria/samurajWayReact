import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
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
                {props.postsData.length?
                    props.postsData.map(item => {
                    return <Post message={item.post} likes={item.likesCount}/>
                }) : 'You don\'t have any posts' }
            </div>
        </div>
    )
}

export default MyPosts