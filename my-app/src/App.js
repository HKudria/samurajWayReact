import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebarPage}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialog/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/setting" element={<Setting/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
    );
}


export default App;
