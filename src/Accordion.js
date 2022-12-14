import React, { useState } from 'react';
import  Icon1 from './assets/img/ic_arrow.png'
import  Icon2 from './assets/img/ic_arrow2.png'
import styles from './components/FAQ/FAQ.module.css'
 
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
 
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setIsActive(!isActive)} style = {{backgroundColor: isActive ? '#F8DB73' : '#87B645'}}>
        <div className={styles.title} style = {{color: isActive ? '#333333' : '#F5F5F5'}}>{title}</div>
        <div>{isActive ? <img src={Icon1} className={styles.img}/> : <img src={Icon2} className={styles.img}/>}</div>
      </div>
      {isActive && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
};
 
export default Accordion;