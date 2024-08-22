import React from 'react'
import DealDetail from '../components/Deals/Dealdetail'

const DealDetails = ({cart, setCart}) => {
  return (
    <>
      <DealDetail cart={cart} setCart={setCart}/>
    </>
  )
}

export default DealDetails