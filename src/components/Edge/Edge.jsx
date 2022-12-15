import React from 'react';
import  Question from '../../assets/img/mark.png'
import  Check from '../../assets/img/check.png'
import  Ordinaru from '../../assets/img/ordinaru.png'
import  Cloudy from '../../assets/img/cloudy.png'
import {ReactComponent as Spot} from '../../assets/img/spot_2.svg'
import styles from './Edge.module.css'

const Edge = () => {
    return (
        <div className={styles.edge}>
            <div className={styles.h3}>
                <p>Преимущества облачного майнинга</p>
            </div>
            <div className={styles.spot}>
                <Spot/>
            </div>
            <div className={styles.conteiner}>
                <div>
                    <div className={styles.ordinaru}>
                        <img src={Question} alt="" className={styles.question}/>
                        <p>Обычный майнинг</p>
                        <img src={Ordinaru} alt="" className={styles.ordinaru_logo}/>
                    </div>
                    <div className={styles.back}>
                        <p>Ожидаете поставки майнеров и теряете драгоценное время.</p>
                    </div>
                    <div className={styles.back_none}>
                        <p>Тратите время на подготовку оборудования к работе.</p>
                    </div>
                    <div className={styles.back}>
                        <p>Отсутствие достаточного охлаждения снижает эффективность оборудования. Велик риск перегревания и поломки. Результат – дополнительные затраты и потеря времени.</p>
                    </div>
                    <div className={styles.back_none}>
                        <p>Высокая стоимость электроэнергии.</p>
                    </div>
                    <div className={styles.back}>
                        <p>Необходимость уделять много времени обслуживанию оборудование. Результат поломок – потеря времени и упущенная прибыль.</p>
                    </div>
                    <div className={styles.back_none}>
                        <p>	Шум от оборудования и избыточное тепло.</p>
                    </div>
                    <div className={styles.back}>
                        <p>Дополнительные расходы на обеспечение безопасности майнеров.</p>
                    </div>
                    <div className={styles.back_none}>
                        <p>Возможны дополнительные траты на оплату таможенных пошлин при поставке оборудования.</p>
                    </div>
                    <div className={styles.back}>
                        <p>Необходимость в специальных знаниях для настройки и поддержания работоспособности майнеров.</p>
                    </div>
                </div>
                <div>
                    <div className={styles.cloudy}>
                        <img src={Check} alt="" className={styles.check}/>
                        <p>Облачный майнинг</p>
                        <img src={Cloudy} alt="" className={styles.cloudy_logo}/>
                    </div>
                    <div className={styles.back_green}>
                        <p>Оборудование всегда готово к работе. Просто выбирайте контракт и начинайте зарабатывать.</p>
                    </div>
                    <div className={styles.back_green_none}>
                        <p>Просто и удобно. Не нужно ничего настраивать и иметь IT-навыки.</p>
                    </div>
                    <div className={styles.back_green}>
                        <p>Оптимальные промышленные условия обеспечивают максимальную производительность майнеров.</p>
                    </div>
                    <div className={styles.back_green_none}>
                        <p>Низкая стоимость электроэнергии, значит отличные цены на всех контрактах.</p>
                    </div>
                    <div className={styles.back_green}>
                        <p>Бесперебойная работа. 24/7/365 контроль за работой  майнеров. Высочайшие стандарты безопасности. </p>
                    </div>
                    <div className={styles.back_green_none}>
                        <p>	Тишина и спокойствие.</p>
                    </div>
                    <div className={styles.back_green}>
                        <p>Гарантия безопасности майнеров.</p>
                    </div>
                    <div className={styles.back_green_none}>
                        <p>Отсутствие непредвиденных расходов. Вы платите только один раз и только ту сумму, которая указана в контракте.</p>
                    </div>
                    <div className={styles.back_green}>
                        <p>Квалифицированные специалисты.</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default Edge