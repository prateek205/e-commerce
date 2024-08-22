import React from 'react'
import RedmiNewModelDetail from '../components/RedmiNewModelDetail/RedmiNewModelDetail'

const RedmiNewModelDetails = ({cart, setCart}) => {
  return (
    <>
        <RedmiNewModelDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default RedmiNewModelDetails