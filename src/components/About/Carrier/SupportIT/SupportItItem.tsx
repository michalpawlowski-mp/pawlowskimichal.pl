const SupportItItem = ({ date, company, position, description }) => {
  return (
    <ul className="">
      <li className="">{date}</li>
      <li className="">{company}</li>
      <li className="">{position}</li>
      <li className="">
        <ol className="p-0">
          {description.map((item, index) => (
            <li key={index} className="">
              - {item}
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
};

export default SupportItItem;
