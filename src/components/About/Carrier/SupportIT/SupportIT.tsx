import CarrierItem from "../CarrierItem";
import { supportData } from "./support.data";

const SupportIT: React.FC = () => {
  return (
    <>
      <p className="pb-3 text-2xl font-semibold">Wsparcie IT</p>
      {supportData.map((item, index) => (
        <CarrierItem key={index} {...item} />
      ))}
    </>
  );
};

export default SupportIT;
