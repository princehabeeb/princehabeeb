import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <About />
    <Contact />
    <Projects />
    <Footer />
    <SocialLinks />
    </div>
  );
}

export default App;
