import { useParams } from "@remix-run/react";
import AnimatedClockProject, { links as animatedClockLinks } from "../projects/animatedClock/animatedClock";
import NotFound from "../components/NotFound";

export const links = () => {
  return animatedClockLinks();
};

export default function ProjectRoute() {
  const { projectId } = useParams();

  switch (projectId) {
    case 'animatedClock':
      return <AnimatedClockProject />;
    default:
      return <NotFound />;
  }
}
