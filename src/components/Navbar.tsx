import '../styles/navbar.css'
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const { theme, } = useTheme();
    const handleThemeToggle = () => {
        // You can implement logic to update your application's theme
        console.log('Theme toggled to:', theme);
    };
    
    return (
        <nav className={`horizontal-navbar ${theme}`}>
            <div className="center-nav">
                <div className="nav-tabs">
                <ul>
                    <li><a href="/">Ryan Huang</a></li>
                    <li><a href="/research" className="new-page">Research</a></li>
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
