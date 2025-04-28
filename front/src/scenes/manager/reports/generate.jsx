import React, { useState } from "react";
import { Box, Button, Typography, useTheme, Collapse } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { tokens } from "../../../theme"; // Ensure that your theme is correctly imported
import Header from "./header"; // Assuming Header component exists

const GenerateReport = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Toggle file upload form visibility
  const toggleForm = () => setOpen(!open);

  // Drag and drop event handlers
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
      <Header title="Generate Report" />
      <Box display="grid" gap="20px">
        <Box
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
            Upload Report
          </Typography>
          <Typography variant="body1" color={colors.grey[300]} mb={2}>
            Upload your report file here.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8289ff",
              "&:hover": { backgroundColor: "#6d74e8" },
              mb: 2,
            }}
            onClick={toggleForm}
          >
            {open ? "Cancel" : "Upload Report"}
          </Button>

          <Collapse in={open}>
            <Box
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              sx={{
                border: "2px dashed",
                borderColor: dragActive ? "primary.main" : "grey.400",
                backgroundColor: dragActive ? "grey.200" : "background.paper",
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
                  backgroundColor: "grey.100",
                  "& svg": {
                    color: "grey",
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
                    <strong>Drag & drop your report here</strong>
                    <br />
                    <span style={{ fontSize: "0.75rem", color: "#888" }}>
                      (PDF, DOCX — Max 10MB)
                    </span>
                  </>
                )}
              </Typography>
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".pdf, .docx"
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert("File uploaded successfully!")}
            >
              Submit Report
            </Button>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

export default GenerateReport;
