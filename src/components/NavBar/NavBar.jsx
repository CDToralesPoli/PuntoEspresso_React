import styles from './NavBar.module.css'
import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <nav className={styles.navBar}>
            <NavLink to={'/'} ><img className={styles.logo} src={logo} alt="logo-punto-espresso" /></NavLink>
            <div className={styles.menu} >
                <NavLink className={styles.botonMenu} to={'/'}> Inicio </NavLink>
                <NavLink className={styles.botonMenu} to={'categoria/Asia Pacific'}> Asia </NavLink>
                <NavLink className={styles.botonMenu} to={'categoria/Africa'}> Africa </NavLink>
                <NavLink className={styles.botonMenu} to={'categoria/Middle East'}> Oriente Medio </NavLink>
                <NavLink className={styles.botonMenu} to={'categoria/Central America'}> Centroamerica </NavLink>
                <NavLink className={styles.botonMenu} to={'categoria/South America'}> Sudamerica </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 