import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMocks"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productoId } = useParams()
    console.log(productoId)

    useEffect(() => {
        getProductById(productoId).then(res => setProduct(res))
    }, [productoId])

    if (!product) {
        return <p>No existe este producto</p>
    }

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}


export default ItemDetailContainer