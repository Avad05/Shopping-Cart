import { useCart } from "../../CartContext/CartContext";
import dress from '../CartItem/CartItem.module.css'
import {Trash2} from 'lucide-react';

const CartItem = ({item}) =>{
    const{
        increaseQty,
        decreaseQty,
        removeFromCart
    } = useCart();

    return(
        <>
        <div className={dress.cartItem}>
        <div className={dress.random}>
        <img src={item.image} alt={item.title} className={dress.image}></img>
        <div className={dress.desc}>
            <h2>{item.title}</h2>
            <h1 className={dress.h1}>${item.price}</h1>
        </div>    
            <div className={dress.manageBtn}>
             <div className={dress.buttons}>
             <button onClick={() => decreaseQty(item.id)} className={dress.change}>−</button>
             <span>{item.quantity}</span>
             <button onClick={() => increaseQty(item.id)} className={dress.change}>+</button>
             </div>
          
             <button onClick={() => removeFromCart(item.id)} className={dress.remove}>
               <Trash2 />
             </button>
             </div>
        
        </div>
        
        </div>
        </>
    )
}

export default CartItem;