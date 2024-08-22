import React from 'react'
import NothingProductDetail from '../components/NothingProductsDetail/NothingProductsDetail'

const NothingProductDetails = ({cart, setCart}) => {
  return (
    <>
        <NothingProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default NothingProductDetails