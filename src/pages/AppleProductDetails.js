import React from 'react'
import AppleProductDetail from '../components/AppleProductDetail/AppleProductDetail'

const AppleProductDetails = ({cart, setCart}) => {
  return (
    <>
        <AppleProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default AppleProductDetails