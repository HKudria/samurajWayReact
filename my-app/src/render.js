import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from 'react';
import './index.css';
import {addPost, changePostState} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={changePostState}/>
        </BrowserRouter>
    );
}