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
                    <textarea onChange={(event) => props.onPostChange(event.target.value)} value={props.state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.state.profilePage.postsData.length ?
                    props.state.profilePage.postsData.map(item => {
                        return <Post key={item.id} message={item.post} likes={item.likesCount}/>
                    }) : 'You don\'t have any posts'}
            </div>
        </div>
    )
}

export default MyPosts