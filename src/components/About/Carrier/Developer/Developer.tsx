import CarrierItem from "../CarrierItem";
import { developerData } from "./developer.data";

const Developer: React.FC = () => {
  return (
    <>
      <p className="pb-3 text-2xl font-semibold">Frontend Developer</p>
      {developerData.map((item, index) => (
        <CarrierItem key={index} {...item} />
      ))}
    </>
  );
};

export default Developer;
