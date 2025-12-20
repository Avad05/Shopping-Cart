import { render,screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../pages/Home";


describe('Home Component', () =>{
    it('should have Featured Products', () =>{
         render(<Home />)
         expect(screen.getByText('Featured Products')).toBeInTheDocument();

    })

    it('should have banner', () =>{
        render(<Home />)
        expect(screen.getByAltText('supplement stack')).toBeInTheDocument();
    })
})