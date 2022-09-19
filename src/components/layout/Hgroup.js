import styles from "./Hgroup.module.css"

function Hgroup({secao, descricao, data}) {
    return (
        <header className={styles.cabecalho_artigo}>
            <hgroup>
                <h3>{secao}</h3>
                <h1>{descricao}</h1>
                <h3 className={styles.direita}>{data}</h3>
            </hgroup>
        </header>
    )
}

export default Hgroup