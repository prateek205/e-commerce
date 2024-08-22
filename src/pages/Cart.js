import React from 'react'
import CartSection from '../components/CartSection/CartSection'

const Cart = ({cart, setCart}) => {
  return (
    <>
    <CartSection cart={cart} setCart={setCart}/>
    </>
  )
}

export default Cart