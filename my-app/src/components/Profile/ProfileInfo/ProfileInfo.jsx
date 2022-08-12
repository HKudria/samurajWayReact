import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src='my-app/src/components/Profile/Profile' alt='backgroudImage'/></div>
            <div className={s.descriptionBlock}><img src='my-app/src/components/Profile/Profile' alt='avatar'/> + description</div>
        </div>
    )
}

export default ProfileInfo
