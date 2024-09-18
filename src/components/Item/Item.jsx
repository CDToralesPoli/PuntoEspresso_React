import styles from './Item.module.css'
import {Link} from 'react-router-dom'

function Item (props) {
    return (
        <div className={styles.ItemCard}>
            <div className={styles.Item}>
                <img id={'img' + [props.product.id]} className={styles.Img} src={props.product.image_url} alt="imagen-producto"/>
                <p>{props.product.name}</p>
            </div>
            <div className={styles.ItemView}>
                <div className={styles.ItemPrice}>
                    <p className={styles.Price}>${props.product.price}</p>
                </div>
                <button className={styles.LearnMore} >
                    <Link to={`/producto/${props.product.id}`} className={styles.Link}>Ver producto</Link>
                </button>
            </div>
        </div>
    )
}

export default Item