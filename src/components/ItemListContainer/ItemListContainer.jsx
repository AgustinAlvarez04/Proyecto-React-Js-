import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ text, prod }) => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId ? query(collection(db, "Productos"), where("category", "==", categoryId)) :
            collection(db, "Productos")
        getDocs(collectionRef)
            .then((response) => {
                const productos = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
                setProductos(productos)
            })
    }, [categoryId])

    return (
        <div className='ItemListContainer'>
            <h1>{text}</h1>
            <h2>{prod}</h2>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer