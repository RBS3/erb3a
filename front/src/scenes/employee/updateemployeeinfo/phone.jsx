import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === '') {
      setError('Please enter your password to confirm.');
      return;
    }

    console.log('Phone Number:', phoneNumber);
    console.log('Password entered:', password);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" mb={3}>
        <IconButton onClick={handleGoBack} color="primary" sx={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '50%' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={2}>
          Change Phone Number
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Phone Number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Enter Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6d74e8" } }}>
          Update Phone Number
        </Button>
      </form>
    </Box>
  );
};

export default Phone;
