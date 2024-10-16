import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'
import { getProductById } from '../../firebase/db'

function ItemDetailContainer () {
    const [item, setItem] = useState(null)
    const {id} = useParams()
    

    useEffect(() => {
        getProductById(id, setItem)
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