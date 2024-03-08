import { Link } from "react-router-dom"

const Item = ({id, name, precio, img }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={img} alt="gatico" />
      <br />
      <Link to={`/detail/${id}`}><button>Ver Detalle</button></Link>
    </>
  )
}

export default Item