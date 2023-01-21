import styles from './AlbumFotos.module.css'
import React from 'react'
import foto01 from '../../img/galeria-01.jpg'
import foto02 from '../../img/galeria-02.jpg'
import foto03 from '../../img/galeria-03.jpg'
import foto04 from '../../img/galeria-04.jpg'
import foto05 from '../../img/galeria-05.jpg'
import foto06 from '../../img/galeria-01.jpg'

function Cabecalho() {
    return (
        <div>
            <ul className={styles.lista}>
                <li className={styles.item} id="fotos01"><img className={styles.itemImg} src={foto01} alt="Agenda e lembretes"/><span className={styles.itemSpan}>Agenda e lembretes</span></li>
                <li className={styles.item} id="fotos02"><img className={styles.itemImg} src={foto02} alt="Sergey Brin usando o Glass"/><span className={styles.itemSpan}>Sergey Brin usando o Glass</span></li>
                <li className={styles.item} id="fotos03"><img className={styles.itemImg} src={foto03} alt="Leve e compacto"/><span className={styles.itemSpan}>Leve e compacto</span></li>
                <li className={styles.item} id="fotos04"><img className={styles.itemImg} src={foto04} alt="Sensação de uma tela de 50"/><span className={styles.itemSpan}>Sensação de uma tela de 50"</span></li>
                <li className={styles.item} id="fotos05"><img className={styles.itemImg} src={foto05} alt="Vários tipos de lente"/><span className={styles.itemSpan}>Vários tipos de lente</span></li>
                <li className={styles.item} id="fotos06"><img className={styles.itemImg} src={foto06} alt="Informações importantes"/><span className={styles.itemSpan}>Informações importantes</span></li>
           </ul>
        </div>
    )
}

export default Cabecalho