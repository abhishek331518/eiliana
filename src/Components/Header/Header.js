import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";


function Header(props) {
  return (
    // <AppBar position="static">
    <div>
         <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/Howitworks">
              How it Works
            </NavLink>
            <NavLink activeClassName="active" to="/Projectreferral">
              Project Referral
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <NavLink activeClassName="active" to="/Signup">
              Sign Up
            </NavLink>
          </div>
    </div>
    
    //   </AppBar>
  )
}

export default Header
