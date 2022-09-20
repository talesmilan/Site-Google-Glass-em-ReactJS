import styles from './Home.module.css'
import Header from '../layout/Header'
import Tabela from '../Tabela'
import Figure from '../Figure'
import Lateral from '../layout/Lateral'
import imagem from '../../img/video-mini01.jpg'
import video from '../../media/one-day.mp4'

function Home() {
    return (
        <div>
            <section className={styles.corpo}>
                <article className={styles.noticia_principal}>
                <Header 
                    secao="Tecnologia > Inovações"
                    descricao="Saiba tudo sobre o Google Glass"
                    data="Atualizado em 23/Abril/2013"
                />
        
                <h2>O que é</h2>
                <p>O <b>Google Glass</b> é um acessório em forma de óculos que possibilita a interação dos usuários com diversos conteúdos em realidade aumentada. Também chamado de <a href="http://glass.google.com" target="_blank">Project Glass</a>, o eletrônico é capaz de tirar fotos a partir de comandos de voz, enviar mensagens instantâneas e realizar vídeoconferências. Seu lançamento está previsto para 2014, e seu preço deve ser de US$ 1,5 mil. Atualmente o <em>Google Glass</em> encontra-se em fase de testes e já possui um vídeo totalmente gravado com o dispositivo. Além disso, a companhia de buscas registrou novas patentes anti-furto e de desbloqueio de tela para o acessório.</p>

                <Figure />
                <h2>Data de lançamento</h2>
                <p>Não há uma data específica e oficial para o dispositivo ser lançado, ainda. Pode ser que ele esteja disponível em demonstrações a partir de 2013, mas seu lançamento para as lojas fica para, pelo menos, 2014.</p>

                <h2>Especificações Técnicas</h2>
                <Tabela />
                <h2>Como funciona</h2>
                <p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça</p>

                <h2>O que você pode fazer com o Google Glasses</h2>
                <p>O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de “super-humano”, já que o aparelho pode indicar a quantos metros você está de seu destino, se o metrô está aberto ou fechado, mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas com comandos de voz.</p>
                <video id="filme" controls="controls">
                <source src={video} type="video/mp4" poster={imagem}/>
                    Desculpe, mas não foi possível carregar o vídeo.
                </video>
                </article>

            </section>
            <Lateral/>
        </div>
    )
}

export default Home