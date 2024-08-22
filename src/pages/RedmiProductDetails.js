import React from 'react'
import RedmiProductDetail from '../components/RedmiProductDetail/RedmiProductDetail'

const RedmiProductDetails = ({cart, setCart}) => {
  return (
    <>
        <RedmiProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default RedmiProductDetails