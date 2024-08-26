import cartIcon from './assets/cartIcon.png'
import userAccountIcon from './assets/userAccountIcon.png'

function CartWidget () {

    return (
        <div className='cartWidget' >
            <img className='cartIcon' src={cartIcon} alt="cart-icon"/>
            <h3 className='count'> 0 </h3>
            <img className='userAccountIcon' src={userAccountIcon} alt="user-account-icon"/>
        </div>
    )
    
}

export default CartWidget