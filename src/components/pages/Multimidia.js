import Header from '../layout/Header'
import styles from './Multimidia.module.css'
import imagem from "../../img/radio-tv.png"
import video from "../../media/getting-started.mp4"
import audio from "../../media/2009-lovers-carvings-bibio.mp3"
import poster from "../../img/video-mini03.jpg"


function Multimidia() {
    return (
        <section className="corpo-full">
        <article className="noticia-principal">
        <Header
            secao="Glass > Multimídia"
            descricao="Sons e Vídeos"
            data="Atualizado em 01/Maio/2013"/>
            <div className={styles.tvradio} >
                <img src={imagem} alt="Um rádio" />
                <audio className={styles.musica} controls="controls">
                    <source src={audio} type="audio/mpeg"/>
                    Desculpe, mas não foi possível carregar o audio.
                </audio>
                <video className={styles.filme} controls="controls">
                    <source src={video} type="video/mp4" poster={poster} />
                    Desculpe, mas não foi possível carregar o vídeo.
                </video>
            </div>

        </article>
        </section>
    )
}

export default Multimidia