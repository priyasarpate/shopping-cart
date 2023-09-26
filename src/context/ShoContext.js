import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../Products'

//2
export const shopContext = createContext(null)

//6
const getDefaultCart = () => {
let cart = {}
for(let i=1; i < PRODUCTS.length + 1; i++){
  cart[i] = 0
}
return cart
}

//1
export const ShoContextProvider = (props)  => {  //4 props 
    //5
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //7
    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    //8
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    //9
    const ContextValue = {cartItems, addToCart, removeFromCart}

  return (
    //3
    <shopContext.Provider value={ContextValue}>{props.children}</shopContext.Provider>
  )
}

