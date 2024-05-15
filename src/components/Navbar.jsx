import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.jpg'
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { FaShareAlt } from "react-icons/fa";



export default function Navbar(){
  let [buttonStatus,setButtonStatus]=useState(true);

  const openNav = ()=> {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
  }
  
  const closeNav = ()=> {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  const toggleMenu = ()=>{
    buttonStatus? openNav () : closeNav();
    setButtonStatus(!buttonStatus);

  }

    return(
         <>
         
         <div id="mySidebar" className="sidebar">
          {/* <a href="" className="closebtn" onClick={closeNav}>×</a> */}
            <div className="links">
                <div className="item">
                  <Link to="/" onClick={toggleMenu}>Search</Link>
                  <div className="bar"></div>
                </div>
                <div className="item">
                  <Link to="/categories" onClick={toggleMenu}>Categories</Link>
                  <div className="bar"></div>
                </div>
                <div className="item">
                  <Link to="/area" onClick={toggleMenu}>Area</Link>
                  <div className="bar"></div>
                </div>
                <div className="item">
                  <Link to="/ingradients" onClick={toggleMenu}>Ingradients</Link>
                  <div className="bar"></div>
                </div>
                <div className="item">
                  <Link to="/contactUs" onClick={toggleMenu}>Contact us</Link>
                  <div className="bar"></div>
                </div>
            </div>

            <div className="footer">
              <div className="icons">
                <a href='www.facebook.com'><FaFacebook /></a>
                <a href='www.twitter.com'><RiTwitterLine  /></a>
                <a href='www.google.com'><TbWorld /></a>
              </div>
              <p>Copyright Â© 2019 All Rights Reserved.</p>
            </div>
          

        </div>

        <div id="main">
          <Link to='/'>
             <img src={Logo} alt="..." />  
          </Link>
         {buttonStatus? <button className="openbtn " onClick={toggleMenu}>☰</button>
         :  <button className="openbtn " onClick={toggleMenu}>×</button>
         }

         <div className="main-icons">
          <a href=""><TbWorld /></a>
          <a href=""><FaShareAlt /></a>
         </div>
         
         </div>


         </>

    );
}