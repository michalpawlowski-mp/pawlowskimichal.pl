const Certificates = () => {
  return (
    <article id="certificates" className="flex flex-col items-center bg-gray-50/30 m-10 p-2 rounded-3xl">
      <h6 className="text-3xl">Certyfikaty</h6>
      <div className="flex">
        <ul className="m-2 p-4 bg-black/50 rounded-3xl">
          <li className="text-xs">06.2018</li>
          <li className="text-sm">E12 Montaż i eksploatacja komputerów osobistych oraz urządzeń peryferyjnych</li>
        </ul>
        <ul className="m-2 p-4 bg-black/50 rounded-3xl">
          <li className="text-xs">06.2019</li>
          <li className="text-sm">E13 Projektowanie lokalnych sieci komputerowych i administrowanie sieciami</li>
        </ul>
        <ul className="m-2 p-4 bg-black/50 rounded-3xl">
          <li className="text-xs">01.2020</li>
          <li className="text-sm">E14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami</li>
        </ul>
      </div>
    </article>
  );
};

export default Certificates;
