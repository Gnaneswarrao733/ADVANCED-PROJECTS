import './Shopping.css';
import './shoppingCart.css';
import './CheckoutForm.css';

import React from 'react';
import ShoppingCart from './ShoppingCart';
import Shopping from './Shopping';
import CheckoutForm from './CheckoutForm';


function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <Shopping />


      <h1>Checkout Form</h1>
      <CheckoutForm />
    </div>
  );
}

export default App;
