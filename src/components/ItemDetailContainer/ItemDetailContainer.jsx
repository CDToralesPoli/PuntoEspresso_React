import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'

function ItemDetailContainer () {
    const [item, setItem] = useState(null)
    const {id} = useParams()
    

    useEffect(() => {
        fetch(`https://fake-coffee-api.vercel.app/api/${id}`)
        .then(res => res.json())
        .then(res => setItem(res))
    }, [id])

    return (
        <div className={styles.ItemDetailContainer}>
            {item?.map(product => 
                <ItemDetail product={product} key={product.id}/> )
            }    
        </div>
        
    )
}

export default ItemDetailContainer