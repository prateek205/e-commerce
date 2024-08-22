import React from 'react'
import SamsungProductDetail from '../components/SamsungProductDetail/SamsungProductDetail'

const SamsungProductDetails = ({cart, setCart}) => {
  return (
    <>
        <SamsungProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default SamsungProductDetails