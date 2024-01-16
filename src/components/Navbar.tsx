import React from 'react';
import '../styles/navbar.css'
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const handleThemeToggle = () => {
        // You can implement logic to update your application's theme
        console.log('Theme toggled to:', theme);
    };
    
    return (
        <nav className={`horizontal-navbar ${theme}`}>
            <div className="center-nav">
                <div className="nav-tabs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/research">Research</a></li>
                    {/* <li><a href="/experience">Experience</a></li> */}
                </ul>
                </div>
                <div className="nav-buttons">
                    <ThemeToggle onToggle={handleThemeToggle}/>
                </div>
            </div>
        </nav>
      );
}

export default Navbar;
