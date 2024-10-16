import React, { useState } from 'react'
import { cartContext } from './CartContext'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart(prevCart => {
            const isDuplicated = prevCart.some(cartItem => cartItem.id === item.id)
            if (isDuplicated) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + item.qty }
                        : cartItem
                )
            } else {
                return [...prevCart, { ...item, qty: item.qty }]
            }
        })
    }

    const incrementQty = (item) => {
        setCart(prevCart => {
            return prevCart.map(cartItem => {
                if (cartItem.id === item) {
                    return { ...cartItem, qty: cartItem.qty + 1 }
                }
                return cartItem
            })
        })
    }
    
    const decrementQty = (item) => {
        setCart(prevCart => {
            return prevCart.map(cartItem => {
                if (cartItem.id === item) {
                    return { ...cartItem, qty: cartItem.qty > 1 ? cartItem.qty - 1 : 1 }
                }
                return cartItem
            })
        })
    }

    const removeFromCart = (item) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item))
    }

    const clearCart = () => {
        setCart([])
    }

    const cartCount = () => {
        return cart.reduce((total, item) => total + item.qty, 0)
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, incrementQty ,decrementQty }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
