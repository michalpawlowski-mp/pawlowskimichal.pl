import me from "../../assets/images/mypicture/me.svg";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-around px-6 md:px-1 py-5">
      <div className="flex flex-col items-start gap-6 text-center md:text-left">
        <div className="flex flex-col text-center w-full">
          <h3 className="text-5xl md:text-6xl font-bold text-white">Michał Pawłowski</h3>
          <h4 className="text-sm md:text-md font-bold text-white">MP.Dev_</h4>
          <h5 className="text-2xl md:text-6xl font-bold text-white">
            Junior Frontend Developer
          </h5>
        </div>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          Jestem Michał i rozwijam się w kierunku frontendu. Uczę się nowych technologii,
          tworzę własne projekty i stale poszerzam swoje umiejętności.
        </p>
        <div className="flex w-full justify-center items-center gap-3">
          <Button link={"/contact"} content="Kontakt ze mną" />
          <Button
            link={"https://michalpawlowski-mp.github.io/Curriculum-Vitae/"}
            content="Zobacz moje CV"
            external
          />
        </div>
      </div>
      <img
        src={me}
        alt="Michał Pawłowski"
        width={400}
        height={400}
        className="rounded-3xl shadow-lg m-3"
      />
    </section>
  );
};

export default Hero;
