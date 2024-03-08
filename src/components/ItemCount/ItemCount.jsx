import React from 'react'
import { useState, useEffect } from 'react'

const ItemCount = ({ stock, inicial, agregar}) => {

    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState('black')

    useEffect(() => {
        if (contador === 5) {
            setColor("red")
        } else {
            setColor("green")
        }
    }, [contador])


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar}>-</button>
                <strong>{contador}</strong>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <a style={{color:color}}>Stock</a>
                <br />
                <button style={{color:'white'}} onClick={() => agregar(contador)}>Ordenar</button>

            </div>
        </>
    )
}
export default ItemCount