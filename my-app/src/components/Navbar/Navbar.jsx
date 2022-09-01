import React from "react";
import s from './Navbar.module.css'
import FriendsContainer from "./Friends/FriendsContainer";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
               <NavLink to="/profile" className={({ isActive }) =>  (isActive ? s.activeLink : "")}  >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialog" className={({ isActive }) =>  (isActive ? s.activeLink : "")}>Messages</NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to="/news" className={({ isActive }) =>  (isActive ? s.activeLink : "")}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({ isActive }) =>  (isActive ? s.activeLink : "")}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" className={({ isActive }) =>  (isActive ? s.activeLink : "")}>Settings</NavLink>
            </div>
            <div>
                <FriendsContainer store={props.store}/>
            </div>


        </nav>
    )
}

export default Navbar