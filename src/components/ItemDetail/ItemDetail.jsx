import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

function Item (props) {

    return (
        <div className={styles.Container}>
            <div className={styles.ImageContainer}>
                <img id={'img' + [props.product.id]} className={styles.Image} src={props.product.image_url} alt="imagen-producto"/>
            </div>
            <div className={styles.InfoContainer}>
                <div className={styles.Name}>
                    <p>{props.product.name}</p>
                </div>
                <div className={styles.Region}>
                    <p>{props.product.region}</p>
                </div>
                <div className={styles.Price}>
                    <p>US$ {props.product.price}</p>
                </div>
                <div className={styles.Description}>
                    <p>{props.product.description}</p>
                </div>
                <div>
                    Cantidad <ItemCount item={props.product}/>
                </div>
            </div>
        </div>

    )
}

export default Item