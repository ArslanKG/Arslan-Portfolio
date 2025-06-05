import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReflectionProject from "../../app/projects/ReflectionProject/ReflectionProject";
import NotFound from "../../app/components/NotFound";

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