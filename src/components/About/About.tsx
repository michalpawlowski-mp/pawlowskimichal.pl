import Banner from "./Banner";
import Skills from "./Skills";
import Description from "./Description";
import Certificates from "./Certificates";
import Carrier from "./Carrier";
import SocialMedia from "./SocialMedia";

function About() {
  return (
    <>
      <section id="About" className="flex flex-col items-center p-auto">
        <Banner />
        <div className="flex-wrap flex">
          <Skills />
          <Description />
          <SocialMedia />
          <Certificates />
          <Carrier />
        </div>
      </section>
    </>
  );
}

export default About;
