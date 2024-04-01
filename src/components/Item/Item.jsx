import { Link } from "react-router-dom"

const Item = ({id, name, img }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={img} alt="img" />
      <br />
      <Link to={`/detail/${id}`}><button>Ver Detalle</button></Link>
    </>
  )
}

export default Item