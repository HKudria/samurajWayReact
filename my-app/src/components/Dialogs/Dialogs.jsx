import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
    let textArea = React.createRef()

    const addMessage = () => {
        alert(textArea.current.value)
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
                <textarea ref={textArea}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs