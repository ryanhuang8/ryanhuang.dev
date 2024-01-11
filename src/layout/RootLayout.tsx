import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeContext";

export default function Root() {
    return (
        <ThemeProvider>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </ThemeProvider>
    )
  }