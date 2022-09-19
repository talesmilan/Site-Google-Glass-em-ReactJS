import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.rodape}>
            <p>Copyright &copy; 2013 - by Google Glass</p>
            <p><a href="https://facebook.com/cursosemvideo" target="blank">Facebook</a> | <a href="https://twitter.com/cursosemvideo" target="blank">Twitter</a></p>
        </footer> 
    )
}

export default Footer