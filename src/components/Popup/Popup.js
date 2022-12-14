import React from "react";
import styles from './Popup.module.css'

const Popup = props => {
    return(
        <div className={styles.popup_box}>
            <div className={styles.box}>
                <button className={styles.btn_close} onClick={props.handClose}>x</button>
                {props.content}  
            </div>
        </div>
    )
}

export default Popup;