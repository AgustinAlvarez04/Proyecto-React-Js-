import { useCart } from "../../context/CartContext"

const CartItem = ({ id, name, stock, precio, descripcion, img}) => {
  const { removeItem } = useCart()
  const handleRemove = (id) => {
    removeItem(id)
  }
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <img src={img} alt="img card widget" />
      <p>Descripcion: {descripcion}</p>
      <p>Cantidad: {stock}</p>
      <p>Precio Unitario: {precio}</p>
      <p>SubTotal: {precio * stock}</p>
      <button onClick={() => handleRemove(id)}>Borrar Item</button>
    </div>
  )
}

export default CartItem