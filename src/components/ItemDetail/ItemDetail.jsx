import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, precio, img, descripcion}) => {
  return (
    <>
        <h2>Nombre: {name}</h2>
        <img src={img} alt="Imagen del producto"/>
        <p>Precio: {precio}</p>
        <p>Descripcion: {descripcion}</p>
        <ItemCount inicial={1} stock={5} agregar={(contador) => alert("Ordenaste " + contador + " animalitos")} />
    </>
  )
}

export default ItemDetail