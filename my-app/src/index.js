import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.changePostState.bind(store)}/>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())

store.setSubscriber(rerenderEntireTree)

reportWebVitals();
