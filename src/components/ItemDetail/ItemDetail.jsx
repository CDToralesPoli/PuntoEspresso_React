import styles from './ItemDetail.module.css'
import {Link} from 'react-router-dom'
import Contador from '../Contador/Contador'

function Item (props) {
    return (
        <div className={styles.ItemCard}>
            <div className={styles.Item}>
                <img id={'img' + [props.product.id]} className={styles.Img} src={props.product.image_url} alt="imagen-producto"/>
                <p className={styles.Name}>{props.product.name}</p>
                <p className={styles.Region}>{props.product.region}</p>
                <p className={styles.Description}>{props.product.description}</p>
            </div>
            <div className={styles.ItemView}>
                <div className={styles.ItemPrice}>
                    <p className={styles.Price}>${props.product.price}</p>
                </div>
                <Contador />
                <button className={styles.LearnMore} >
                    <Link className={styles.Link}>Agregar al Carrito</Link>
                </button> 
            </div>
        </div>
    )
}

export default Item