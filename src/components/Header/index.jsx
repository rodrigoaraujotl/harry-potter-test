import React from "react";
import Harry from '../../harry-potter.png'

import styles from "./styles.module.scss"

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Harry Potter App</h1>
            <img src={Harry} alt="Harry Potter" className={styles.imageHarry} />
        </header>
    )
}

export default Header;