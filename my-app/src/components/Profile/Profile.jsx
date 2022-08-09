import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src='my-app/src/components/Profile/Profile' alt='backgroudImage'/></div>
            <div><img src='my-app/src/components/Profile/Profile' alt='avatar'/> + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile
