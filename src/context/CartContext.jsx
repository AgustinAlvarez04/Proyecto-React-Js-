import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const aggItem = (productoAgg) => {
        if (!inCart(productoAgg.id)) {
            setCart(prod => [...prod, productoAgg])
        } else {
            console.error("Este producto ya se encuentra en el carrito")
        }
    }

    const inCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(item => item.id !== id)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const getStockTotal = () => {
        let acc = 0;
        cart.forEach(prod => { acc += prod.stock })
        return acc
    }

    const stockTotal = getStockTotal()

    const total = () => {
        let suma = 0;
        cart.forEach((item) => {
            suma += item.stock * item.precio
        })
        return suma
    }

    return (
        <CartContext.Provider value={{ cart, aggItem, inCart, removeItem, clearCart, stockTotal, total}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}