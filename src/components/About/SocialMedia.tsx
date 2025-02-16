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
    <article id="SocialMedia" className="flex flex-col items-center bg-gray-50/30 p-2 rounded-3xl w-1/4 m-3 ">
      <h2 className="text-2xl mb-2">SocialMedia</h2>
      <div className="flex flex-wrap justify-center items-center">
        <a target="_blank" href="https://www.linkedin.com/in/michalpawlowski-mp/" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Linkedin} alt="Link do mojego Linkedina" />
          <p className="mx-3">Michał Pawłowski</p>
        </a>
        <a target="_blank" href="https://github.com/aJpaRmp" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Github} alt="Link do mojego Githuba" />
          <p className="mx-3">ajparmp</p>
        </a>
        <a target="_blank" href="https://www.instagram.com/mp.dev_/" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Instagram} alt="Link do mojego Instagrama" />
          <p className="mx-3">MP.Dev_</p>
        </a>
        <a target="_blank" href="https://x.com/mp_dev_?s=21" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={X} alt="Link do mojego profilu X" />
          <p className="mx-3">MP_Dev_</p>
        </a>
        <a target="_blank" href="https://www.youtube.com/@MP-devJS" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Youtube} alt="Link do mojego kanału YouTube" />
          <p className="mx-3">MP.Dev_</p>
        </a>
        <a target="_blank" href="https://www.tiktok.com/@mp.dev_" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Tiktok} alt="Link do mojego TikToka" />
          <p className="mx-3">mp.dev_</p>
        </a>
        <a target="_blank" href="https://www.threads.net/@mp.dev_" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Threads} alt="Link do mojego Threads" />
          <p className="mx-3">mp.dev_</p>
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61572716596188" className="flex items-center p-2 m-2 rounded-full border border-white hover:bg-white/20">
          <img className="invert rounded-full" src={Facebook} alt="Link do mojej strony na Facebook" />
          <p className="mx-3">MP.Dev</p>
        </a>
      </div>
    </article>
  );
};

export default SocialMedia;
