import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/header";

import { useNavigate } from "react-router-dom";

const Apply = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const jobs = [
    {
      title: "Mobile Developer",
      company: "Apple",
      description: "We need a mobile developer",
    },
    {
      title: "Web Developer",
      company: "Meta",
      description: "We need a web developer",
    },
    {
      title: "Software Developer",
      company: "Microsoft",
      description: "We need a software developer",
    },
  ];

  return (
    <Box m="20px">
      <Header title="APPLY" subtitle="Browse Available Job Offers" />
      <Box display="grid" gap="20px">
        {jobs.map((job, index) => (
          <Box
            key={index}
            p="20px"
            backgroundColor={colors.primary[400]}
            borderRadius="8px"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
          >
            <Typography variant="h4" color={colors.greenAccent[400]}>
              {job.title}
            </Typography>
            <Typography variant="h6" color={colors.grey[100]}>
              {job.company}
            </Typography>
            <Typography variant="body1" color={colors.grey[300]} mb={2}>
              {job.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[600],
                color: colors.grey[900],
                "&:hover": {
                  backgroundColor: colors.greenAccent[500],
                },
              }}
              onClick={() => navigate("/Form")}
            >
              Apply Now
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Apply;
