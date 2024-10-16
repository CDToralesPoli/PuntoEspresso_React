import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext/CartContext'
import styles from './ItemCount.module.css'

function ItemCount (props) {
    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()

    const add = () => setCount(count + 1)
    const sub = () => {
        if (count <= 1) {
          setCount(1)
        } else {
          setCount(count - 1)
        }
      }
    const handleAddToCart = () => addToCart({... props.item, qty: count})

    return (
        <div className={styles.Contador}>
            <button onClick={sub}> - </button>
            <p> {count} </p>
            <button onClick={add}> + </button>
            <button onClick={handleAddToCart}> Agregar al Carrito </button>
        </div>  
    )
}   

export default ItemCount