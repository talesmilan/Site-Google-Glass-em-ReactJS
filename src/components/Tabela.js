import styles from './Tabela.module.css'

function Tabela() {
    return (
        <table className={styles.tabelaspec}>
            <caption>Tabela Técnica do Google Glass <span>Mar/2013</span></caption>
            <tr><td className={styles.ce}>Tela</td><td className={styles.cd}>Resolução equivalente a tela de 25"</td></tr>
            <tr><td rowspan="2" className={styles.ce}>Camera</td><td className={styles.cd}>5MP para fotos</td></tr>
            <tr><td className={styles.cd}>720p para vídeos</td></tr>
            <tr><td rowspan="2" className={styles.ce}>Conectividade</td><td className={styles.cd}>Wi-Fi</td></tr>
            <tr><td className={styles.cd}>Bluetooth</td></tr>
            <tr><td className={styles.ce}>Memória Interna</td><td className={styles.cd}>12GB</td></tr>
        </table>
    )
}

export default Tabela