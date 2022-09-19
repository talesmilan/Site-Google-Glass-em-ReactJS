import video from '../../media/how-it-feels.mp4'
import imagem from '../../img/video-mini02.jpg'
import styles from './Lateral.module.css'

function Lateral() {
    return (
        <aside className={styles.lateral}>
            <h1>Outras Notícias</h1>
            <h2>Vídeo mais recente</h2>

            <video className={styles.filme} controls="controls" width="350px">
                <source src={video} type="video/mp4" poster={imagem} />
                Desculpe, mas não foi possível carregar o vídeo.
            </video>

            <h2>Novidades no Glass</h2>

            <p>O Google enfim revelou as especificações completas do Google Glass, e com ele uma surpresa ainda inédita no mercado: a gigante das buscas usará um sistema de áudio baseado na transdução por condução. Através das hastes dos óculos, o som será transmitido para o ouvido do usuário por meio de microvibrações em determinados ossos de sua cabeça, sem usar nenhum tipo de alto-falante.</p>

            <p>Além da surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção. Serão 640 x 360 pixels de resolução que, em proporção, equivaleria a um monitor de 25 polegadas de alta definição colocado a 2,5 metros de distância do espectador.</p>
        </aside>
    )
}

export default Lateral