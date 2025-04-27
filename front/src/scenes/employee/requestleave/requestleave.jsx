import React from 'react';
import { Typography, Button, TextField, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const RequestLeave = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 3, 
        backgroundColor: 'transparent', // Light background color
        borderRadius: 2, 
        boxShadow: 3, 
        width: '100%', 
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Request Leave
      </Typography>
      
      {/* Leave Type - Select */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="leave-type-label">Leave Type</InputLabel>
        <Select
          labelId="leave-type-label"
          label="Leave Type"
          defaultValue=""
        >
          <MenuItem value="sick">Sick Leave</MenuItem>
          <MenuItem value="vacation">Vacation</MenuItem>
          <MenuItem value="personal">Personal Leave</MenuItem>
        </Select>
      </FormControl>

      {/* Start Date */}
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* End Date */}
      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        label="Reason"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6d74e8" } }}>
        Submit Request
      </Button>
    </Box>
  );
};

export default RequestLeave;
