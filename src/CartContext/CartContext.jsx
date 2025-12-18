import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity){
        setCartItems((prev) =>{
            const existing = prev.find(item => item.id === product.id);

            if(existing){
                return prev.map(item =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity + quantity}
                    : item
                );
            }

            return [...prev, {...product, quantity}];
        });
    }

    function increaseQty(id){
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                ?{...item, quantity: item.quantity + 1}
                :item
            )
        );
    }


    function decreaseQty(id){
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                ? {...item, quantity: item.quantity - 1}
                :item 
            )
            .filter(item => item.quantity > 0)
        );
    }

    function removeFromCart(id){
        setCartItems(prev =>
            prev.filter(item => item.id !== id)
        );

        }

     function getTotalItems(){
        return cartItems.reduce((sum, item) => sum + item.quantity, 0)
     }   

     function getTotalPrice(){
        const total = 
            cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
             

            return total.toFixed(2);
         }


     return(
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQty,
            decreaseQty,
            removeFromCart,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
     );
}

export function useCart(){
    return useContext(CartContext);
}