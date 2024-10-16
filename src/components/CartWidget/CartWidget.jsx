import cartIcon from './assets/cartIcon.png'
import userAccountIcon from './assets/userAccountIcon.png'
import styles from './CartWidget.module.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext/CartContext'



function CartWidget () {
    const { cartCount } = useCartContext()

    return (
        <Link to={'/cart'}>
            <div className={styles.cartWidget}  >
                <img className={styles.cartIcon} src={cartIcon} alt="cart-icon"/>
                <h3 className={styles.count}> {cartCount()} </h3>
                <img className={styles.userAccountIcon} src={userAccountIcon} alt="user-account-icon"/>
            </div>
        </Link>
        
    )
    
}

export default CartWidget