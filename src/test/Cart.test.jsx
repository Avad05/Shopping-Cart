import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem/CartItem";
import Cart from "../pages/Cart";
import { CartProvider } from "../CartContext/CartContext";
import { MemoryRouter } from "react-router-dom";

describe('Cart Component', () =>{
  
    it('Delete button works', async()=>{
        const user = userEvent.setup();
        const item = {
            id: 1,
            title: 'sample',
            price: 100,
            image: 'sample.png',
            quantity: 3
        };
        
        render(
            <MemoryRouter>
            <CartProvider initialItems={[item]}>
                <Cart />                
            </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText("sample")).toBeInTheDocument();

        const button = screen.getByRole('button', {name: ""});
        await user.click(button);

        expect(screen.queryByText("sample")).not.toBeInTheDocument();
        

    })
})