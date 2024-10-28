import { useParams } from "@remix-run/react";
import AnimatedCloackProject, { links as animatedCloackLinks } from "~/projects/animatedCloack/AnimatedCloack";
import NotFound from "../components/NotFound";

export const links = () => {
  return animatedCloackLinks();
};

export default function ProjectRoute() {
  const { projectId } = useParams();

  switch (projectId) {
    case 'animatedCloack':
      return <AnimatedCloackProject />;
    default:
      return <NotFound />;
  }
}
