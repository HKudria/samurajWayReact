import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    return(
       <Friends state={props.store.getState()} />
    )
}

export default FriendsContainer