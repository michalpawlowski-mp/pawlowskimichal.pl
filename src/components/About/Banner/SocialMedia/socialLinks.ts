import {
  linkedin,
  github,
  ig,
  x,
  yt,
  tiktok,
  threads,
  fb,
} from "../../../../assets/imports/index";

export type SocialLink = {
  href: string;
  icon: string;
  alt: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/michalpawlowski-mp/",
    icon: linkedin,
    alt: "Link do mojego Linkedina",
  },
  {
    href: "https://github.com/michalpawlowski-mp",
    icon: github,
    alt: "Link do mojego Githuba",
  },
  {
    href: "https://www.instagram.com/mp.dev_/",
    icon: ig,
    alt: "Link do mojego Instagrama",
  },
  {
    href: "https://x.com/mp_dev_?s=21",
    icon: x,
    alt: "Link do mojego profilu X",
  },
  {
    href: "https://www.youtube.com/@MP-devJS",
    icon: yt,
    alt: "Link do mojego kanału YouTube",
  },
  {
    href: "https://www.tiktok.com/@mp.dev_",
    icon: tiktok,
    alt: "Link do mojego TikToka",
  },
  {
    href: "https://www.threads.net/@mp.dev_",
    icon: threads,
    alt: "Link do mojego Threads",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61572716596188",
    icon: fb,
    alt: "Link do mojej strony na Facebook",
  },
];
