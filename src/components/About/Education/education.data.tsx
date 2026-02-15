export interface EducationProps {
  date: string;
  school: string;
  title: string;
  details: string[];
}

export const educationData: EducationProps[] = [
  {
    date: "10/2020 – 03/2024",
    school: "Uniwersytet Kazimierza Wielkiego w Bydgoszczy",
    title: "Inżynier Informatyki",
    details: [
      "Praca inżynierska: GamingHub – autorska aplikacja webowa z naciskiem na frontend (HTML, CSS, JavaScript)",
      "Projekt studencki: MEET-IT – samodzielna implementacja frontendu aplikacji webowej (HTML, CSS, JavaScript) we współpracy z firmą BSB",
    ],
  },
  {
    date: "09/2016 – 04/2020",
    school: "Zespół Szkół Mechanicznych nr 1 w Bydgoszczy",
    title: "Technik Informatyk",
    details: [
      "Egzaminy zawodowe E12, E13, E14 – systemy komputerowe, sieci, aplikacje internetowe i bazy danych",
    ],
  },
];
