import me from "/any/mypicture/MyPicture.svg";
import SocialMedia from "./SocialMedia/SocialMedia";

const Banner: React.FC = () => {
  return (
    <article
      id="banner"
      className="flex items-center bg-black/50 m-2 p-2 rounded-full w-full md:w-3/4"
    >
      <img
        className="rounded-full border border-white"
        src={me}
        alt="Moje zdjęcie"
      />
      <div className="flex flex-col justify-between h-full">
        <div className="ml-2 w-full">
          <h2 className="text-3xl text-shadow-lg  ">Inż. Michał Pawłowski</h2>
          {/* <h3>Frontend Developer</h3> */}
        </div>
        <SocialMedia />
      </div>
    </article>
  );
};

export default Banner;
