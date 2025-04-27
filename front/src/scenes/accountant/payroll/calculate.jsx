import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme"; // Go up two levels to reach `src/`


const Calculate = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [showCalculation, setShowCalculation] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFetchDetails = () => {
    if (employeeId.trim() !== "") {
      setShowCalculation(true);
    } else {
      setShowCalculation(false);
    }
  };

  return (
    <Box m={4}>
      <Typography variant="h4" mb={2}>
        Calculate Salary
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
          onClick={handleFetchDetails}
          sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6d74e8" }, whiteSpace: "nowrap" }}
        >
          Details
        </Button>
      </Box>

      {showCalculation && (
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: "8px",
            p: 3,
            color: colors.grey[100],
            maxWidth: 600,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Salary Information
          </Typography>
          <Divider sx={{ backgroundColor: colors.grey[300], mb: 2 }} />

          <Typography><strong>ID:</strong> [employee ID]</Typography>
          <Typography><strong>Name:</strong> [employee name]</Typography>
          <Typography><strong>Days Attended:</strong> [value]</Typography>
          <Typography><strong>Bonuses:</strong> [value]</Typography>
          <Typography><strong>Deductions:</strong> [value]</Typography>

          <Divider sx={{ backgroundColor: colors.grey[300], my: 2 }} />

          <Button
            variant="contained"
            sx={{ backgroundColor: "#8289ff", "&:hover": { backgroundColor: "#6d74e8" } }}
          >
            Calculate Salary
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Calculate;
