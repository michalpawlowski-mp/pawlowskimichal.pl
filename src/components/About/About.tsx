import Banner from "./Banner";
import Skills from "./Skills";
import Description from "./Description";
import Certificates from "./Certificates";
import Carrier from "./Carrier";
import Education from "./Education";

const About: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full mx-auto px-3">
        <Banner />
        <div className="flex flex-col w-full justify-center md:flex-row">
          <Skills />
          <Description />
        </div>
        <div className="flex flex-col w-full justify-center md:flex-row">
          <Education />
          <Carrier />
          <Certificates />
        </div>
      </section>
    </>
  );
};

export default About;
