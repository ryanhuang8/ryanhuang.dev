import "../../../styles/blog.css";
import { useTheme } from "../../ThemeContext";
import TechBox from "../../startPage/TechBox";
import "../../../styles/start.css";

interface BlogBoxProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const BlogBox: React.FC<BlogBoxProps> = ({ title, date, tags, description }) => {
  const { theme } = useTheme();

  const techBoxes = () => {
    return tags.map((tag, index) => <TechBox key={index} technology={tag} />);
  };

  return (
    <div className={`blog-box ${theme}`}>
      <div className="project-title-blog">{title}</div>
      <div className="blog-date">{description}</div>
      <div className="blog-date">📆 {date}</div>
      <div className="technologies">{techBoxes()}</div>
    </div>
  );
};

export default BlogBox;
