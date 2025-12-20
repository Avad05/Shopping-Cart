import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem/CartItem";
import { CartProvider } from "../CartContext/CartContext";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("CartItem Component", () =>{
    it('renders product title and product price', () =>{
        const item = {
            id: 1,
            title: 'sample',
            price: 100,
            image: 'sample.png',
            quantity: 3
        };
        

        render(
            <CartProvider>
                <CartItem item={item} />
            </CartProvider>
        );

        expect(screen.getByText("sample")).toBeInTheDocument();
        expect(screen.getByText('$100')).toBeInTheDocument();
    })

    it('trash button works', async() =>{
        const user = userEvent.setup();
        const button = screen.getByRole('button', {name:'Trash2'});

        render(
             <CartProvider>
                <CartItem item={item} />
            </CartProvider>
        );

        await user.click(button);
       
              
    })
})