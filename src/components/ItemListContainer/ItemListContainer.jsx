import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'


function ItemListContainer () {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    
    useEffect(() => {
        fetch("https://fake-coffee-api.vercel.app/api")
        .then((res) => res.json())
            .then(data => {
                if (!categoryId) {
                    setItems(data)
                } else {
                    const filteredItems = data.filter(item => item.region === categoryId)
                    setItems(filteredItems)
                }

            })
            
    }, [categoryId])

    return (
        <div className={styles.ItemListContainer}>
            <ItemList items={items}/>  
        </div>
    )
    
}

export default ItemListContainer