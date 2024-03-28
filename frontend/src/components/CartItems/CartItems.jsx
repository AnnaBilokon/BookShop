import React, { useContext } from 'react'
import './CartItems/css'
import { ShopContext } from '../../context/ShopContext'

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext)
  return (
    <div className="cart_items">
      <div className="cart_items_format_main">
        <p>Books</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
    </div>
  )
}

export default CartItems
