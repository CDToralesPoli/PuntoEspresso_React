import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

function NavBar () {

    return (
        <nav className='navBar'>
            <img className='logo' src={logo} alt="logo-punto-espresso"/>
            <div className='menu' >
                    <button id='inicio'className='botonMenu active '>Inicio</button>
                    <button id='capsulas' className='botonMenu'>Cápsulas</button>
                    <button id='maquinas' className='botonMenu'>Máquinas</button>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar 