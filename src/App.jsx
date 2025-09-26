import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { RESUME } from "./data/resume";

export default function App() {
  return (
    <>
      <a id="top" />
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About">
          <p className="mt-4 text-muted max-w-2xl">
            {RESUME.about}
          </p>
        </Section>
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
