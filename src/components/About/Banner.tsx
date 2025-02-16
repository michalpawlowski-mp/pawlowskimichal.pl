import me from "/icons/any/MyPicture.svg";

const Banner: React.FC  = () => {
  return (
    <article id="banner" className="flex items-center bg-gray-50/30 m-2 p-2 rounded-full w-full md:w-3/4">
      <img className="rounded-full border border-white" src={me} alt="Moje zdjęcie" />
      <div className="m-3">
        <h2 className="text-3xl text-shadow-lg  ">Inż. Michał Pawłowski</h2>
        {/* <h3>Frontend Developer</h3> */}
      </div>
    </article>
  );
};

export default Banner;
