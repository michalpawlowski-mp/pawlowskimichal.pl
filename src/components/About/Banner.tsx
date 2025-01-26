import me from "/icons/any/MyPicture.svg";

const Banner = () => {
  return (
    <article id="banner" className="flex items-center bg-gray-50/20 m-10 p-2 rounded-full  w-3/4">
      <img className="rounded-full border border-white" src={me} alt="Moje zdjęcie" />
      <div className="m-2">
        <h2 className="text-3xl">inż. Michał Pawłowski</h2>
        {/* <h3>Frontend Developer</h3> */}
      </div>
    </article>
  );
};

export default Banner;
