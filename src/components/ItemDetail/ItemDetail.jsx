import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../context/Notification";

const ItemDetail = ({ id, name, precio, stock, img, descripcion }) => {
  const { aggItem, inCart } = useCart();
  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const productObj = {
      id, name, precio, stock: count, descripcion, img
    }
    aggItem(productObj);
    setNotification("success" , "Producto Agregado al Carrito");
  }

  return (
    <>
      <h2>Nombre: {name}</h2>
      <img src={img} alt="Imagen del producto" />
      <p>Precio: {precio}</p>
      <p>Descripcion: {descripcion}</p>

      <footer>
        {
          inCart(id) ? (
            <Link to='/cart'><button>Finalizar Compra</button></Link>
          ) : (
            <ItemCount inicial={1} stock={stock} agregar={handleAdd} />
          )
        }
      </footer>
    </>
  )
}

export default ItemDetail