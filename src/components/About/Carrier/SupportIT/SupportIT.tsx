const SupportIT: React.FC = () => {
  return (
    <>
      <p className="pb-3 text-2xl font-semibold">Wsparcie IT</p>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <ul className="flex-1 my-2 p-4 bg-black/50 rounded-3xl shadow-lg shadow-white/30">
          <li className="text-xs">08.2022 – 09.2022 (2 mies.)</li>
          <li>Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
          <li className="text-sm">
            Dział Samodzielnej Sekcji Łączności (STAŻ)
          </li>
        </ul>
        <ul className="flex-1 my-2 p-4 bg-black/50 rounded-3xl shadow-lg shadow-white/30">
          <li className="text-xs">12.2021 – 08.2022 (9 mies.)</li>
          <li>
            Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy
          </li>
          <li className="text-sm">Dział Techniczny</li>
        </ul>
        <ul className="flex-1 my-2 p-4 bg-black/50 rounded-3xl shadow-lg shadow-white/30">
          <li className="text-xs">07.2021 – 09.2021 (3 mies.)</li>
          <li>
            BELMA ACCESSORIES SYSTEMS
            <i className="pl-1 text-sm font-light">| Bydgoszcz</i>
          </li>
          <li className="text-sm">Referent ds. Informatycznych</li>
        </ul>
      </div>
    </>
  );
};

export default SupportIT;
