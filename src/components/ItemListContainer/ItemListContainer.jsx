import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../firebase/db'
import ClipLoader from 'react-spinners/ClipLoader'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            if (categoryId) {
                await getProductsByCategory(categoryId, setItems)
            } else {
                await getProducts(setItems)
            }
            setLoading(false)
        }
        fetchData()
    }, [categoryId])

    return (
        <div className={styles.ItemListContainer}>
            {loading ? (
                <ClipLoader color="#5A6E5A" loading={loading} size={50} />
            ) : (
                <ItemList items={items} />
            )}
        </div>
    )
}

export default ItemListContainer