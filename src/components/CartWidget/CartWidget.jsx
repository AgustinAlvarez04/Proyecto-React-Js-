
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import carrito1 from './assets/carrito1.png';

const CartWidget = () => {
    const { stockTotal } = useCart();
    return (
        <Link to="/cart">
            <img src={carrito1} alt="cart-widget" />
            {stockTotal}
        </Link>
    );
};

export default CartWidget;