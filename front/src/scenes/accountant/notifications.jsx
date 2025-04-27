import { Box, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Notifications = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <NotificationsNoneOutlinedIcon sx={{ fontSize: "80px", color: "gray", mb: 2 }} />
      <Typography variant="h4" color="textSecondary">
        No Notifications
      </Typography>
    </Box>
  );
};

export default Notifications;
