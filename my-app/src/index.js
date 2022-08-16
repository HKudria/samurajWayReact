import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, post: 'post1', likesCount: 1},
    {id: 2, post: 'post2', likesCount: 2},
    {id: 3, post: 'post3', likesCount: 3},
    {id: 4, post: 'post4', likesCount: 4},
    {id: 5, post: 'post5', likesCount: 5},
    {id: 6, post: 'post6', likesCount: 6},
    {id: 7, post: 'post7', likesCount: 7}
]

let dialogsData = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'},
    {id: 5, name: 'name5'},
    {id: 6, name: 'name6'},
    {id: 7, name: 'name7'}
]

let messageData = [
    {id: 1, message: 'message1'},
    {id: 2, message: 'message2'},
    {id: 3, message: 'message3'},
    {id: 4, message: 'message4'},
    {id: 5, message: 'message5'},
    {id: 6, message: 'message6'},
    {id: 7, message: 'message7'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App postsData={postsData} dialogsData={dialogsData} messageData={messageData}/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
