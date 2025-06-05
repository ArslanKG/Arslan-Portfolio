import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import ReflectionProject, { links as reflectionLinks } from "../projects/ReflectionProject/ReflectionProject";
import { useEffect } from "react";

export const links = () => {
  return [...reflectionLinks()];
};

export default function ProjectRoute() {
  const { projectId } = useParams();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.height = "";
        document.body.style.height = "";
      }
    };
  }, []);

  switch (projectId) {
    case 'reflectionProject':
      return <ReflectionProject />;
    default:
      return <NotFound />;
  }
}
