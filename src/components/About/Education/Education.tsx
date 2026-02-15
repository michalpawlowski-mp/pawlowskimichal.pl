import { useState } from "react";
import EducationItem from "./EducationItem";
import { educationData } from "./education.data";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/2">
      <h2 className="text-3xl mb-2">Wykształcenie</h2>
      <button
        type="button"
        onClick={toggleVisibility}
        className="mb-4 py-2 px-5 bg-white/10 text-white rounded-full shadow-sm shadow-gray-600"
      >
        Zobacz moje wykształcenie
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black/20 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white/10  shadow-inner shadow-black p-3 rounded-2xl  max-w-3xl w-max ">
            <button
              type="button"
              onClick={toggleVisibility}
              className="mb-4 p-2 bg-white/10 text-white rounded-xl"
            >
              Zamknij
            </button>
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Education;
