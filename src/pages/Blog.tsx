import { useTheme } from "../components/ThemeContext";
import BlogsIntro from "../components/blogsPage/BlogsIntro";
// import Template from "../components/blogsPage/blogs/Template";

function Blog() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <BlogsIntro />
        Currently in-progress...
        {/* <Template /> */}
      </div>
    </div>
  );
}

export default Blog;
