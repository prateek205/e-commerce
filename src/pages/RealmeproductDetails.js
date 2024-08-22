import React from 'react'
import RealmeProductDetail from '../components/RealmeProductDetail/RealmeProductDetail'

const RealmeproductDetails = ({cart, setCart}) => {
  return (
    <>
      <RealmeProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default RealmeproductDetails