import Aboutme from "./Components/Aboutme/Aboutme";
import ContactMe from "./Components/ContactMe/ContactMe";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Links from "./Components/Links/Links";
import Projects from "./Components/Projects/Projects";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white ">
      <Header />
      <Home />
      <Links />
      <Aboutme />
      <Experience />
      <Projects />
      <ContactMe />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
