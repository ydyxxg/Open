import React from 'react';
import {ReactComponent as Spot} from '../../assets/img/spot_4.svg'
import Accordion from '../../Accordion';
import { accordionData } from '../../utils/content';
import styles from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={styles.faq}>
            <div className={styles.spot}>
                <Spot/>
            </div>
            <p className={styles.h3}>FAQ</p>
            <div className={styles.conteiner}>
                <div className={styles.accordion}>
                    {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                    ))}
                </div>
                <div className={styles.description}>
                    <span>
                        Остались вопросы <br/> и нужна помощь? 
                    </span>
                    <p>
                        Напишите нам на <a href="#">почту</a>  и мы постараемся решить  ваш вопрос
                    </p>
                </div>
            </div>
        </div>
    ) 
}
export default FAQ
