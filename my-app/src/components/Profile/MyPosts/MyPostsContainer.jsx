import React from "react";
import {addPostCreateAction, updatePostTextCreateAction} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextCreateAction(text))
    }

    return (
       <MyPosts onPostChange={onPostChange} addPost={() => props.store.dispatch(addPostCreateAction())} state={props.store.getState()}/>
    )
}

export default MyPostsContainer