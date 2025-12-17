import { useCart } from "../../CartContext/CartContext";
import dress from '../CartItem/CartItem.module.css'

const CartItem = ({item}) =>{
    const{
        increaseQty,
        decreaseQty,
        removeFromCart
    } = useCart();

    return(
        <div className={dress.cartItem}>
        <div className={dress.random}>
        <img src={item.image} alt={item.title} className={dress.image}></img>
        <div className={dress.desc}>
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <div className={dress.manageBtn}>
             <div className={dress.buttons}>
             <button onClick={() => decreaseQty(item.id)} className={dress.change}>−</button>
             <span>{item.quantity}</span>
             <button onClick={() => increaseQty(item.id)} className={dress.change}>+</button>
             </div>
          
             <button onClick={() => removeFromCart(item.id)} className={dress.remove}>
               Remove
             </button>
             </div>
        </div>
        </div>
        </div>
    )
}

export default CartItem;