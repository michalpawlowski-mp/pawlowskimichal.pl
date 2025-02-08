import CodeSection from "./codeSection";
import IntroSection from "./IntroSection";
import ExampleProjectSection from "./ExampleProjectSection";
import ContactSection from "./ContactSection";

const Main = () => {
  return (
    <>
      <main className="flex flex-col items-center p-auto container  mx-auto px-4">
        <div className="flex mt-5 mb-10 w-full justify-center">
          <IntroSection />
          <CodeSection />
        </div>
        <ExampleProjectSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Main;
