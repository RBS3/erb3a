import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DragDropForm = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        border: '2px dashed',
        borderColor: dragActive ? 'primary.main' : 'grey.100',
        backgroundColor: dragActive ? 'primary.light' : 'background',
        p: 4,
        borderRadius: 3,
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'grey.100',
        },
      }}
      component="label"
    >
      <CloudUploadIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
      <Typography variant="subtitle1" color="textSecondary">
        {file ? (
          <span style={{ color: 'green' }}>{file.name}</span>
        ) : (
          <>
            <strong style={{ fontSize: dragActive ? 'primary.light' : 'darkblue' }}>Click to upload or drag & drop your resume here</strong>
            <br />
            <span style={{ fontSize: '0.85rem', color: '#888' }}>
              (PDF, DOCX — Max 10MB)
            </span>
          </>
        )}
      </Typography>
      <input type="file" onChange={handleFileChange} hidden />
    </Box>
  );
};

export default DragDropForm;
