import styles from './Cart.module.css'
import { useCartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'


function Cart () {
    const { cart, clearCart, removeFromCart, decrementQty, incrementQty} = useCartContext()

    return (
        <div>
            <div>
                {cart.map(product => 
            <div key={product.id}>{product.name} - Cantidad: <button onClick={() => decrementQty(product.id)}>-</button> {product.qty} <button onClick={() => incrementQty(product.id)}>+</button> - Precio: ${product.price * product.qty} <button onClick={() => removeFromCart(product.id)}>Eliminar</button></div>)} 
            </div>
            
            <div>Total: ${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</div>
            
            <button onClick={clearCart}>Vaciar carrito</button>

            <button><Link to="/checkout">Checkout</Link></button>
        </div>
        
    )
    
}

export default Cart
