import { useCart } from "../CartContext/CartContext";
import CartItem from "../components/CartItem/CartItem";
import Carts from '../pages/Cart.module.css';
import { Link } from "react-router-dom";
import empty from '../assets/empty.jpg'


const Cart = () =>{

  const {cartItems, getTotalPrice} = useCart();

  if(cartItems.length === 0){
    return <>
           <img src={empty} alt="empty cart" className={Carts.khali}></img>
           </>
  }

  return(
    < div>
     <h1>Your cart</h1>
      
     {cartItems.map(item => (
       <CartItem key={item.id} item={item}/>
     ))}
      
      <h2 className={Carts.total}>Total Price: ${getTotalPrice()}</h2>

      <div className={Carts.buttons}>
      <Link to="/shop"><button className={Carts.shop}>Shop More</button></Link>
      <button className={Carts.checkOut}>Checkout</button>
      </div>
    </div>
  )

}

export default Cart;