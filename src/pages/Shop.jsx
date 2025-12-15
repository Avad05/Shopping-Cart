import React from 'react'
import { useState, useEffect } from 'react';
import { useCart } from '../CartContext/CartContext'
import noty from "../pages/Shop.module.css"
import { Link } from 'react-router-dom';


const Shop = () => {
  const [loading, setLoading] = useState([false]);
  const [products, setProducts] = useState([]);
  
  useEffect(() =>{
       fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
       .then(data => {
        setProducts(data);
        setLoading(false);
  })       
   
  },[])

  if(loading) return<h1> Loading ...</h1>

  const {addToCart} = useCart();

  return (
    <div>
        <h1>Shop Page</h1>
                
        <div className={noty.shop}>
        {products.map((product) =>(
          
          <Link to={`shop/${product.id}`} key={product.id} className={noty.card}>
            <div className={noty.imagCont} ><img src={product.image} alt='****' className={noty.image}></img></div>
            <div className='productDetails'>
              <h5 className={noty.productTitle}>{product.title}</h5>
              <h5 className={noty.productPrice}>Price:$ {product.price}</h5>
              
            </div>
            <button onClick={() => addToCart(product, 1)}>
          Add to Cart
        </button>
          </Link>
          
        ))}
        </div>
    </div>
  )
}

export default Shop