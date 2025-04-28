import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/topbar";
import Sidebar from "./global/sidebar"; // Sidebar import
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useEffect } from "react";
// Login
import Login from "./scenes/login/login";
// Accountant
import AccountantDashboard from "./scenes/accountant/dashboard";
import Calculate from "./scenes/accountant/payroll/calculate.jsx";
import Maintain from "./scenes/accountant/payroll/maintain.jsx";
import Payslips from "./scenes/accountant/payroll/payslips.jsx";

// Correct import paths for individual components inside Updateinfo folder
import Address from "./scenes/accountant/updateinfo/address.jsx";
import Email from "./scenes/accountant/updateinfo/email.jsx";
import Name from "./scenes/accountant/updateinfo/name.jsx";
import Password from "./scenes/accountant/updateinfo/password.jsx";
import Phone from "./scenes/accountant/updateinfo/phone.jsx";
import Updateinfo from "./scenes/accountant/updateinfo/updateinfo.jsx";  // Corrected path

// Candidate
import Apply from "./scenes/candidate/apply/apply.jsx";
import Dashboard from "./scenes/candidate/dashboard/index.jsx";
import changeAddress from "./scenes/candidate/update/address.jsx";
import changeEmail from "./scenes/candidate/update/email.jsx";
import changeName from "./scenes/candidate/update/name.jsx";
import changePassword from "./scenes/candidate/update/password.jsx";
import changePhone from "./scenes/candidate/update/phone.jsx";
import Updateall from "./scenes/candidate/update/updateinfo.jsx";
import Header from "./scenes/candidate/apply/header.jsx";
// Employee
import EmployeeDashboard from "./scenes/employee/dashboard";
import RequestLeave from "./scenes/employee/requestleave/requestleave";
import Update from "./scenes/employee/updateemployeeinfo/updateinfo";  // Corrected import path

// Manager
import Contacts from "./scenes/manager/contacts";
import ManagerDashboard from "./scenes/manager/dashboard";
import Form from "./scenes/manager/form";
import Requests from "./scenes/manager/invoices";
import Team from "./scenes/manager/team";
import ReportPage from "./scenes/manager/reports/generate"; 
import Addressm from "./scenes/manager/updateinfo/address.jsx";
import Emailm from "./scenes/manager/updateinfo/email.jsx";
import ChangeNamem from "./scenes/manager/updateinfo/name.jsx";
import Passwordm from "./scenes/manager/updateinfo/password.jsx";
import Phonem from "./scenes/manager/updateinfo/phone.jsx";
import Updateinfom from "./scenes/manager/updateinfo/updateinfo.jsx";
// Ensure this path is correct


// Removed ManagerApproveLeaves since it's not needed for now

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(() => {
    // Apply background color to the body based on the theme mode
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);
  // Simulated user role (replace with real auth state or context)
  const userRole = localStorage.getItem("role") || "manager"; // Example

  const renderRoutes = () => {
    switch (userRole) {
      case "accountant":
        return (
          <>
            <Route path="/" element={<AccountantDashboard />} />
            {/* Routes for individual components */}
            <Route path="/update" element={<Updateinfo />} />
            <Route path="/update/address" element={<Address />} />
            <Route path="/update/email" element={<Email />} />
            <Route path="/update/name" element={<Name />} />
            <Route path="/update/password" element={<Password />} />
            <Route path="/update/phone" element={<Phone />} />
            <Route path="/payroll/calculate" element={<Calculate />} />
            <Route path="/payroll/payslips" element={<Payslips />} />
            <Route path="/payroll/maintain" element={<Maintain />} />
          </>
        );
      case "candidate":
        return (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/update" element={<Update />} />
            <Route path="/update/address" element={<Address />} />
            <Route path="/update/email" element={<Email />} />
            <Route path="/update/name" element={<Name />} />
            <Route path="/update/password" element={<Password />} />
            <Route path="/update/phone" element={<Phone />} />
          </>
        );
      case "employee":
        return (
          <>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/requestleave" element={<RequestLeave />} />
            <Route path="/updateemployeeinfo" element={<Update />} />
          </>
        );
      case "recruiter":
        return (
          <>
            {/* Placeholder route for recruiter */}
            <Route path="/" element={<div>Recruiter Dashboard Placeholder</div>} />
          </>
        );
      case "manager":
        return (
          <>
            <Route path="/" element={<ManagerDashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/form" element={<Form/>} />
            <Route path="/invoices" element={<Requests/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/reports" element={<ReportPage/>} />
            <Route path="/updateinfo" element={<Updateinfo />} />
            <Route path="/update/address" element={<Addressm />} />
            <Route path="update/email" element={<Emailm />} />
            <Route path="update/name" element={<ChangeNamem />} />
            <Route path="update/password" element={<Passwordm />} />
            <Route path="update/phone" element={<Phonem />} />
          </>
        );
      default:
        return <Route path="*" element={<div>Unknown Role</div>} />;
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} role={userRole} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>{renderRoutes()}</Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;