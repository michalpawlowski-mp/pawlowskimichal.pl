import { useToggle } from "../../../../hook/useToggle";
import CloneTubePanel from "../../../Portfolio/projects/ProjectsList/CloneTube/CloneTubePanel";

const ProjectOne: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h4 className="text-2xl mb-3">CloneTube</h4>
        <p className="text-sm text-left pb-1">
          Moja aplikacja CloneTube wykorzystuje API YouTube do wyświetlania
          filmów wideo w wybranej kategorii lub na podstawie wyszukiwanego
          hasła. Umożliwia użytkownikowi przeglądanie listy filmów, otwieranie
          ich w odtwarzaczu oraz szybkie przełączanie się między różnymi
          kategoriami tematycznymi.
        </p>

        <button
          onClick={toggleVisibility}
          className="mt-4 py-2 px-5 bg-black/50 text-white rounded-full"
        >
          Zobacz szczegóły
        </button>
      </div>
      {isVisible && <CloneTubePanel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ProjectOne;
