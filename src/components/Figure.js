import imagem from '../img/glass-quadro-homem-mulher.jpg'
import styles from './Figure.module.css'
import React from 'react'

function Figure() {
    return (
    <figure className={styles.foto_legenda}>
        <img src={imagem} width="600"></img>
        <figcaption>
            <h3>Google Glass</h3>
            <p>Uma nova maneira de ver o mundo.</p>
        </figcaption>
    </figure>
    )
}

export default Figure