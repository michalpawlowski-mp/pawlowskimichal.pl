import { web, github, info } from "../../../../assets/imports/index";

interface LinksProps {
  githubLink: string;
  websiteLink: string;
  onInfoClick?: () => void;
}

const Links: React.FC<LinksProps> = ({
  githubLink,
  websiteLink,
  onInfoClick,
}) => {
  return (
    <div className="flex justify-center w-full">
      <a
        href={githubLink}
        target="_blank"
        className="hover:bg-white/20 w-1/3 border-r-2 flex items-center justify-center"
      >
        <img
          src={github}
          alt="Link do repozytorium na githubie"
          className="w-6 h-6 m-2 invert"
        />
      </a>
      <a
        href={websiteLink}
        target="_blank"
        className="hover:bg-white/20 w-1/3 flex items-center justify-center"
      >
        <img
          src={web}
          alt="link do strony projektu"
          className="w-6 h-6 m-2 invert"
        />
      </a>
      <div
        onClick={onInfoClick}
        className="hover:bg-white/20 w-1/3 border-l-2 flex items-center justify-center cursor-pointer"
      >
        <img src={info} alt="Info" className="w-6 h-6 m-2 invert" />
      </div>
    </div>
  );
};

export default Links;
