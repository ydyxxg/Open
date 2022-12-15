import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/Logo.svg'
import styles from './Header.module.css'
const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.burger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <input type="checkbox" id="check"/>
            <div className={styles.nav}>
                <a href="">О проекте</a>
                <a href="">Тарифы</a>
                <a href="">FAQ</a>
                <a href="">Контакты</a>
            </div>
            <button className={styles.button}>Вход</button>
        </header>
    ) 
}
export default Header