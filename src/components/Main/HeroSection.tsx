import me from "/any/mypicture/me.svg";
import ButtonContact from "./ButtonContact";

export default function Hero() {
  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14">
      {/* Tekst */}
      <div className="flex-1 flex flex-col items-start gap-6 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white0">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          Jestem Michał i rozwijam się w kierunku frontendu. Uczę się nowych
          technologii, tworzę własne projekty i stale poszerzam swoje
          umiejętności.
        </p>
        <ButtonContact />
      </div>
      <div className="flex-1 flex justify-center md:mt-0">
        <img
          src={me}
          alt="Michał Pawłowski"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
