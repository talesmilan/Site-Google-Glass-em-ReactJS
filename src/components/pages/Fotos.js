import React from 'react'
import Header from '../layout/Header'
import AlbumFotos from '../layout/AlbumFotos'

function Fotos() {
    return (
        <div>
            <section>
                <article className="noticia_principal">
                    <Header 
                        secao="Glass > Fotos"
                        descricao="Galeria de imagens do Google Glass"
                        data="Atualizado em 01/Maio/2013"
                    />   
                    <p>Veja na nossa galeria de fotos várias belas imagens que mostram algumas das principais
                    características do Google Glass, como recursos e propriedades que estão impressionando o mundo
                    inteiro. Basta passar o mouse sobre uma das fotos para ver uma versão ampliada e com uma breve
                    descrição.</p> 
                    <AlbumFotos />
                </article>
            </section>       
        </div>
    )
}

export default Fotos