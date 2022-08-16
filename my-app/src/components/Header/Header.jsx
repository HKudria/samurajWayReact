import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='logo.png' alt='logo'/>
            <h2>My social network</h2>
        </header>
    );
}

export default Header