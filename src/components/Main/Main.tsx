import CodeSection from "./CodeSection";
import IntroSection from "./IntroSection";
import ExampleProjectSection from "./ExampleProject/ExampleProjectSection";
import AboutSection from "./AboutSection";
import ButtonContact from "./ButtonContact";

const Main: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center p-auto mx-auto px-4">
        <div className="flex flex-col lg:flex-row mt-5 mb-10 w-full justify-center items-center">
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
