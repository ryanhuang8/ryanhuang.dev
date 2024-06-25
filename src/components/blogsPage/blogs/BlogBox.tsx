import { useNavigate } from "react-router-dom";
import "../../../styles/blog.css";
import { useTheme } from "../../ThemeContext";
import TechBox from "../../startPage/TechBox";
import "../../../styles/start.css";

interface BlogBoxProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string;
}

const BlogBox: React.FC<BlogBoxProps> = ({
  title,
  date,
  tags,
  description,
  link
}) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const techBoxes = () => {
    return tags.map((tag, index) => <TechBox key={index} technology={tag} />);
  };

  const handleOnClick = () => {
    navigate("/blogs/" + link);
  };

  return (
    <div
      className={`blog-box ${theme}`}
      onClick={handleOnClick}
      style={{ cursor: "pointer" }}
    >
      <div className="project-title-blog">{title}</div>
      <div className="blog-date">{description}</div>
      <div className="blog-date">📆 {date}</div>
      <div className="technologies">{techBoxes()}</div>
    </div>
  );
};

export default BlogBox;
