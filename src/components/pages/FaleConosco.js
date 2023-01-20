import Header from '../layout/Header'
import Formulario from '../layout/Formulario'

function FaleConosco() {
    return (
        <div className="corpo-full">
            <article className='noticial-princiap'>
                <Header
                    secao="Fale Conosco > Contato"
                    descricao="Formulário de Contato"
                    data="Atualizado em 01/Maio/2013"/>
                <Formulario />
            </article>
        </div>
    )
}

export default FaleConosco