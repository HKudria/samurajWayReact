import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {props.state.dialogsPage.dialogsData.map(item => {
                    return <DialogItem key={item.id} id={item.id} name={item.name}/>
                })}
            </div>
            <div className={s.messages}>
                {props.state.dialogsPage.messageData.map(item => {
                    return <MessageItem key={item.id} message={item.message}/>
                })}
            </div>
            <div>
                <textarea onChange={(e) => props.onChange(e.target.value)} value={props.state.messageText}></textarea>
                <button onClick={props.addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs