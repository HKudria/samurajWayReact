import React from "react";
import {addMessageCreateAction,updateMessageTextCreateAction} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const onChange = (text) => {
        props.store.dispatch(updateMessageTextCreateAction(text))
    }

    return (
        <Dialogs onChange={onChange} state={props.store.getState()} addMessage={() => props.store.dispatch(addMessageCreateAction())} />
    );
}

export default DialogsContainer