import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {props.state.dialogsData.map(item => {
                    return <DialogItem id={item.id} name={item.name}/>
                })}
            </div>
            <div className={s.messages}>
                {props.state.messageData.map(item => {
                    return <MessageItem message={item.message}/>
                })}
            </div>
        </div>
    );
}

export default Dialogs