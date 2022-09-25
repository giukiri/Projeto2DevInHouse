import React from "react";
import styles from'../layout/style.css'

const Container = (props) => {
    return (
        <div className={`${styles.container} ${styles.customizacao}`}>
            {props.children}
        </div>
    )
}


export default Container;