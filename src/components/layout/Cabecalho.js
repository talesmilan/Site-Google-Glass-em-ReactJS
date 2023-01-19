import styles from './Cabecalho.module.css'
import React from 'react'


function Cabecalho() {
    return (
        <div>
        <hgroup className={styles.cabecalho}>
            <br/>
            <h1>Google Glass</h1>
            <h2>A revolução do Google está chegando</h2>
        </hgroup>
        <img id="icone" src=""></img>
        </div>
    )
}

export default Cabecalho