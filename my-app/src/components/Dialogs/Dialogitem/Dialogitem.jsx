import React from "react";
import s from "./Dialogitem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialogsItems}>
            <NavLink to={`/dialog/${props.id}`} className={({isActive}) => (isActive ? s.active : "")}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem

