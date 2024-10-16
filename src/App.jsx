import Aboutme from "./Components/Aboutme/Aboutme";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Links from "./Components/Links/Links";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white ">
      <Header />
      <Home />
      <Links />
      <Aboutme />
      {/* need to fix skills section */}
      {/* <Skills /> */}
    </div>
  );
}
