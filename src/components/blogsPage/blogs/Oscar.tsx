import { useTheme } from "../../ThemeContext";
import "../../../styles/research.css";
import "../../../styles/blog.css";
import "../../../styles/start.css";
import TechBox from "../../startPage/TechBox";
import OscarImage from "../../../images/oscar.png";

function Oscar() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="container-toc">
        <div className="sidebar">
          <div className="toc-title">Table of Contents</div>
          <ul className="toc-list">
            <li>
              <a href="#section1">Introduction</a>
            </li>
            <li>
              <a href="#section2">Usage</a>
            </li>
            <li>
              <a href="#section3">Examples</a>
            </li>
            <li>
              <a href="#section4">References</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column content">
        <div className="title-intro-blog">
          <div className="title-blog">Brown Oscar Documentation</div>
        </div>
        <div className="blog-description">
          Scripts and code to run scripts/manage jobs in OSCAR
        </div>
        <div>By: Ryan Huang</div>
        <div className="technologies">
          <TechBox technology="#Computing" />
        </div>
        <img className="oscar-image" src={OscarImage} />
        <div id="section1" className="section">
          <h2 className="section-title">Introduction</h2>
          <b>Oscar</b>, or Ocean State Center for Advanced Resources, is Brown
          University's high performance computing cluster. This blog provides
          resources/documentation to navigate the tool for select tasks like
          SSH-ing and training a deep learning model.
        </div>
        <div id="section2" className="section">
          <h2 className="section-title">Usage</h2>
          {/* Add usage content here */}
        </div>
        <div id="section3" className="section">
          <h2 className="section-title">Examples</h2>
          {/* Add examples content here */}
        </div>
        <div id="section4" className="section">
          <h2 className="section-title">References</h2>
          {/* Add references content here */}
        </div>
      </div>
    </div>
  );
}

export default Oscar;
