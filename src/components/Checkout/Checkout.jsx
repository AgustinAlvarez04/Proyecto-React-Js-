import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {

  const [loading, setLoading] = useState(false)
  const [orderCreate, setOrder] = useState(false)

  const { cart, stockTotal, total, clearCart } = useCart();
  const getTotal = total()

  const OrdenDeCompra = async ({ nombre, apellido, telefono }) => {

    setLoading(true)

    try {
      const orden = {
        buyer: {
          nombre, apellido, telefono
        }, items: cart, stockTotal, getTotal
      }

      const id = cart.map((item) => item.id)
      const productos = collection(db, "Productos")
      const productosFirestore = await getDocs(query(productos, where(documentId(), "in", id)))
      const { docs } = productosFirestore

      const sinStock = [];
      const batch = writeBatch(db)

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDB = dataDoc.stock;

        const productosFirestore = cart.find((prod) => prod.id === doc.id)
        const prodStock = productosFirestore?.stock

        if (stockDB >= prodStock) {
          batch.update(doc.ref, { stock: stockDB - prodStock })
        } else {
          sinStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (sinStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders")
        const orderAdd = await addDoc(orderRef, orden)
        clearCart()
        setOrder(orderAdd.id)
      }else {
        console.log("Productos Sin Stock")
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Se esta generando su orden</h1>
  }

  if (orderCreate) {
    return (
      <div>
        <h3>La orden fue creada correctamente</h3>
        <h4>Id para el seguimiento de su compra: {orderCreate} </h4>
      </div>
    )
  }

  return (
    <>
      <h1>CheckOut</h1>
      <CheckoutForm onConfirm={OrdenDeCompra}>Generar Orden</CheckoutForm>
    </>
  )
}

export default Checkout