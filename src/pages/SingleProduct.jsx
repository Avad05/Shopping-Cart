import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";
import styles from "../pages/SingleProduct.module.css";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h2>No Product Found</h2>;

  function increment() {
    setQuantity(q => q + 1);
  }

  function decrement() {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  }

  return (
    <div className={styles.container}>
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>

        <div className={styles.add}>
          <button onClick={decrement} className={styles.button}>−</button>
          <span>{quantity}</span>
          <button onClick={increment} className={styles.button}>+</button>
        </div>

        <button onClick={() => addToCart(product, quantity)} className={styles.toCart}>
          Add to Cart
        </button>

        <Link to="/shop"><button className={styles.shop}>Shop More</button></Link>
      </div>      
    </div>
      <div className={styles.more}>
     <h1>More About this Product</h1>
      <p>{product.description}</p>
      </div>
      </div>
  );
};

export default SingleProduct;
