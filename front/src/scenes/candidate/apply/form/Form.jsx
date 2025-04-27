import {
    Box,
    Button,
    TextField,
    Typography,
    useTheme,
    InputLabel,
  } from "@mui/material";
  

  import { tokens } from "../../../theme";
  import Header from "../../../components/header";
  import DragDropForm from "./Drag";
  
  const Form = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Box m="20px">
        <Header title="JOB APPLICATION" subtitle="Fill Out the Form Below" />
        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          display="grid"
          gap="20px"
          p="20px"
          backgroundColor={colors.primary[400]}
          borderRadius="8px"
          boxShadow="0 2px 8px rgba(0,0,0,0.1)"
        >
          {/* Grid for input fields */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="20px"
          >
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              placeholder="Enter First Name..."
              variant="filled"
            />
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              placeholder="Enter Last Name..."
              variant="filled"
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email..."
              variant="filled"
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              placeholder="Enter City..."
              variant="filled"
            />
            <TextField
              fullWidth
              label="Pincode"
              type="number"
              name="pincode"
              placeholder="Enter Pincode..."
              variant="filled"
            />
            <TextField
              fullWidth
              label="Date"
              type="date"
              name="date"
              defaultValue="2022-01-10"
              variant="filled"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
  
          {/* Address Field */}
          <TextField
            fullWidth
            label="Address"
            name="address"
            multiline
            rows={4}
            placeholder="Enter Address..."
            variant="filled"
          />
  
          {/* File Upload */}
          
          <DragDropForm ></DragDropForm>
          

  
          {/* Submit Button */}
          <Box textAlign="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[600],
                color: colors.grey[900],
                "&:hover": {
                  backgroundColor: colors.greenAccent[500],
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Form;
  