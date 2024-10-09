import React, { useState, useEffect } from 'react';


const Shopping = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemToRemove) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== itemToRemove.id)
        );
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return; 
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.1; 
    const discount = 5; 
    const shipping = 10; 
    const total = subtotal + subtotal * taxRate - discount + shipping;

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name} - ${item.price.toFixed(2)} x</span>
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3 className="subtotal">Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3 className="total">Total: ${total.toFixed(2)}</h3>
            <button onClick={() => addToCart({ id: Date.now(), name: 'New Item', price: 15 })}>
                Add Item
            </button>
        </div>
    );
};

export default Shopping;