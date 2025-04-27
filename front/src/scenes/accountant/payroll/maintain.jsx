import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Maintain = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [salary, setSalary] = useState('');
  const [taxDeduction, setTaxDeduction] = useState('');
  const [record, setRecord] = useState(null);

  const handleSaveRecord = () => {
    const newRecord = {
      employeeId,
      salary,
      taxDeduction,
    };

    // Save record (in a real scenario, this would be sent to a database)
    setRecord(newRecord);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Maintain Salary and Tax Records
      </Typography>

      <TextField
        label="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Salary ($)"
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Tax Deduction ($)"
        type="number"
        value={taxDeduction}
        onChange={(e) => setTaxDeduction(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSaveRecord}
        sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6d74e8" } }}
      >
        Save Record
      </Button>

      {record && (
        <Box mt={3}>
          <Typography variant="h6">Saved Record:</Typography>
          <Typography>Employee ID: {record.employeeId}</Typography>
          <Typography>Salary: ${record.salary}</Typography>
          <Typography>Tax Deduction: ${record.taxDeduction}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Maintain;
