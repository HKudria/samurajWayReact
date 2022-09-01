import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialog/*" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile" element={<Profile store={props.store}/>}/>
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
