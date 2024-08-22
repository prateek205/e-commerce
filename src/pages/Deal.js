import React from 'react'
import BestSmartphone from '../components/BestSmartphone/BestSmartphone'

const Deals = ({cart, setCart}) => {
  return (
    <>
      <BestSmartphone cart={cart} setCart={setCart}/>
    </>
  )
}

export default Deals