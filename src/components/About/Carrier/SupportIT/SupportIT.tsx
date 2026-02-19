import SupportItItem from "./SupportItItem";
import { supportData } from "./support.data";

const SupportIT: React.FC = () => {
  return (
    <>
      <p className="pb-3 text-2xl font-semibold">Wsparcie IT</p>
      {supportData.map((item, index) => (
        <SupportItItem key={index} {...item} />
      ))}
    </>
  );
};

export default SupportIT;
