const Carrier = () => {
  return (
    <>
      <article id="carrier" className="flex flex-col items-center bg-gray-50/30 m-10 p-2 rounded-3xl">
        <h2>Kariera</h2>

        <div className="flex flex-col p-2">
          <p>Wsparcie IT</p>
          <div className="flex">
            <ul className="biziel m-2 p-4 bg-black/50 rounded-3xl">
              <li className="date text-xs">08.2022 – 09.2022 (2 mies.)</li>
              <li className="name">Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
              <li className="position">Dział Samodzielnej Sekcji Łączności (STAŻ)</li>
            </ul>
            <ul className="iiukw m-2 p-4 bg-black/50 rounded-3xl">
              <li className="date text-xs">12.2021 – 08.2022 (9 mies.)</li>
              <li className="name">Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy</li>
              <li className="position">Dział Techniczny</li>
            </ul>
            <ul className="bass m-2 p-4 bg-black/50 rounded-3xl">
              <li className="date text-xs">07.2021 – 09.2021 (3 mies.)</li>
              <li className="name ">
                BELMA ACCESSORIES SYSTEMS
                <i className="city"> | Bydgoszcz</i>
              </li>
              <li className="position">Referent ds. Informatycznych</li>
            </ul>
          </div>
          <p>Frontend Developer</p>
        </div>
      </article>
    </>
  );
};

export default Carrier;
