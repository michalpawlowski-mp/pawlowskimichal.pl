import { Link } from "react-router-dom";

const Description: React.FC = () => {
  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2000-05-29");

  return (
    <article id="description" className="w-full md:w-1/2 p-2 bg-black/50 rounded-3xl md:mx-2 my-2">
      <h3 className="text-3xl text-center">O mnie</h3>
      <div className="p-3">
        <p className="text-xl font-semibold mb-4">Cześć!</p>
        <p className="text-sm mb-4">
          Nazywam się Michał Pawłowski, mam {age} lat i jestem pasjonatem programowania oraz technologii. Posiadam tytuł
          Inżyniera Informatyki zdobyty na Uniwersytecie Kazimierza Wielkiego w Bydgoszczy, a także tytuł Technika
          Informatyka, który uzyskałem kończąc technikum w Zespole Szkół Mechanicznych nr 1 w Bydgoszczy.
        </p>
        <p className="text-sm mb-4">
          Moim celem jest rozwój w kierunku frontendu. Regularnie poszerzam swoją wiedzę, ucząc się nowych technologii i
          śledząc zmiany w branży IT.
        </p>
        <p className="text-sm mb-4">
          Poza programowaniem interesuję się gamingiem, sprzętem komputerowym oraz nowinkami technologicznymi. Moją
          pasją jest także piłka nożna, którą śledzę z zaangażowaniem, oraz aktywność fizyczna, która pomaga mi utrzymać
          energię i motywację na co dzień. W wolnym czasie rozwijam swoje umiejętności, realizując różne projekty, które
          możesz zobaczyć w zakładce
          <Link to="/Portfolio" className="text-blue-500 ps-1">
            Portfolio.
          </Link>
        </p>
        <p className="text-sm">
          Jestem osobą zdeterminowaną, nastawioną na naukę i otwartą na nowe wyzwania. Jeśli poszukujesz młodego,
          ambitnego programisty do swojego zespołu.
          <Link to="/contact" className="text-blue-500 in-line pl-1 text-center">
            Zapraszam do kontaktu!
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Description;
