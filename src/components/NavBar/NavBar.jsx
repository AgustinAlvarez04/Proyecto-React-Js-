
import CardWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Mi Tiendita</Link>
            <div>
                <Link to='/category/gaticos'><button>Gaticos</button></Link>
                <Link to='/category/perritos'><button>Perritos</button></Link>
                <Link to='/pedidos'><button>Pedidos <CardWidget /> </button></Link>
            </div>
        </nav>
    )
}

export default NavBar