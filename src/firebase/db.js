import { getFirestore, 
        collection, 
        getDocs, 
        query, 
        where,
        addDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}

export const getProductsByCategory = async (categoryId, setProducts) => {
    const q = query(collection(db, "products"), where("region", "==", categoryId))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)

}

export const getProductById = async (id, setProduct) => {
    const q = query(collection(db, "products"), where("id", "==", id))
    const querySnapshot = await getDocs(q)
    const product = []

    querySnapshot.forEach((doc) => {
        product.push(doc.data())
    })

    setProduct(product)
    
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return(docRef.id)
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}