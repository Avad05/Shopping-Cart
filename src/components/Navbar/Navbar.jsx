import React from 'react'
import { NavLink, Link, useActionData } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useCart } from '../../CartContext/CartContext'

const Navbar = () => {

  const {getTotalItems} = useCart();
  return (
    <div className={styles.navigation}>
    <Link to="/">MuscleX</Link>   
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="/">Home</NavLink>
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="shop">Shop</NavLink>
    <input className={styles.inputtext} type='text' placeholder='search products ?'></input>
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="cart">
      Cart ({getTotalItems()})
      </NavLink>    
    </div>
  )
}

export default Navbar