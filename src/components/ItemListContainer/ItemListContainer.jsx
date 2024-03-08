import { useState, useEffect } from "react"
import { getProductos, getProductosCategory } from "../../asyncMocks"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ text, prod }) => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const categorias = categoryId ? getProductosCategory : getProductos

        categorias(categoryId).then(res => setProductos(res))
    }, [categoryId])

    return (
        <div>
            <h1>{text}</h1>
            <h2>{prod}</h2>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer