import React from 'react'
import { useCart } from '../CartContext/CartContext'

const Cart = () => {

  const{
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  return (
    <div>
        <h1>Cart Page</h1>
        <button onClick={ () => increaseQty(id)}>IncreaseQty</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nam, tempora adipisci sunt nostrum voluptatem rem. Ex magni similique voluptas veritatis perferendis nihil impedit temporibus, doloremque incidunt nam corrupti fugit.</p>
    </div>
  )
}

export default Cart