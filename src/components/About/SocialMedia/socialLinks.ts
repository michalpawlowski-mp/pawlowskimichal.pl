import Linkedin from "/icons/social/linkedin.svg";
import Github from "/icons/social/github.svg";
import X from "/icons/social/x.svg";
import Youtube from "/icons/social/youtube.svg";
import Instagram from "/icons/social/instagram.svg";
import Tiktok from "/icons/social/tiktok.svg";
import Facebook from "/icons/social/facebook.svg";
import Threads from "/icons/social/threads.svg";

export type SocialLink = {
  href: string;
  icon: string;
  alt: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/michalpawlowski-mp/",
    icon: Linkedin,
    alt: "Link do mojego Linkedina",
  },
  {
    href: "https://github.com/aJpaRmp",
    icon: Github,
    alt: "Link do mojego Githuba",
  },
  {
    href: "https://www.instagram.com/mp.dev_/",
    icon: Instagram,
    alt: "Link do mojego Instagrama",
  },
  {
    href: "https://x.com/mp_dev_?s=21",
    icon: X,
    alt: "Link do mojego profilu X",
  },
  {
    href: "https://www.youtube.com/@MP-devJS",
    icon: Youtube,
    alt: "Link do mojego kanału YouTube",
  },
  {
    href: "https://www.tiktok.com/@mp.dev_",
    icon: Tiktok,
    alt: "Link do mojego TikToka",
  },
  {
    href: "https://www.threads.net/@mp.dev_",
    icon: Threads,
    alt: "Link do mojego Threads",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61572716596188",
    icon: Facebook,
    alt: "Link do mojej strony na Facebook",
  },
];
