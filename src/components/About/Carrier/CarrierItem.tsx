import { CarrierDataProps } from "../../../types/CarrierDataProps";

const CarrierItem = ({ date, company, position, description }: CarrierDataProps) => {
  return (
    <ul className="p-4 mb-4 bg-black/20 rounded-3xl shadow shadow-white">
      <li className="text-xs">{date}</li>
      <li className="">{company}</li>
      <li className="text-xs">{position}</li>
      <li className="">
        <ol className="p-0">
          {description.map((item, index) => (
            <li key={index} className="text-sm">
              - {item}
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
};

export default CarrierItem;
