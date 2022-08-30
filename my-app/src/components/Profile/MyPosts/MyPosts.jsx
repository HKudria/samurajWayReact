import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostCreateAction, updatePostTextCreateAction} from "../../../redux/state";

const MyPosts = (props) => {

    const onPostChange = (event) => {
        props.dispatch(updatePostTextCreateAction(event.target.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>New Post</div>
            <div>
                <div>
                    <textarea onChange={(event) => onPostChange(event)} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={() => props.dispatch(addPostCreateAction())}>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsData.length ?
                    props.postsData.map(item => {
                        return <Post key={item.id} message={item.post} likes={item.likesCount}/>
                    }) : 'You don\'t have any posts'}
            </div>
        </div>
    )
}

export default MyPosts