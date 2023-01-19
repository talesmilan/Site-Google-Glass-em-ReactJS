import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import imagemHome from '../../img/home.png'
import imagemGlass from '../../img/glass-oculos-preto-peq.png'
import imagemContato from '../../img/contato.png'
import imagemEspecificaoes from '../../img/especificacoes.png'
import imagemFotos from '../../img/fotos.png'
import imagemMultimidia from '../../img/multimidia.png'
import React, {Component} from 'react'

class NavBar extends Component {


    constructor(props) {
        super(props)

        this.state = {
            imagens: imagemGlass
        }

    }

    mudaImagem(image) {
        this.setState({
            imagens: image
        })
    }

    render () {
        return (
            <nav className={styles.menu}>
            <h1>Menu Principal</h1>
            <img className={styles.icone} src={this.state.imagens}/>
            <ul>
                <li onMouseOver={() => {this.mudaImagem(imagemHome)}}
                    onMouseOut={() => {this.mudaImagem(imagemGlass)}} >
                    <Link to="/">Página Inicial</Link></li>
                <li onMouseOver={() => {this.mudaImagem(imagemEspecificaoes)}}
                    onMouseOut={() => {this.mudaImagem(imagemGlass)}} >
                    <Link to="/specs">Especificações</Link></li>
                <li onMouseOver={() => {this.mudaImagem(imagemFotos)}}
                    onMouseOut={() => {this.mudaImagem(imagemGlass)}} >
                    <Link to="/fotos">Fotos</Link></li>
                <li onMouseOver={() => {this.mudaImagem(imagemMultimidia)}}
                    onMouseOut={() => {this.mudaImagem(imagemGlass)}} >
                    <Link to="/multimidia">Multimídia</Link></li>
                <li onMouseOver={() => {this.mudaImagem(imagemContato)}}
                    onMouseOut={() => {this.mudaImagem(imagemGlass)}} >
                    <Link to="/fale-conosco">Fale conosco</Link></li>
            </ul>
        </nav>
        )
    }
}


export default NavBar