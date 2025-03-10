import CodeSection from "./CodeSection";
import IntroSection from "./IntroSection";
import ExampleProjectSection from "./ExampleProject/ExampleProjectSection";
import AboutSection from "./AboutSection";
import ButtonContact from "./ButtonContact";

const Main: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center md:px-4 px-2">
        <div className="flex flex-col md:flex-row my-10 w-full justify-center items-center">
          <IntroSection />
          <CodeSection />
        </div>
        <ButtonContact />
        <ExampleProjectSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Main;
