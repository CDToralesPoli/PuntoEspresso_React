import Item from '../Item/Item'
import styles from './ItemList.module.css'

function ItemList (props) {
    return (
        <div className={styles.ItemList}>
            {props.items.map(product => 
                <Item product={product} key={product.id}/> )
            }    
        </div>
    )
}

export default ItemList