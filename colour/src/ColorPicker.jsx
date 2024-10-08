import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={handleChange} 
      />
      <div style={{ marginTop: '20px', width: '100px', height: '100px', backgroundColor: color }}>
        Selected Color
      </div>
    </div>
  );
};

export default ColorPicker;
