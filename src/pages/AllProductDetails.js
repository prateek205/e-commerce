import React from 'react'
import AllProductDetail from '../components/AllProductDetail/AllProductDetail'

const AllProductDetails = ({items, cart, setCart}) => {
  return (
    <>
        <AllProductDetail items={items} cart={cart} setCart={setCart}/>
    </>
  )
}

export default AllProductDetails