import React from "react";
import s from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return(
        <>
            <div className={s.friend} key={props.friend.id}>
                <img src={props.friend.avatar} alt={props.friend.name} />
                <NavLink to={`/friend/${props.friend.id}`} className={({ isActive }) =>  (isActive ? s.activeLink : "")}>{props.friend.name}</NavLink>
            </div>

        </>
    )
}

export default Friend