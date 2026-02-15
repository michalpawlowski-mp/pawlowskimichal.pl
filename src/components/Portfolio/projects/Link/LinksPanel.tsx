import { web, github } from "../../../../assets/imports/index";

interface LinksPanelProps {
  githubLink: string;
  websiteLink: string;
}

const LinksPanel: React.FC<LinksPanelProps> = ({ githubLink, websiteLink }) => {
  return (
    <div className="flex">
      <a
        target="_blank"
        href={githubLink}
        className="flex items-center mt-4 mx-1 py-2  w-1/2 bg-black/50 text-white rounded-full"
      >
        <img
          src={github}
          alt="zobacz kod projektu"
          className="m-auto invert w-[25px]"
        />
        <p className="m-auto ml-0">Zobacz kod</p>
      </a>
      <a
        target="_blank"
        href={websiteLink}
        className=" flex items-center mt-4 mx-1 py-2  w-1/2 bg-black/50 text-white rounded-full"
      >
        <img
          src={web}
          alt="zobacz projektu w praktyce"
          className="m-auto invert w-[25px]"
        />
        <p className="m-auto ml-0">Zobacz projekt</p>
      </a>
    </div>
  );
};

export default LinksPanel;
