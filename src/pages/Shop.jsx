import React from 'react'
import { useCart } from '../CartContext/CartContext'

const Shop = () => {
  const {addToCart} = useCart();
  return (
    <div>
        <h1>Shop Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam molestias quidem hic, dolor doloribus quisquam itaque vel reprehenderit accusantium, sit et praesentium voluptatibus sint atque. Molestiae, maxime! Minus, debitis.</p>
        <button onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
    </div>
  )
}

export default Shop