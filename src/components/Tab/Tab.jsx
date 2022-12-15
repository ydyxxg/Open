import React from 'react';
import  Icon_risk from '../../assets/img/ic_risk.png'
import  Icon_honest from '../../assets/img/ic_honest.png'
import  Icon_clear from '../../assets/img/ic_clear_pay.png'
import  Icon_arrow from '../../assets/img/Arrow.png'
import styles from './Tab.module.css'

const Tab = () => {
    return (
        <div className={styles.tab}>
            <div className={styles.conteiner}>
                <div className={styles.risks}>
                    <img src={Icon_risk} alt="Risk"/><br/>
                    <span>Все риски берем <br/>на себя</span>
                    <p>Покупка оборудование, его <br/> транспортировка, размещение, <br/> оплата электричества, ремонт <br/> и сопровождение <br/> — все эти риски мы берем на себя</p>
                </div>
                <img src={Icon_arrow} alt="Arrow" className={styles.arrow}/>
                <div className={styles.honest}>
                    <img src={Icon_honest} alt="Honest"/><br/>
                    <span>Гарантия честности <br/> схемы работы</span>
                    <p>Вы покупаете только мощность <br/> оборудования — хешрайт, так <br/> заключается контракт. <br/> Купленная мощность направляется <br/> на один из пулов, который вы <br/> выбираете. Сторонний пул <br/> гарантирует прозрачность, честность <br/> и простоту схемы</p>
                </div>
                <img src={Icon_arrow} alt="Arrow" className={styles.arrow}/>
                <div className={styles.clear_pay}>
                    <img src={Icon_clear} alt="Clear"/><br/>
                    <span>Никаких скрытых <br/> платежей</span>
                    <p>Никаких ежедневных списаний <br/> за обслуживание и электроэнергию. <br/> Короткие контракты на 3 месяца, <br/> минимизируют риски, что майнинг <br/> станет невыгоден вследствие роста <br/> сложности, халвинга и падение курсов</p>
                </div>
            </div>
            <img src={Icon_arrow} alt="Arrow" className={styles.arrow_slider}/>
        </div>
    ) 
 }
export default Tab