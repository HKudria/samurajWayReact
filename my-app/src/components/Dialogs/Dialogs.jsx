import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={`/dialog/${props.id}`} className={({isActive}) => (isActive ? s.active : "")}>{props.name}</NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Name1"/>
                <DialogItem id="2" name="Name2"/>
                <DialogItem id="3" name="Name3"/>
                <DialogItem id="4" name="Name4"/>
                <DialogItem id="5" name="Name5"/>
                <DialogItem id="6" name="Name6"/>

            </div>
            <div className={s.messages}>
                <MessageItem message="testMessage1"/>
                <MessageItem message="testMessage2"/>
                <MessageItem message="testMessage3"/>
                <MessageItem message="testMessage4"/>
            </div>
        </div>
    );
}

export default Dialogs