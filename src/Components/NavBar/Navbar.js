import React from 'react'
import './navbar.css'
import pridesearch from './images/pride_search.png'
import pridelogo from './images/pridelogo.png'
import user from './images/user.png'


function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="navleft">
        <div className="pride_logo">
          <img src={pridelogo} alt="logo" className="logo" />
        </div>
        <button>
          <a href="../../../public/index.html" className="pride_links">EVENTS</a>
        </button>
        <button>
          <a href="../../../public/index.html" className="pride_links">CONSULTANCY</a>
        </button>
        <button>
          <a href="../../../public/index.html" className="pride_links">INNOVATIVE PROJECTS</a>
        </button>
        <div
          onMouseEnter={() =>{
            document.querySelector('.courses').style.display='grid';
          }}
          onMouseLeave={() => {
            document.querySelector('.courses').style.display='none';
          }} 
          className="courses_container"
        >
          <button>
            <a href="../../../public/index.html" 
            id='courses'
            className="pride_links">COURSES</a>
          </button>
          <div className="courses">
            <a href="../../../public/index.html" className="course_list">COURSE LIST</a>
            <a href="../../../public/index.html" className="registration">REGISTRATION</a>
            <a href="../../../public/index.html" className="course_list">MOU</a>
          </div>
        </div>
        <div 
        onMouseEnter={() =>{
          document.querySelector('.about_us').style.display='grid';
        }}
        onMouseLeave={() => {
          document.querySelector('.about_us').style.display='none';
        }} 
        className="aboutus_container"
        >
          <button>
            <a href="../../../public/index.html" className="pride_links"
            id='about_us'
            >ABOUT US</a>
          </button>
          <div className="about_us">
            <a href="../../../public/index.html" className="partners">PARTNERS</a>
            <a href="../../../public/index.html" className="contact_us">CONTACT US</a>
            <a href="../../../public/index.html" className="course_list">COMMITTEE</a>
          </div>
        </div>
      </div>
      <div className="navright">
        <div className="input_container">
          <input type="text" placeholder="Search" className="nav_input" />
          <div className="search_container">
            <img className="search" src={pridesearch} alt="search" />
          </div>
        </div>
        <div className="profile_container">
          <img className="profile" src={user} alt="user" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar