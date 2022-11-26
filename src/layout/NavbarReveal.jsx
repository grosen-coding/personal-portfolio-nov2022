import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";


const Navbar= function() {
  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const flytext = document.getElementById("fly");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          flytext.classList.add("hide");
        } else {
          header.classList.remove("sticky");
          flytext.classList.remove("hide");
          totop.classList.remove("show");
        } 
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return(
        <nav className="navbar transition rev">
        <div className="container">
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <h5>GSRCoding</h5>
          </Link>

          {/* Desktop menu Here */}
          <div className={showmenu ? "mainreveal show" : "mainreveal"}>
            {showmenu && 
             <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="hero-area" onClick={() => btn_icon(!showmenu)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="about" onClick={() => btn_icon(!showmenu)}>
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="whatido" onClick={() => btn_icon(!showmenu)}>
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="gallery" onClick={() => btn_icon(!showmenu)}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="resume" onClick={() => btn_icon(!showmenu)}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="contact" onClick={() => btn_icon(!showmenu)}>
                  Contact Me
                </Link>
              </li>
            </ul>
            }
          </div>
          
          {/* Desktop menu Here */}
          <span id="de-menu-reveal" className={showmenu ? "menu-open" : ""} onClick={() => btn_icon(!showmenu)}>
              <span className="lt"></span>
              <span className="lm"></span>
              <span className="lb"></span>
          </span>
        </div>
      </nav>
    )
}

export default Navbar;