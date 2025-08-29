// import CodeSection from "./CodeSection";
// import IntroSection from "./IntroSection";
// import ButtonContact from "./ButtonContact";
import ExampleProjectSection from "./ExampleProject/ExampleProjectSection";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const Main: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center md:px-4 px-2">
        {/* <div className="flex flex-col md:flex-row my-10 w-full justify-center items-center">
          <IntroSection />
          <CodeSection />
        </div>
        <ButtonContact /> */}
        <HeroSection />
        <ExampleProjectSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Main;
