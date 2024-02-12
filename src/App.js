import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Project from "./components/Project";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (

    <>
    <Navbar/>
    <Home/>
    <Login/>
    <Registration/>
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
