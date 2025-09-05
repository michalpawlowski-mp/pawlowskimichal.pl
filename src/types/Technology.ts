export default interface TechnologiesProps {
  technologies: Technology[];
  devTools: Technology[];
}

interface Technology {
  src: string;
  name: string;
  invert?: boolean;
}
