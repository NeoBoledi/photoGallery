import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Login from "./components/Login";

function App() {
  return (

    <>
    <Navbar/>
    <Home/>
    <Gallery/>
    <Login/>
    <About/>
    <Services/>
    <Project/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
