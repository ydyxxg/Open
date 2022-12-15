import React, {useState} from 'react';
import  Graph_1 from '../../assets/img/gpraph_1.png'
import  Graph_2 from '../../assets/img/graph_2.png'
import  Ok from '../../assets/img/ok.png'
import styles from './Calc.module.css'
import Popup from '../Popup/Popup.js';

function powerChange(event){
    document.Power.result.value = event.currentTarget.value ;
}

function termChange(event){
    document.Term.result.value = event.currentTarget.value ;
}

function but(){
    document.Pop.pow.value = document.Power.result.value;
    document.Pop.srok.value = document.Term.result.value;
    document.Pop.vid.value = document.option.vid.value;
}

const Calc = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
        document.Pop.pow.value = document.Power.result.value;
        document.Pop.srok.value = document.Term.result.value;
        document.Pop.vid.value = document.option.vid.value;
    }

    return (
        <div className={styles.calc}>
            <div className={styles.graph_1}>
                <img src={Graph_1} alt="" />
            </div>
            <div className={styles.graph_2}>
                <img src={Graph_2} alt="" />
            </div>
            <div className={styles.h1}>
                <p>Расчитайте свой доход</p>
            </div>
            <div className={styles.inputs}>
                <div className={styles.slidecontainer}>
                    <form action="" name = "Power">
                        <label>Мощность,  Th/ s</label><p/>
                        <input type="number" name="result"/><br/>
                        <input type="range" min="10" max="1000" className={styles.slider} onChange={powerChange}/>
                        <div className={styles.span_conteiner}>
                            <span>10 Th/s</span>
                            <span>1000 Th/s</span>
                        </div>
                    </form>
                </div>
                <div className={styles.slidecontainer}>
                    <form action="" name = "Term">
                        <label>Срок контракта, дни</label><p/>
                        <input type="number" name="result"/><br/>
                        <input type="range" min="90" max="365" className={styles.slider} onChange={termChange}/>
                        <div className={styles.span_conteiner}>
                            <span>90 дней</span>
                            <span>365 дней</span>
                        </div>
                    </form>
                </div>
                <div>
                    <label>Вид валюты</label><p/>
                    <form action="" name="option">
                       <select name="vid" className={styles.select}>
                            <option value="BTC">BTC</option>
                            <option value="LTC">LTC</option>
                            <option value="RPL">RPL</option>
                            <option value="ETH">ETH</option>
                        </select> 
                    </form>
                    
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.column}>
                    <div className={styles.text_div}>
                        <span>90 000 руб.</span>
                        <p>Стоимость контракта</p>
                    </div>
                    <div className={styles.text_div}>
                        <span>BTC</span>
                        <p>Валюта</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.text_div}>
                        <span><font>0</font> руб.</span>
                        <p>Обслуживание</p>
                    </div>
                    <div className={styles.text_div}>
                        <span><font>1,35</font> втс</span>
                        <p>Выплата за период</p>
                    </div>
                </div>
                <div>
                    <button className={styles.button} onClick={togglePopup}>Заключить контракт</button>
                    {isOpen &&<Popup
                        handClose= {togglePopup}
                        content={<div onClick={but} className={styles.dogovor}>
                            <h2>Договор заключён</h2>
                            <form action="" name = "Pop" className={styles.pop}>
                                <fieldset>
                                    <legend> Общие данный </legend>
                                    <label>Мощность,  Th/ s</label><br/>
                                    <input type="number" name="pow" readonly="readonly"/><p/>
                                    <label>Срок контракта, дни</label><br/>
                                    <input type="number" name="srok" readonly="readonly"/><p/>
                                    <label>Вид валюты</label><br/>
                                    <input type="text" name="vid" readonly="readonly"/>
                                </fieldset>
                            </form>
                        </div>}
                    />}
                </div>
            </div>
        </div>
    ) 
}
export default Calc