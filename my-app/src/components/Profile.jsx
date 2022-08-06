import React from "react";
import s from './../cssModules/Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='' alt='backgroudImage'/></div>
            <div><img src='' alt='avatar'/> + description</div>
            <div>My Posts
                <div>New Post</div>
                <div>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                    <div className={s.item}>post3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile