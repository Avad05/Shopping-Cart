import { useCart } from "../CartContext/CartContext";
import CartItem from "../components/CartItem/CartItem";
import Cart from '../pages/Cart.module.css';


const cart = () =>{

  const {cartItems} = useCart();

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
    </div>
  )

}

export default cart;