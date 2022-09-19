import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function NavBar() {
    return (
<nav className={styles.menu}>
    <h1>Menu Principal</h1>
    <ul>
        <li ><Link to="/">Página Inicial</Link></li>
        <li ><Link to="/specs">Especificações</Link></li>
        <li ><Link to="/fotos">Fotos</Link></li>
        <li ><Link to="/multimidia">Multimídia</Link></li>
        <li ><Link to="/fale-conosco">Fale conosco</Link></li>
    </ul>
    </nav>
    )
}

export default NavBar