import React, { useState } from 'react';
import { Button, Modal, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    { id: 3, name: 'Item 3', price: 20, quantity: 3 },
  ]);
  const [open, setOpen] = useState(false);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Number(quantity) } : item));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>View Cart</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, width: '400px', margin: 'auto', mt: '20%' }}>
          <Typography variant="h6">Cart Summary</Typography>
          {cart.map(item => (
            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <Typography>{item.name}</Typography>
              <Typography>${item.price}</Typography>
              <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} style={{ width: '40px' }} />
              <Typography>${item.price * item.quantity}</Typography>
              <IconButton onClick={() => handleRemove(item.id)}><DeleteIcon /></IconButton>
            </Box>
          ))}
          <Typography variant="h6">Total: ${totalCost}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
