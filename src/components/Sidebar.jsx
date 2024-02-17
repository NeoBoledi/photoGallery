import React from 'react'
import 
{ BsGrid1X2Fill } from 'react-icons/bs'
import { FaCog, FaComments, FaHome, FaImages, FaUserCircle, FaInfoCircle, FaPhoneVolume, FaPowerOff, FaServicestack} from 'react-icons/fa'
 import {Link} from "react-router-dom"
 import {MdMiscellaneousServices } from "react-icons/md";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
   <section className="sidebar" id='sidebar'>
     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand flex text-white'>
                 NBGALLERY
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard 
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/home">
                    <FaHome className='icon'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/about">
                    <FaInfoCircle className='icon'/> About
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/service">
                    <MdMiscellaneousServices className='icon'/> Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="project">
                    <FaImages className='icon'/> Projects
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/testimonial'>
                    <FaComments className='icon'/> Testimonials
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/contact'>
                    <FaPhoneVolume className='icon'/> Contacts
                </Link>
            </li>
            <br/>
            <br/>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUserCircle className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaCog className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaPowerOff className='icon'/> Log Out
                </a>
            </li>
        </ul>
    </aside>
   </section>
  )
}

export default Sidebar