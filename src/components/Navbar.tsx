import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

// ✅ Only register ScrollTrigger (NOT ScrollSmoother)
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");

          if (section) {
            const el = document.querySelector(section);
            el?.scrollIntoView({ behavior: "smooth" }); // ✅ native smooth scroll
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        {/* NAME */}
        <a href="/#" className="navbar-title" data-cursor="disable">
          Abhishek Prasad
        </a>

        {/* NAV LINKS */}
        <ul>
          <li>
            <a data-href="#tech" href="#tech">
              <HoverLinks text="TECHSTACK" />
            </a>
          </li>

          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;