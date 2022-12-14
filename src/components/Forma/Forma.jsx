import React from 'react';
import {ReactComponent as Spot1} from '../../assets/img/spot_51.svg'
import {ReactComponent as Spot2} from '../../assets/img/spot_52.svg'
import  Up from '../../assets/img/up.png'
import styles from './Forma.module.css'

function but(){
    var name = document.save.name.value;
    var email = document.save.email.value;
    var telephone = document.save.telephone.value;
    var color = document.save.color.value;
    console.log(name, email, telephone, color);
}

const Forma = () => {
    return (
        <div className={styles.forma}>
            <div className={styles.spot1}>
                <Spot1/>
            </div>
            <div className={styles.spot2}>
                <Spot2/>
            </div>
            <div className={styles.conteiner}>
                <p className={styles.h3}>Как с нами связаться?</p>
                <p>Если у вас остались вопросы мы с радостью <br/> ответим на них, а так же подробнее расскажем <br/> о нашем продукте.</p>
                <div>
                    <form action="" name="save" className={styles.form}>
                        <input minLength="3" maxLength="10" placeholder="Ваше имя" name="name" type="text"/>
                        <input name="email" type="email" placeholder="E-mail"/>
                        <input name="telephone" type="tel" placeholder="Номер телефона"/>
                        <div className={styles.checkbox}>
                            <input className={styles.custom_checkbox} type="checkbox" id="color" name="color-1"/>
                            <label htmlFor="color">
                                <div>
                                    Я принимаю условия на <a href="#">обработку персональных данных</a><br/>Обещаем, не передавать информацию 3 лицам
                                </div> 
                            </label>
                        </div>
                        <input type = "reset" className={styles.button} onClick={but} value="Отправить"/>
                    </form>
                </div>
                <a href="#" className={styles.img}><img src={Up} alt="" /></a> 
            </div>
        </div>
    ) 
}
export default Forma
