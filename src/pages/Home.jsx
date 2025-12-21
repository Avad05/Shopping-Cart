import React from 'react'
import style from './Home.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Link as Linkicon} from 'lucide-react'
import banner from '/images/banner.jpg'

const Home = () => {
   const[products, setProducts] = useState([]);
  useEffect(() =>{    
    fetch("https://fakestoreapi.com/products?limit=4")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error));
  },[])

  return (
    <div className={style.container}>
      <img src={banner} className={style.supplement} alt="supplement stack" />
        <h1>Featured Products</h1>
        <div className={style.container1}>
        <div className={style.grid}>
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} className={style.image}/>
            <h3>{product.title}</h3>
            <Link to={`shop/${product.id}`}><Linkicon /></Link>
          </div>
        ))}
      </div>
        </div>
        
        <section>
  <h1>Why This Shop?</h1>
  <ul className={style.flex}>
    <li>Built with React & Hooks</li>
    <li>Global cart using Context API</li>
    <li>Dynamic routing with React Router</li>
    <li>Fully tested with RTL</li>
  </ul>
</section>

        <footer className={style.footer}>
          <p>Made with ❤️ from Mumbai </p>
          <p>📍 Shop No. 1, Gods colony, CurreyRoad, Mumbai-400041</p>
        </footer>
    </div>
  )
}

export default Home