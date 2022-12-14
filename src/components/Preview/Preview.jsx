import React from 'react';
import  Comp from '../../assets/img/comp.png'
import  {ReactComponent as Spot} from '../../assets/img/spot_1.svg'
import styles from './Preview.module.css'

const Preview = () => {
    return (
        <div className={styles.preview}>
            <div className={styles.img}>
                <img src={Comp} alt="computer"/>
            </div>
            <div className={styles.preview_text}>
                <span>open mining</span>
                <p>&mdash; это прозрачный заработок <br/> на майнинге криптовалют, а самое <br/> главное &mdash; мы находимся в России.</p>
            </div>
            <div className={styles.spot}>
                <Spot/>
            </div>
        </div>
    ) 
}
export default Preview