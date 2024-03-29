

function ValidaDados(objeto) {

    let erros = []

    if (objeto.nome.length === 0) {
        erros.push('Você deve preencher o campo "Nome".')
    }
    if (objeto.senha.length === 0) {
        erros.push('Você deve preencher o campo "Senha".')
    } else {
        if (objeto.senha.length < 8 || objeto.senha.length > 12) {
            erros.push('A senha deve ter entre 8 e 12 digitos.')
        }
    }
    if (objeto.email.length === 0) {
        erros.push('Você deve preencher o campo "Email".')
    }
    if (objeto.sexo.length === 0) {
        erros.push('Você deve preencher o campo "Sexo".')
    }
    if (objeto.data.length === 0) {
        erros.push('Você deve preencher o campo "Data de Nascimento".')
    }
    if (objeto.rua.length === 0) {
        erros.push('Você deve preencher o campo "Logradouro".')
    }
    if (objeto.numero.length === 0) {
        erros.push('Você deve preencher o campo "Número".')
    }
    if (objeto.estado.length === 0) {
        erros.push('Você deve preencher o campo "Estado".')
    }
    if (objeto.cidade.length === 0) {
        erros.push('Você deve preencher o campo "Cidade".')
    }
    if (objeto.cidade.quantidade > 5) {
        erros.push('A quantida máxima permetida por pedido é 5.')
    }
    return erros
}

export default ValidaDados