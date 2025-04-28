import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { tokens } from "../../../theme";
import Header from "../../../components/header";


const mockLeaveRequests = [
  {
    id: 1,
    name: "haroun",
    phone: "92564854",
    email: "harounrg@gmail.com",  
    leaveType: "Vacation",
    daysRequested: 3,
    daysRemaining: 12,
    status: "Pending",
    date: "2025-04-01",
  },
  {
    id: 2,
    name: "maram",
    phone: "22854958",
    email: "marambg@gmail.com",
    leaveType: "Sick Leave",
    daysRequested: 2,
    daysRemaining: 8,
    status: "Pending",
    date: "2025-04-03",
  },
];

const Requests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(mockLeaveRequests);

  const handleDecision = (id, decision) => {
    const updated = rows.map((row) =>
      row.id === id ? { ...row, status: decision } : row
    );
    setRows(updated);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "leaveType", headerName: "Leave Type", flex: 1 },
    {
      field: "daysRequested",
      headerName: "Requested",
      flex: 0.5,
      type: "number",
    },
    {
      field: "daysRemaining",
      headerName: "Remaining",
      flex: 0.5,
      type: "number",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Typography
          color={
            params.value === "Approved"
              ? colors.greenAccent[400]
              : params.value === "Rejected"
              ? "red"
              : colors.grey[100]
          }
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => handleDecision(params.row.id, "Approved")}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => handleDecision(params.row.id, "Rejected")}
          >
            Reject
          </Button>
        </Box>
      ),
    },
    { field: "date", headerName: "Request Date", flex: 1 },
  ];
  const Header = ({ title, subtitle, subtitleSx = {} }) => {
    return (
      <Box mb="20px">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h5" sx={{ color: "#6d74e8" }}>
          {subtitle}
        </Typography>
      </Box>
    );
  };
  
  return (
    <Box m="20px">
      <Header title="LEAVE REQUESTS" subtitle="Approve or Reject Leave Applications" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#8b8fea",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#6d74e8",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            parebackgroundColor: "transparent",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#6d74e8",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default Requests;
