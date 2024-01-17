import "../styles/themetoggle.css"
import { useTheme } from './ThemeContext';
import { FaRegMoon, FaRegSun } from "react-icons/fa";

interface ThemeToggleProps {
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onToggle();
  };

  return (
    <button className={`theme-toggle ${theme}`} onClick={handleToggle}>
      {theme === 'light' ? <FaRegMoon /> : <FaRegSun size={28} />}
    </button>
  );
}

export default ThemeToggle;
