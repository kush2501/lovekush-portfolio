import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import FeaturedProject from "./views/FeaturedProject/FeaturedProject";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";


function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <FeaturedProject />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;