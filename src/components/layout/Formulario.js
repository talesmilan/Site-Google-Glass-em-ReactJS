import {useState} from 'react'
import botaoEnviar from '../../img/botao-enviar.png'
import './Formulario.module.css'
import MensagemErro from './MensagemErro'
import valida from '../../ValidaDados'

function Formulario() {

    const [dados, setDados] = useState({
        nome: "",
        senha: "",
        email: "",
        sexo: "",
        data: "",
        rua: "",
        numero: "",
        estado: "",
        cidade: "",
        urgencia: 4,
        mensagem: "",
        pedido: false,
        cor: "#000000",
        quantidade: "0"
    })

    const [resultado, setResultado] = useState("")

    const [erros, setErros] = useState([])

    const handleOnChange = (e) => {

        const name = e.target.name
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value

        setDados({...dados, [name]: value})
    }


    const calculaValor = (e) => {
        const valor = Number(e.target.value) * 1500
        setResultado(valor.toString())
        handleOnChange(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mensagemErros = valida(dados)
        if (mensagemErros.length > 0) {
            setErros(mensagemErros)
            window.scrollTo(0, 120)
        } else {
            alert(JSON.stringify(dados) + "O preço total é " + resultado)
        }

    }

    return (
        <>
            <MensagemErro erros={erros} />
            <form method="post" onSubmit={handleSubmit} id="fContato">
                <fieldset id="usuario">
                    <legend>Identificação do Usuário</legend>
                    <p><label htmlFor="cNome">Nome: </label><input type="text" name="nome" id="cNome" size="30" maxLength="30" placeholder="Nome Completo" required onChange={handleOnChange} value={dados.nome} /></p>
                    <p><label htmlFor="cSenha">Senha: </label><input type="password" name="senha" id="cSenha" size="10" maxLength="8" placeholder="8 digítos" required onChange={handleOnChange} value={dados.senha}/></p>
                    <p><label htmlFor="cMail">E-mail: </label><input type="email" name="email" id="cMail" size="30" maxLength="40" required onChange={handleOnChange} value={dados.email}/> </p>
                
                    <fieldset id="sexo">
                    <legend>Sexo:</legend>
                            <input value="Masculino" onChange={handleOnChange} checked={dados.sexo === "Masculino"} type="radio" name="sexo" id="cMasc"/><label htmlFor="cMasc">Masculino</label>
                            <input value="Feminino" onChange={handleOnChange} checked={dados.sexo === "Feminino"} type="radio" name="sexo" id="cFem"/><label htmlFor="cFem">Feminino</label>
                    </fieldset>
                    <p><label htmlFor="cNasc">Data de Nascimento: </label><input type="date" name="data" id="cNasc" required onChange={handleOnChange} value={dados.data} /></p>
                </fieldset>
                <fieldset id="endereco">
                    <legend>Endereço do Usuário</legend>
                    <p><label htmlFor="cRua">Logradouro: </label><input type="text" name="rua" id="cRua" size="30" maxLength="80" placeholder="Rua, Av, Trav, ..." required onChange={handleOnChange} value={dados.rua}/> </p>
                    <p><label htmlFor="cNum">Número: </label><input type="number" name="numero" id="cNum" min="0" max="99999999" required onChange={handleOnChange} value={dados.numero}/></p>
                    <p><label htmlFor="cEst">Estado: </label>
                    <select name="estado" id="cEst" onChange={handleOnChange} value={dados.estado}>
                        <optgroup label="Região Sudeste">
                            <option value="" disabled>Selecione um estado</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="SP">São Paulo</option>
                            <option value="MG">Minas Gerais</option>
                        </optgroup>
                        <optgroup label="Região Sul">
                            <option value="PR">Párana</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="RS">Rio Grande do Sul</option>
                        </optgroup>
                    </select>
                    </p>
                    <p><label htmlFor="cCid">Cidade: </label>
                    <input type="text" name="cidade" id="cCid" maslenght="40" size="20" list="cidades" required onChange={handleOnChange} value={dados.cidade}/>
                    </p>
                    <datalist id="cidades">
                        <option value="Rio de Janeiro"></option>
                        <option value="Nova Iguaçu"></option>
                        <option value="Niterói"></option>
                        <option value="Belford Roxo"></option>
                    </datalist>
                </fieldset>
                <fieldset id="mensagem">
                    <legend>Mensagem do Usuário</legend>
                    <p><label htmlFor="cUrg">Grau de Urgência: </label>
                        Mín<input type="range" name="urgencia" id="cUrg" min="0" max="10" step="2" onChange={handleOnChange} value={dados.urgencia} />Máx
                    </p>
                    <p><label htmlFor="cMsg">Mensagem: </label>
                        <textarea name="mensagem" id="cMsg" cols="45" rows="5"
                            placeholder="Deixe aqui sua mensagem" onChange={handleOnChange} value={dados.mensagem} />
                    </p>
                </fieldset>
                <fieldset id="pedido">
                    <legend>Quero um Google Glass</legend>
                    <p><input type="checkbox" name="pedido" id="cPed" onChange={handleOnChange} checked={dados.pedido}/>
                        <label htmlFor="cPed">Gostaria de adquirir um Google Glass quando disponível</label>
                    </p>
                    <p><label htmlFor="cCor">Cor: </label>
                        <input type="color" name="cor" id="cCor" onChange={handleOnChange} 
                        value={dados.cor}/>
                    </p>
                    <p><label htmlFor="cQtd">Quantidade: </label>
                        <input type="number" name="quantidade" id="cQtd" min="0" max="5" onChange={calculaValor} value={dados.quantidade}/>
                    </p>
                    <p><label htmlFor="cTot">Preço Total: R$ </label>
                        <input type="text" name="precoTotal" id="cTot" placeholder="Total a Pagar" readOnly value={resultado}/>
                    </p>
                </fieldset>
                <input type="image" alt="Botão de enviar" src={botaoEnviar} name="tEnviar" id="cEnviar"/>
            </form>
        </>
    )
}

export default Formulario