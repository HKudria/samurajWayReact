import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='my-app/src/components/Header/Header' alt='logo'/>
        </header>
    );
}

export default Header