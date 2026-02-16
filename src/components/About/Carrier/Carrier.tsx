import { useState } from "react";
import SupportIT from "./SupportIT/SupportIT";
import Developer from "./Developer/Developer";

const Carrier: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article
      id="carrier"
      className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/2 "
    >
      <h2 className="text-3xl mb-2">Kariera</h2>
      <button
        type="button"
        onClick={toggleVisibility}
        className="mb-4 py-2 px-5 bg-white/10 text-white rounded-full shadow-sm shadow-gray-600"
      >
        Zobacz moją kariere
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black/30 z-20 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white/10  shadow-inner shadow-black p-2 rounded-2xl m-1 max-w-3xl w-max max-h-5/6 overflow-auto ">
            <button
              type="button"
              onClick={toggleVisibility}
              className="mb-4 p-2 bg-white/10 rounded-xl  text-white"
            >
              Zamknij
            </button>
            <div className="flex flex-col p-2">
              <SupportIT />
              <Developer />
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Carrier;
