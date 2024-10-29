import { useParams } from "@remix-run/react";
import AnimatedClockProject, { links as animatedClockLinks } from "../projects/animatedClock/animatedClock";
import NotFound from "../components/NotFound";
import ReflectionProject, { links as reflectionLinks } from "../projects/ReflectionProject/ReflectionProject";
import { useEffect } from "react";

export const links = () => {
  return [...animatedClockLinks(), ...reflectionLinks()];
};

export default function ProjectRoute() {
  const { projectId } = useParams();

  // Client-side only rendering için
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
    case 'animatedClock':
      return <AnimatedClockProject />;
    case 'reflectionProject':
      return <ReflectionProject />;
    default:
      return <NotFound />;
  }
}
