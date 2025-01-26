import Linkedin from "/icons/social/linkedin.svg";
import Github from "/icons/social/github.svg";
import X from "/icons/social/x.svg";
import Youtube from "/icons/social/youtube.svg";
import Instagram from "/icons/social/instagram.svg";
import Tiktok from "/icons/social/tiktok.svg";
import Facebook from "/icons/social/facebook.svg";
import Threads from "/icons/social/threads.svg";

const SocialMedia = () => {
  return (
    <article id="SocialMedia" className="flex flex-col items-center bg-gray-50/20 p-2 rounded-3xl w-1/3">
      <h2>SocialMedia</h2>
      <div className="flex flex-wrap">
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Linkedin} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Github} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Instagram} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={X} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Youtube} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>

        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Tiktok} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Threads} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
        <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
          <img className="invert rounded-full" src={Facebook} alt="Link do mojego Linkedina" />
          <p className="m-1">Michał Pawłowski</p>
        </a>
      </div>
    </article>
  );
};

export default SocialMedia;
