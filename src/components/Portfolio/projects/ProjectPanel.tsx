import { useRef } from "react";
import { ProjectsDataProps } from "../../../types/ProjectsProps";
import Technologies from "./Technologies/Technologies";
import LinksPanel from "./Link/LinksPanel";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { chevron } from "../../../assets/imports";

interface Props {
  project: ProjectsDataProps;
  toggleVisibility: () => void;
}

const ProjectPanel: React.FC<Props> = ({ project, toggleVisibility }) => {
  useBodyScrollLock(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  const hasMultipleImages = project.images.length > 1;

  const scrollGallery = (direction: "left" | "right") => {
    const el = galleryRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-40 backdrop-blur-sm p-4">
      <div className="bg-[#1a1d27] border border-white/10 p-4 rounded-xl max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
        <div className="flex items-center mb-4">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-xl font-medium text-white m-auto">{project.title}</h4>
        </div>

        <div className="text-left mb-3">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-2">
            Funkcjonalności
          </p>
          {project.features.map((feature, i) => (
            <p key={i} className="text-sm text-slate-300 mt-1 flex items-center gap-2">
              <span className="text-green-500">✓</span> {feature}
            </p>
          ))}
        </div>

        <div className="text-left mb-3">
          <p className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-2">
            Opis
          </p>
          {project.description.map((desc, i) => (
            <p key={i} className="text-sm text-slate-300 mt-2 leading-relaxed">
              {desc}
            </p>
          ))}
        </div>

        <div className="relative">
          <div
            ref={galleryRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-style gap-3"
          >
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="rounded-xl shrink-0 w-full snap-center object-cover"
                alt={`Project numer ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={() => scrollGallery("left")}
                aria-label="Poprzednie zdjęcie"
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-2 transition-colors"
              >
                <img src={chevron} alt="" className="w-4 h-4 invert" />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery("right")}
                aria-label="Następne zdjęcie"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full p-2 rotate-180 transition-colors"
              >
                <img src={chevron} alt="" className="w-4 h-4 invert" />
              </button>
            </>
          )}
        </div>

        <Technologies
          technologies={project.technologies}
          devTools={project.devTools ?? []}
        />

        <LinksPanel
          githubLink={project.links.github}
          websiteLink={project.links.website}
        />
      </div>
    </div>
  );
};

export default ProjectPanel;
