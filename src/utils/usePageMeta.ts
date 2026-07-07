import { useEffect } from "react";

const DEFAULT_TITLE = "Ryan Huang";
const DEFAULT_DESCRIPTION =
  "Ryan Huang — Computer Science student at Brown University building software and computer vision projects.";

export function usePageMeta(title: string = DEFAULT_TITLE, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title === DEFAULT_TITLE ? title : `${title} | Ryan Huang`;

    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
