import React from 'react'
import XiaomiProductDetail from '../components/XiaomiProductDetail/XiaomiProductDetail'

const XiaomiProductDetails = ({cart, setCart}) => {
  return (
    <>
        <XiaomiProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default XiaomiProductDetails