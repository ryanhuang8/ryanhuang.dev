import { useTheme } from "../components/ThemeContext";
import BlogsIntro from "../components/blogsPage/BlogsIntro";
import { usePageMeta } from "../utils/usePageMeta";

function Blog() {
  const { theme } = useTheme();
  usePageMeta("Blog", "Technical blog posts and documentation by Ryan Huang.");
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <BlogsIntro />
        <div className={`blog-empty ${theme}`}>
          <div className="blog-empty-title">Nothing published yet</div>
          <div className="blog-empty-body">
            I'm working on my first post. In the meantime, you can find my code
            on{" "}
            <a
              href="https://github.com/ryanhuang8"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            or take a look at my{" "}
            <a href="/research">research</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
