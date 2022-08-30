import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return(
        <div className={s.friends}>
            {props.friends.map (friend => <Friend key={friend.id} friend={friend}/>)}
        </div>
    )
}

export default Friends