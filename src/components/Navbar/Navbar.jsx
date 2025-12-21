import React from 'react'
import { NavLink, Link, useActionData } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useCart } from '../../CartContext/CartContext'
import {ShoppingCart} from 'lucide-react'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import logo from '/images/logo.png'

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
    <Link to="/" className={styles.name}><img src={logo} alt='logo' className={styles.logo}/></Link>   
    <NavLink className={(e) => {return e.isActive?styles.white:styles.black}} to="/">Home</NavLink>
    <NavLink className={(e) => {return e.isActive?styles.white:styles.black}} to="shop">Shop</NavLink>
    <NavLink className={(e) => {return e.isActive?styles.white:styles.black}} to="cart">
      <ShoppingCart/><sup>{getTotalItems()}</sup>
      </NavLink>    
    </div>
  )
}

export default Navbar