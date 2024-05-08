import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function NavBar() {
  const [redirect, setRedirect] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem("Bearer Token")
    setRedirect(true)
  }
  if (redirect) {
    return <Navigate to="/" />;
  }
  
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <IconButton color="inherit" size="large" onClick = {handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
