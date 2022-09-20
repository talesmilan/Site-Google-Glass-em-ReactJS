import styles from './Especificacoes.module.css'
import Header from '../layout/Header'
import imagem from '../../img/glass-esquema-marcado.jpg'

function Especificacoes() {
    return (
        <section className={styles.corpo_full}>
            <article className={styles.noticial_principal}>
                <Header
                    secao="Glass > Especificações"
                    descricao="Raio-X no Google Glass"
                    data="Atualizado em 01/Maio/2013"
                />
                <p>Clique em qualquer área destacada da imagem para ter mais informações sobre os recursos do Google Glass. Qualquer ponto vermelho vai te levar a um lugar cheio de novas informações.</p>
                <section className={styles.conteudo} >
                    <img src={imagem} usemap="#meumapa"/>
                </section>
            </article>
        </section>
    )
}

export default Especificacoes