import { useToggle } from "../../../../hook/useToggle";
import WeatherPanel from "../../../Portfolio/projects/ProjectsList/Weather/WeatherPanel";

const ProjectThree: React.FC = () => {
  const { isVisible, toggleVisibility } = useToggle();
  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h5 className="text-2xl mb-3">Aplikacja Pogodowa</h5>
        <p className="text-left text-sm p-2 mb-1">
          Moja aplikacja pogodowa wykorzystuje API OpenWeather do wyświetlania
          bieżącej pogody w wybranym mieście. Umożliwia użytkownikowi
          sprawdzenie aktualnej temperatury, wilgotności oraz ogólnych warunków
          pogodowych.
        </p>

        <button
          onClick={toggleVisibility}
          className="mt-4 py-2 px-5 bg-black/50 text-white rounded-full"
        >
          Zobacz szczegóły
        </button>
      </div>
      {isVisible && <WeatherPanel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ProjectThree;
