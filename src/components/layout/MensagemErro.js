import styles from './MensagemErro.module.css'

const MensagemErro = ({erros}) => {
    if (erros.length === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className={styles.mensagemErro}>
                {erros.map((erro) => {
                    return (<p>{erro}</p>)
                })}       
            </div>
        )
    }
}

export default MensagemErro