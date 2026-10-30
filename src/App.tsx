import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Press from "./components/Press";
import Process from "./components/Process";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Studio from "./components/Studio";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Nav />
      <main id="index">
        <Hero />
        <SelectedWork />
        <Studio />
        <Services />
        <Process />
        <Press />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
