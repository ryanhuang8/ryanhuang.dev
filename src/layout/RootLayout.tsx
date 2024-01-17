import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeContext";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <ThemeProvider>
            <div>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </ThemeProvider>
    )
  }