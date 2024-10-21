import Aboutme from "./Components/Aboutme/Aboutme";
import ContactMe from "./Components/ContactMe/ContactMe";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Links from "./Components/Links/Links";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white ">
      <Header />
      <Home />
      <Links />
      <Aboutme />
      <Experience />
      <Projects />
      {/* need to complete contact me component */}
      {/* <ContactMe /> */}
    </div>
  );
}
