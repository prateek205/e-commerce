import React from 'react'
import MotorolaProductDetail from '../components/MotorolaProductDetail/MotorolaProductDetail'

const MotorolaProductDetails = ({cart, setCart}) => {
  return (
    <>
        <MotorolaProductDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default MotorolaProductDetails