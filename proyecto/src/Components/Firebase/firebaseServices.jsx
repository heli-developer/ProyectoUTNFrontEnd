import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const prodcutRef = collection(db, "products")
const orderRef = collection (db, "orders")

export const getProducts = async () => {
    const snapshot = await getDocs(prodcutRef)
    if (!snapshot.empty) {
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }
    throw new Error ("no se pudo acceder a los datos")
}


export const getProductById = async (productId) => {
    const snapshot = await getDoc(doc(db, "products", productId))
    console.log(snapshot)
    if (snapshot.exists()) {
    return {id: snapshot.id, ...snapshot.data()}
    }
    throw new Error ("Producto no encontrado")
}
