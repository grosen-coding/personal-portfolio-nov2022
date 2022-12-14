import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from "../layout/NavbarReveal";
import Hero from "../section/heroDarkNew";
import About from "../section/aboutDark";
import Whatido from "../section/whatido";
import Gallery from "../section/gallery";
import Resume from "../section/resume";
import Contact from "../section/contact";
import Footer from "../section/footer";
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from "../layout/ScrollToTop";
import { GlobalStyles } from "./style/darknew";

const image1 = "./img/background/6.jpg";

function home() {
  return (
    <>
      <GlobalStyles />
      <Preloader />
      <div className="home">
        <header id="header-wrap">
          <Navbar />
        </header>

        {/* HERO */}
        <section id="hero-area" className="bg-bottom py-0">
          <Parallax bgImage={image1} strength={300}>
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>

        {/* ABOUT */}
        <section id="about" className="pb-0">
          <About />
        </section>

        {/* What I Do */}
        <section id="whatido" className="pb-0">
          <Whatido />
        </section>

        {/* Portfolio */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Resume */}
        <section id="resume" className="pb-0">
          <Resume />
          {/* <Counter /> */}
        </section>

        {/* contact */}
        <section id="contact" className="py-0">
          <Contact />
          <Footer />
        </section>
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default home;
