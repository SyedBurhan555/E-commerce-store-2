import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterProductProvider } from './Context/filterProductContext';
import { AppProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterProductProvider>
      <CartProvider>
         <App />
         </CartProvider>
         </FilterProductProvider>
  </AppProvider>
);
