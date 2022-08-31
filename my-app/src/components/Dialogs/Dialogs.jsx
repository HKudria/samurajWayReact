import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Message/Message";
import {addMessageCreateAction,updateMessageTextCreateAction} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    const onChange = (event) => {
        props.dispatch(updateMessageTextCreateAction(event.target.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {props.state.dialogsData.map(item => {
                    return <DialogItem key={item.id} id={item.id} name={item.name}/>
                })}
            </div>
            <div className={s.messages}>
                {props.state.messageData.map(item => {
                    return <MessageItem key={item.id} message={item.message}/>
                })}
            </div>
            <div>
                <textarea onChange={(event)=>onChange(event)} value={props.state.messageText}></textarea>
                <button onClick={() => props.dispatch(addMessageCreateAction())}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs