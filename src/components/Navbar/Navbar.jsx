import React from 'react'
import { NavLink, Link, useActionData } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useCart } from '../../CartContext/CartContext'
import {ShoppingCart} from 'lucide-react'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

   const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/shop?search=${query}`);
  }

  const {getTotalItems} = useCart();
  return (
    <div className={styles.navigation}>
    <Link to="/">MuscleX</Link>   
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="/">Home</NavLink>
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="shop">Shop</NavLink>
    
    <NavLink className={(e) => {return e.isActive?styles.white:""}} to="cart">
      <ShoppingCart/><sup>{getTotalItems()}</sup>
      </NavLink>    
    </div>
  )
}

export default Navbar