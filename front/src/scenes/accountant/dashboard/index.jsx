import { Box, Typography, Card, Grid, LinearProgress, Divider, Paper } from "@mui/material";
import Header from "../../../components/header";

const Dashboard = () => {
  return (
    <Box
      m="20px"
      sx={{
        background: "#f4f5fd", // Light background color for the entire container
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centering the content horizontally
        justifyContent: "center", // Centering the content vertically
        padding: "30px 10px", // Adjusting padding to ensure it doesn't touch the edges
        background: "transparent"
      }}
    >

     

      {/* Dashboard Summary Cards */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: "25px",
              background: "linear-gradient(135deg, #4caf50, #81c784)",
              color: "white",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">Sales</Typography>
            <Typography variant="h4" fontWeight="bold">1,200</Typography>
            <LinearProgress variant="determinate" value={75} sx={{ mt: 2, backgroundColor: "#fff" }} />
            <Typography variant="body2" mt="5px" color="white">
              75% of sales goal
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: "25px",
              background: "linear-gradient(135deg, #ff9800, #ffb74d)",
              color: "white",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">Projects</Typography>
            <Typography variant="h4" fontWeight="bold">45</Typography>
            <LinearProgress variant="determinate" value={50} sx={{ mt: 2, backgroundColor: "#fff" }} />
            <Typography variant="body2" mt="5px" color="white">
              50% of projects completed
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: "25px",
              background: "linear-gradient(135deg, #f44336, #ef5350)",
              color: "white",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">Tickets</Typography>
            <Typography variant="h4" fontWeight="bold">30</Typography>
            <LinearProgress variant="determinate" value={30} sx={{ mt: 2, backgroundColor: "#fff" }} />
            <Typography variant="body2" mt="5px" color="white">
              30% tickets resolved
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: "25px",
              background: "linear-gradient(135deg, #2196f3, #64b5f6)",
              color: "white",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">Users</Typography>
            <Typography variant="h4" fontWeight="bold">1,500</Typography>
            <LinearProgress variant="determinate" value={85} sx={{ mt: 2, backgroundColor: "#fff" }} />
            <Typography variant="body2" mt="5px" color="white">
              85% user engagement
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Statistics Section */}
      <Box mt="40px" width="100%">
        <Typography variant="h5" fontWeight="bold" mb="20px" align="center" color="#b8b8b8">
          Statistics Overview
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: "25px",
                background: "#e3f2fd",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#8183b6">Revenue</Typography>
              <Typography variant="h4" fontWeight="bold"color="#8183b6">$1,200,000</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="#8183b6">Last month's revenue</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: "25px",
                background: "#e8f5e9",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#55685f">Employee Satisfaction</Typography>
              <Typography variant="h4" fontWeight="bold" color="#55685f">89%</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="#55685f">Survey results</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: "25px",
                background: "#fff3e0",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="#bc9b6c">Customer Satisfaction</Typography>
              <Typography variant="h4" fontWeight="bold" color="#bc9b6c">93%</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="#bc9b6c">Customer feedback rating</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Notifications Section */}
      <Box mt="40px" width="100%">
        <Typography variant="h5" fontWeight="bold" mb="20px" align="center" color="#b8b8b8">
          Notifications
        </Typography>
        <Paper
          sx={{
            background: "#e3f2fd", // Light blue background for notifications
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="body1" mb="15px" color="#8183b6" fontWeight="bold">
            📩 New update available! Version 1.2.3
          </Typography>
          <Typography variant="body1" mb="15px" color="#8183b6" fontWeight="bold">
            💬 Bouba commented on your task
          </Typography>
          <Typography variant="body1" color="#8183b6" fontWeight="bold">
            🚨 Security update released! Please update ASAP
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
