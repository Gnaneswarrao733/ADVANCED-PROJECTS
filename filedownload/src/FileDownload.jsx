

import React from 'react';

const FileDownload = () => {
  const handleDownload = () => {
    const fileUrl = 'https://example.com/path/to/your/file.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default FileDownload;
