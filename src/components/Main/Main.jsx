import React from 'react';
import  Graph_1 from '../../assets/img/gpraph_1.png'
import  Graph_2 from '../../assets/img/graph_2.png'
import  Bitcoin from '../../assets/img/BTC.png'
import  FCT from '../../assets/img/FCT_O.png'
import  Ripple from '../../assets/img/Ripple_O.png'
import  Ethereum from '../../assets/img/Ethereum_O.png'
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.graph_1}>
                <img src={Graph_1} alt="" />
            </div>
            <div className={styles.graph_2}>
                <img src={Graph_2} alt="" />
            </div>
            <div className={styles.bitcoin}>
                <img src={Bitcoin} alt="" />
            </div>
            <div className={styles.fct}>
                <img src={FCT} alt="" />
            </div>
            <div className={styles.ripple}>
                <img src={Ripple} alt="" />
            </div>
            <div className={styles.ethereum}>
                <img src={Ethereum} alt="" />
            </div>
            <div className={styles.h1}>
                <p>Снижение рисков <br/> связанных с майнингом <br/> по максимуму</p>
            </div>
            <span>Честность майнинга заложена в архитектуре</span>
            <div className={styles.buttons}>
                <button className={styles.button_begin}>Начать зарабатывать</button>
                <button className={styles.button_know}>Узнать больше</button>
            </div>
            
        </div>
    ) 
}
export default Main