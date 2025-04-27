import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../theme";
import { jsPDF } from "jspdf";

const Payslips = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [showPayslip, setShowPayslip] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleGenerate = () => {
    if (employeeId.trim() !== "") {
      setShowPayslip(true);
    } else {
      setShowPayslip(false);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Payslip", 90, 20);
    doc.setFontSize(12);
    doc.text(`ID: ${employeeId}`, 20, 40);
    doc.text("Name: [employee name]", 20, 50);
    doc.text("Department: [department]", 20, 60);
    doc.text("Pay Period: [month/year]", 20, 70);
    doc.text("Basic Salary: [amount]", 20, 90);
    doc.text("Bonus: [amount]", 20, 100);
    doc.text("Deductions: [amount]", 20, 110);
    doc.setFont("Helvetica", "bold");
    doc.text("Net Pay: [amount]", 20, 130);

    doc.save(`Payslip_${employeeId}.pdf`);
  };

  return (
    <Box m={4}>
      <Typography variant="h4" mb={2}>
        Generate Payslip
      </Typography>

      <Box display="flex" alignItems="center" gap={2} sx={{ maxWidth: 600, mb: 3 }}>
        <TextField
          label="Enter Employee ID"
          variant="outlined"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6f75e9" } }}
          onClick={handleGenerate}
        >
          Generate
        </Button>
      </Box>

      {showPayslip && (
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" mb={2}>
            Payslip
          </Typography>
          <Divider sx={{ backgroundColor: colors.grey[300], mb: 2 }} />
          <Typography><strong>ID:</strong> {employeeId}</Typography>
          <Typography><strong>Name:</strong> [employee name]</Typography>
          <Typography><strong>Department:</strong> [department]</Typography>
          <Typography><strong>Pay Period:</strong> [month/year]</Typography>
          <Divider sx={{ backgroundColor: colors.grey[300], my: 2 }} />
          <Typography><strong>Basic Salary:</strong> [amount]</Typography>
          <Typography><strong>Bonus:</strong> [amount]</Typography>
          <Typography><strong>Deductions:</strong> [amount]</Typography>
          <Divider sx={{ backgroundColor: colors.grey[300], my: 2 }} />
          <Typography variant="h6"><strong>Net Pay:</strong> [amount]</Typography>

          <Button
            variant="outlined"
            onClick={handleDownload}
            sx={{
              mt: 3,
              color: "#8289ff",
              borderColor: "#8289ff",
              "&:hover": {
                backgroundColor: "#8289ff22",
                borderColor: "#8289ff",
              },
            }}
          >
            Download Payslip (PDF)
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Payslips;
