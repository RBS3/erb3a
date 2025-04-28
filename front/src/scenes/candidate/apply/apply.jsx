import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Collapse,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { tokens } from '../../../theme';
import Header from "./header";



const Apply = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openIndex, setOpenIndex] = useState(null);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const jobs = [
    {
      title: "HR Specialist",
      description: "Requires some HR experience or specialization.",
    },
    {
      title: "Benefits Coordinator",
      description: "Managing and administrating employee benefit programs.",
    },
    {
      title: "Training and Development Coordinator",
      description: "Organizes training sessions and tracks employee development.",
    },
  ];

  const toggleForm = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setFile(null); // Reset file when switching dropdowns
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
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
    <Box m="20px">
      <Header title="Browse Available Job Offers" />
      <Box display="grid" gap="20px">
        {jobs.map((job, index) => (
          <Box
            key={index}
            p="20px"
            bgcolor={colors.primary[400]}
            borderRadius="8px"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            sx={{ position: "relative" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#8289ff",
                mb: 1,
                cursor: "pointer",
                "&:hover": { color: "#6d74e8" },
              }}
            >
              {job.title}
            </Typography>
            <Typography variant="body1" color={colors.grey[300]} mb={2}>
              {job.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8289ff",
                "&:hover": { backgroundColor: "#6d74e8" },
                mb: 2,
              }}
              onClick={() => toggleForm(index)}
            >
              {openIndex === index ? "Cancel" : "Apply Now"}
            </Button>

            <Collapse in={openIndex === index}>
            <Box
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  sx={{
    border: "2px dashed",
    borderColor: dragActive ? "primary.main" : "grey.400",
    backgroundColor: dragActive ? "grey.200" : "background.paper", // changed to grey on drag
    p: 2,
    borderRadius: 2,
    textAlign: "center",
    transition: "all 0.3s ease",
    mb: 2,
    cursor: "pointer",
    maxHeight: "250px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "grey.100", // grey on hover
      "& svg": {
        color: "grey", // icon turns grey on hover
      },
    },
  }}
  component="label"
>
  <CloudUploadIcon sx={{ mb: 1, color: "#888" }} />
  <Typography variant="subtitle2" color="#8289ff" sx={{ fontSize: "0.9rem" }}>
    {file ? (
      <span style={{ color: "green" }}>{file.name}</span>
    ) : (
      <>
        <strong>Drag & drop your CV here</strong>
        <br />
        <span style={{ fontSize: "0.75rem", color: "#888" }}>
          (PDF, DOCX — Max 10MB)
        </span>
      </>
    )}
  </Typography>
</Box>


              <TextField fullWidth label="Full Name" margin="normal" size="small" />
              <TextField fullWidth label="Email" margin="normal" size="small" />
              <TextField
                fullWidth
                label="Message (optional)"
                multiline
                rows={3} 
                margin="normal"
                size="small"
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }} size="medium">
                Submit Application
              </Button>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Apply;
