import React, { useState } from 'react';

const ShoppingCart = () => {
  
  const [cart, setCart] = useState([]);

  
  const product = { id: 1, name: "Product A", price: 10 };

  
  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  
  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={() => addToCart(product)}>Add Product A to Cart</button>
    </div>
  );
};

export default ShoppingCart;