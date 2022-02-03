import About from "../components/home/About/About";
import Events from "../components/home/Events/Events";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Services from "../components/home/Services/Services";
import Subcriber from "../components/home/Subscriber/Subcriber";

import MetaTitle from "../components/Meta/MetaTitle";

export default function Home() {
  return (
    <>
      <MetaTitle />

      <header className="overflow-hidden">
        <HeroSection />
      </header>

      <main className="w-[90%] mx-auto ">
        <section className="flex justify-center items-center my-52">
          <About />
        </section>

        <section className="my-52">
          <Services />
        </section>

        <section className="my-52">
          <Events />
        </section>

        <section className="my-52">
          <Subcriber />
        </section>
      </main>

      <footer className="w-[90%] mx-auto">
        <Footer />
      </footer>
    </>
  );
}
