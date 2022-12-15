import React from 'react';
import  Number_1 from '../../assets/img/01.png'
import  Number_2 from '../../assets/img/02.png'
import  Number_3 from '../../assets/img/03.png'
import  Leave from '../../assets/img/leave.png'
import  Card_pic from '../../assets/img/card_pic.png'
import  Icon_atention from '../../assets/img/ic_atention.png'
import {ReactComponent as Spot} from '../../assets/img/spot_3.svg'
import styles from './Garant.module.css'

const Garant = () => {
    return (
        <div className={styles.garant}>
            <div className={styles.spot}>
                <Spot/>
            </div>
            <div className={styles.conteiner}>
                <p className={styles.h3}>Гарантии</p>
                <div className={styles.numbers}>
                    <div className={styles.number_1}>
                        <img src={Number_1} alt="Number_1"/>
                        <p className={styles.header}>Наша компания  зарегистрирована <br/> не в офшорных зонах</p>
                        <p>Мы являемся резидентами Российской Федерации, у нас есть собственная <br/> площадка  для размещения <br/> оборудования в Иркутской области. </p>
                    </div>
                    <div className={styles.number_2}>
                        <img src={Number_2} alt="Number_2"/>
                        <p className={styles.header_2}>Подтверждено публичным пулом pool.in</p>
                        <p>Мы продаем контракты <br/> на облачный майнинг из уже <br/> имеющегося оборудования</p>
                        <div className={styles.leave1}>
                            <img src={Leave} alt="Leave"/>
                        </div>
                    </div>
                    <div className={styles.number_3}>
                        <img src={Number_3} alt="Number_3"/>
                        <p className={styles.header}>Никаких скрытых действий</p>
                        <p>Вся финансовая отчетность <br/> о нашей компании опубликована <br/> в свободном доступе. Вы можете её <br/> найти по ИНН.</p>
                        <div className={styles.leave2}>
                            <img src={Leave} alt="Leave"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card_pic}>
                        <img src={Card_pic} alt="Card_pic"/>
                    </div>
                </div>
                <div className={styles.atention}>
                    <div className={styles.atention_div}>
                        <img src={Icon_atention} alt="Icon_atention"/>
                        <p>Наши возможности:</p>
                    </div>
                    <a href="https://www.poolin.com/my/9053220/b..." target="_blank">https://www.poolin.com/my/9053220/b...</a>
                </div>
            </div>
        </div>
    ) 
}
export default Garant