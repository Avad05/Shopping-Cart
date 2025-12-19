import { useCart } from "../CartContext/CartContext";
import CartItem from "../components/CartItem/CartItem";
import Cart from '../pages/Cart.module.css';
import { Link } from "react-router-dom";


const cart = () =>{

  const {cartItems, getTotalPrice} = useCart();

  if(cartItems.length === 0){
    return <>
           <img src="../src/assets/empty.jpg" alt="empty cart" className={Cart.khali}></img>
           </>
  }

  return(
    < div>
     <h1>Your Cart</h1>
      
     {cartItems.map(item => (
       <CartItem key={item.id} item={item}/>
     ))}
      
      <h2 className={Cart.total}>Total Price: ${getTotalPrice()}</h2>

      <div className={Cart.buttons}>
      <Link to="/shop"><button className={Cart.shop}>Shop More</button></Link>
      <button className={Cart.checkOut}>Checkout</button>
      </div>
    </div>
  )

}

export default cart;