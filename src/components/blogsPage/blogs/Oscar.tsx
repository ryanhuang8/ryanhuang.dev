import { useTheme } from "../../ThemeContext";
import "../../../styles/research.css";
import "../../../styles/blog.css";
import "../../../styles/start.css";

function Oscar() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <div className="title-intro-blog">
          <div className="title-blog">Brown Oscar Documentation</div>
        </div>
      </div>
    </div>
  );
}

export default Oscar;
