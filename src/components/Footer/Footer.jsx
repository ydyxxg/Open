import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/Logo.svg'
import {ReactComponent as Spot1} from '../../assets/img/spot_61.svg'
import {ReactComponent as Spot2} from '../../assets/img/spot_62.svg'
import {ReactComponent as Spot3} from '../../assets/img/spot_7.svg'
import Facebook from '../../assets/img/Facebook.png'
import Insta from '../../assets/img/Insta.png'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.spot1}>
                <Spot1/>
            </div>
            <div className={styles.spot2}>
                <Spot2/>
            </div>
            <div className={styles.conteiner}>
                
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div>
                    <span>О проекте</span>
                    <p>Вход</p>
                    <p>Регистрация</p>
                </div>
                <div>
                    <span>Тарифы</span>
                    <p>Предложение</p>
                    <p>Оферта</p>
                </div>
                <div>
                    <span>FAQ</span>
                    <p>Тарифы</p>
                    <p>Оплата</p>
                </div>
                <div>
                    <span>Контакты</span>
                    <p>8 800 920 00 00</p>
                    <p>honest@maning.ru</p>
                </div>
                <div className={styles.img}>
                    <img src={Facebook} alt="" />
                    <img src={Insta} alt="" />
                </div>
            </div>
            <div className={styles.spot3}>
                <Spot3/>
            </div>
        </div>
    ) 
}
export default Footer
