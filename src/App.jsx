import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Protfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Home />
      <About /> 
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
