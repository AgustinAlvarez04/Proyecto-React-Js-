import './nav.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const NavBar = () => {
    const value = useContext(CartContext)

    return (
        <nav>
            <Link to='/' className="tiendita">Mi Tiendita</Link>
            <div>
                <Link to='/category/celus'><button>Celus</button></Link>
                <Link to='/category/perritos'><button>Perritos</button></Link>
                <Link to='/cart'><button><CartWidget /> </button></Link>
            </div>
        </nav>
    )
}

export default NavBar