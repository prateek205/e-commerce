import React from 'react'
import OppoProductDetail from '../components/OppoProductDetail/OppoProductDetail'

const OppoProductDetails = ({cart, setCart}) => {
  return (
    <>
        <OppoProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default OppoProductDetails