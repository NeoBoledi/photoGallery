import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomeDetails from './components/HomeDetails'
import AboutForm from './components/AboutForm'
import ServiceForm from './components/ServiceForm'
import ProjectForm from './components/ProjectForm'
import ContactForm from './components/ContactForm'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestimonialForm from './components/TestimonialForm'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (

  <>
   <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    <Testimonial/>
    <Contact/>
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard/>}/>
        <Route path="/home" element={  <HomeDetails/>}/>
        <Route path="/about" element={ <AboutForm/>}/>
        <Route path="/service" element={ <ServiceForm/>}/>
        <Route path="/project" element={  <ProjectForm/>}/>
        <Route path="/testimonial" element={ <TestimonialForm/>}/>
        <Route path="/contact" element={ <ContactForm/>}/>
      </Routes>
    </div>
  </Router>
  </>
  )
}

export default App