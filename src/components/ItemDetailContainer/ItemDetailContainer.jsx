import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    const { productoId } = useParams()

    useEffect(() => {
        getDoc(doc(db, "Productos", productoId))
            .then((querySnapshot) => {
                const product = {id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product)
        })
        .catch((error) =>{
            console.error(error)
        })
    }, [productoId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}


export default ItemDetailContainer