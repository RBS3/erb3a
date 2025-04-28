// src/components/Sidebar.jsx

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import GradingIcon from '@mui/icons-material/Grading';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PaymentsIcon from "@mui/icons-material/Payments";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ role }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const renderMenuItems = () => {
    switch (role) {
      case "candidate":
        return (
          <>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Job Application
            </Typography>
            <Item title="Apply" to="/apply" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item title="Update Information" to="/update" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </>
        );
      case "employee":
        return (
          <>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item title="Update Information" to="/updateemployeeinfo" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Request Leaves" to="/requestleave" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </>
        );
      case "recruiter":
        return (
          <>
            <Item title="Post Jobs" to="/postjobs" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Review Candidates" to="/review" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </>
        );
      case "manager":
        return (
          <>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item title="Update information" to="/updateinfo" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Reports" to="/reports" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Leave Requests" to="/invoices" icon={<GradingIcon />} selected={selected} setSelected={setSelected} />
           
            <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </>
        );
      case "accountant":
        return (
          <>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px", display: isCollapsed ? 'none' : 'block' }}>
              Data
            </Typography>
            <Item title="Update Information" to="/update" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px", display: isCollapsed ? 'none' : 'block' }}>
              Payroll Management
            </Typography>
            <Item title="Calculate Salary" to="/payroll/calculate" icon={<CalculateOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Payslips" to="/payroll/payslips" icon={<RequestPageIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Maintain" to="/payroll/maintain" icon={<PaymentsIcon />} selected={selected} setSelected={setSelected} />
          </>
        );
      default:
        return <Typography color="red">Unknown Role</Typography>;
    }
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          borderRadius: "0% !important",
        },
        "& .pro-icon": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  {role?.toUpperCase() || "USER"}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="/assets/user.jpg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color="#6d74e8" fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  {role === "role" ? "name" : "name" }
                </Typography>
                <Typography variant="h5" color="#d1d1d1">
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>{renderMenuItems()}</Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
