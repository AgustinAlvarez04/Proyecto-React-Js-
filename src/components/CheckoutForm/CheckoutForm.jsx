import { useState } from "react"

const CheckoutForm = ({onConfirm}) => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleConfirm = (e) => {
        e.preventDefault();

        const data = {
            nombre, apellido, telefono
        }

        onConfirm(data)
    }

  return (
    <div>
        <form onSubmit={handleConfirm}>
            <label>Nombre: </label>
            <input type="text" value={nombre} onChange={({target})=>setNombre(target.value)}/><br />
            <label>Apellido: </label>
            <input type="text" value={apellido} onChange={({target})=>setApellido(target.value)}/><br />
            <label>Teléfono: </label>
            <input type="tel" value={telefono} onChange={({target})=>setTelefono(target.value)}/><br />
            <button type="submit">Confirmar Orden</button>
        </form>
    </div>
  )
}

export default CheckoutForm