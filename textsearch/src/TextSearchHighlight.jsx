import React, { useState } from 'react';

const TextSearchHighlight = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text Search and Highlight</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search text..."
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {getHighlightedText(text, searchTerm)}
      </div>
    </div>
  );
};

export default TextSearchHighlight;
