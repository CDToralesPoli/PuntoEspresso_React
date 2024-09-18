import cartIcon from './assets/cartIcon.png'
import userAccountIcon from './assets/userAccountIcon.png'
import styles from './CartWidget.module.css'

function CartWidget () {

    return (
        <div className={styles.cartWidget}  >
            <img className={styles.cartIcon} src={cartIcon} alt="cart-icon"/>
            <h3 className={styles.count}> 0 </h3>
            <img className={styles.userAccountIcon} src={userAccountIcon} alt="user-account-icon"/>
        </div>
    )
    
}

export default CartWidget