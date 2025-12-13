import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Layout from './components/Layout/Layout.jsx'
import { CartProvider } from './CartContext/CartContext.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children:[
        {index: true, element:<Home />},
        {path:"shop", element:<Shop />},
        {path:"cart", element:<Cart />},
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
