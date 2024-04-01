import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, total, stockTotal } = useCart()
    const precioTotal = total();

    if (stockTotal === 0) {
        <h1>No hay items agregados </h1>
    }

    return (
        <>
            <h1>Carrito de compras</h1>
            {
                cart.map((items) => (
                    <CartItem key={items.id} {...items} />
                ))
            }
            <h2>Total: {precioTotal}</h2>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to='/checkout'><button>Finalizar Compra</button></Link>
        </>
    )
}

export default Cart


