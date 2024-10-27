import { useParams } from "@remix-run/react";
import AnimatedCloackProject from "~/projects/animatedCloack/animatedCloack";
import NotFound from "../components/NotFound";

export default function ProjectRoute() {
  const { projectId } = useParams();

  switch (projectId) {
    case 'animatedCloack':
      return <AnimatedCloackProject />;
    default:
      return <NotFound />;
  }
}
