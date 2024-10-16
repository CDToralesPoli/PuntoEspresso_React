import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext/CartContext'
import { createOrder } from '../../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import styles from './Checkout.module.css'

const Checkout = () => {
    const { cart, clearCart } = useCartContext()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('creditCard')
    const [isProcessing, setIsProcessing] = useState(false)
    const [orderConfirmed, setOrderConfirmed] = useState(false)
    const [orderId, setOrderId] = useState('')

    const handleCheckout = async (e) => {
        e.preventDefault()
        setIsProcessing(true)

        await new Promise(resolve => setTimeout(resolve, 2000))

        const order = {
            buyer: { name, address, phone, email},
            items: cart,
            date: serverTimestamp(),
            total: cart.reduce((acc, item) => acc + item.price * item.qty, 0),
            paymentMethod
        }

        setOrderId( await createOrder(order))

        setIsProcessing(false)
        setOrderConfirmed(true)
        clearCart()
    }

    if (orderConfirmed) {
        console.log(orderId)
        return <h2>¡Muchas gracias por tu compra! <br /> Estamos procesando tu pedido. Tu número de orden es: {orderId}</h2>
              
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                {cart.map(product => 
            <div key={product.id}>{product.name} - Cantidad: {product.qty} - Precio: ${product.price * product.qty} </div>)} 
            </div>
            <form onSubmit={handleCheckout}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                
                <div>
                    <label>Dirección:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="telephone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Método de Pago:</label>
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="creditCard">Tarjeta de Crédito</option>
                        <option value="paypal">Tarjeta de Débito</option>
                        <option value="bankTransfer">Transferencia Bancaria</option>
                    </select>
                </div>
                <button type="submit" disabled={isProcessing}>
                    {isProcessing ? 'Procesando...' : 'Finalizar Compra'}
                </button>
            </form>
        </div>
    )
}

export default Checkout