import { useEffect, useState } from "react";
import "./Navbar.css";

import {
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Complogo from "../assets/complogo.png";


const navItems = [
  { path: "/", label: "Home" },

  { path: "/about", label: "About Us" },

  {
    path: "/services",
    label: "Services",
    dropdown: true,
  },

  {
    path: "/solutions",
    label: "Solutions",
    dropdown: true,
  },

  {
    path: "/why-choose-us",
    label: "Why Choose Us",
  },

  {
    path: "/clients",
    label: "Clients",
  },

  {
    path: "/contact",
    label: "Contact",
  },
];


/* =========================================================
   SERVICES DROPDOWN
========================================================= */

const serviceItems = [
  {
    path: "/services/electrical",
    label: "Electrical Engineering",
  },

  {
    path: "/services/hvac",
    label: "HVAC Solutions",
  },

  {
    path: "/services/fire-safety",
    label: "Fire & Safety",
  },

  {
    path: "/services/plumbing",
    label: "Plumbing & Piping",
  },

  {
    path: "/services/facility-management",
    label: "Facility Management",
  },
];


/* =========================================================
   SOLUTIONS DROPDOWN
========================================================= */

const solutionItems = [
  {
    path: "/solutions/industrial",
    label: "Industrial Solutions",
  },

  {
    path: "/solutions/commercial",
    label: "Commercial Solutions",
  },

  {
    path: "/solutions/healthcare",
    label: "Healthcare Solutions",
  },

  {
    path: "/solutions/cleanroom",
    label: "Cleanroom Solutions",
  },
];


export function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [solutionsOpen, setSolutionsOpen] = useState(false);


  const navigate = useNavigate();

  const location = useLocation();


  /* =========================================================
     CHECK CURRENT PAGE
     
     Navbar behaves differently only on HOME PAGE.
  ========================================================= */

  const isHomePage = location.pathname === "/";


  /* =========================================================
     SCROLL HANDLING
     
     HOME:
       scrollY > 80 -> scrolled

     OTHER PAGES:
       always treated as scrolled
       so navbar remains visible.
  ========================================================= */

  useEffect(() => {

    const handleScroll = () => {

      if (isHomePage) {

        setScrolled(window.scrollY > 80);

      } else {

        setScrolled(true);

      }

    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [isHomePage]);


  /* =========================================================
     ROUTE CHANGE
     
     Close dropdowns and mobile menu.
  ========================================================= */

  useEffect(() => {

    setServicesOpen(false);

    setSolutionsOpen(false);

    setMenuOpen(false);

    /*
      On non-home pages navbar should immediately
      appear without waiting for scroll.
    */

    if (location.pathname !== "/") {

      setScrolled(true);

    } else {

      setScrolled(window.scrollY > 80);

    }

  }, [location.pathname]);


  /* =========================================================
     CONTACT SCROLL
  ========================================================= */

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {

    e.preventDefault();


    setMenuOpen(false);

    setServicesOpen(false);

    setSolutionsOpen(false);


    const element =
      document.getElementById(sectionId);


    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    } else {

      navigate(`/#${sectionId}`);

    }

  };


  /* =========================================================
     MOBILE SERVICES DROPDOWN
  ========================================================= */

  const handleServicesClick = (
    e: React.MouseEvent
  ) => {

    if (window.innerWidth <= 768) {

      e.preventDefault();

      setServicesOpen(
        (prev) => !prev
      );

      setSolutionsOpen(false);

    }

  };


  /* =========================================================
     MOBILE SOLUTIONS DROPDOWN
  ========================================================= */

  const handleSolutionsClick = (
    e: React.MouseEvent
  ) => {

    if (window.innerWidth <= 768) {

      e.preventDefault();

      setSolutionsOpen(
        (prev) => !prev
      );

      setServicesOpen(false);

    }

  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <header
      className={`
        sticky-header
        ${scrolled ? "scrolled" : ""}
      `}
    >

      <div className="header-container">


        {/* =====================================================
            LOGO
        ===================================================== */}

        <NavLink
          to="/"
          className="brand-logo-link"
          onClick={() =>
            setMenuOpen(false)
          }
        >

          <img
            src={Complogo}
            alt="Maira Facilities Management"
            className="brand-logo"
          />

        </NavLink>


        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav
          className={`
            main-nav-links
            ${scrolled ? "show-nav" : ""}
            ${menuOpen ? "open" : ""}
          `}
        >

          {navItems.map((item) => {


            /* =================================================
               SERVICES
            ================================================= */

            if (
              item.label === "Services"
            ) {

              return (

                <div
                  key={item.path}
                  className={`
                    nav-dropdown
                    ${
                      servicesOpen
                        ? "dropdown-open"
                        : ""
                    }
                  `}
                  onMouseEnter={() => {

                    if (
                      window.innerWidth > 768
                    ) {

                      setServicesOpen(true);

                    }

                  }}
                  onMouseLeave={() => {

                    if (
                      window.innerWidth > 768
                    ) {

                      setServicesOpen(false);

                    }

                  }}
                >

                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      nav-dropdown-trigger
                      ${
                        isActive ||
                        location.pathname.startsWith(
                          "/services"
                        )
                          ? "active"
                          : ""
                      }
                      `
                    }
                    onClick={
                      handleServicesClick
                    }
                  >

                    <span>
                      {item.label}
                    </span>


                    <ChevronDown
                      size={15}
                      className={`
                        dropdown-arrow
                        ${
                          servicesOpen
                            ? "rotate"
                            : ""
                        }
                      `}
                    />

                  </NavLink>


                  {/* SERVICES DROPDOWN */}

                  <div
                    className={`
                      nav-dropdown-menu
                      ${
                        servicesOpen
                          ? "visible"
                          : ""
                      }
                    `}
                  >

                    {serviceItems.map(
                      (service) => (

                        <NavLink
                          key={service.path}
                          to={service.path}
                          className="nav-dropdown-item"
                          onClick={() => {

                            setServicesOpen(false);

                            setMenuOpen(false);

                          }}
                        >

                          <span>
                            {service.label}
                          </span>

                          <ChevronRight
                            size={15}
                          />

                        </NavLink>

                      )
                    )}

                  </div>

                </div>

              );

            }


            /* =================================================
               SOLUTIONS
            ================================================= */

            if (
              item.label === "Solutions"
            ) {

              return (

                <div
                  key={item.path}
                  className={`
                    nav-dropdown
                    ${
                      solutionsOpen
                        ? "dropdown-open"
                        : ""
                    }
                  `}
                  onMouseEnter={() => {

                    if (
                      window.innerWidth > 768
                    ) {

                      setSolutionsOpen(true);

                    }

                  }}
                  onMouseLeave={() => {

                    if (
                      window.innerWidth > 768
                    ) {

                      setSolutionsOpen(false);

                    }

                  }}
                >

                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      nav-dropdown-trigger
                      ${
                        isActive ||
                        location.pathname.startsWith(
                          "/solutions"
                        )
                          ? "active"
                          : ""
                      }
                      `
                    }
                    onClick={
                      handleSolutionsClick
                    }
                  >

                    <span>
                      {item.label}
                    </span>


                    <ChevronDown
                      size={15}
                      className={`
                        dropdown-arrow
                        ${
                          solutionsOpen
                            ? "rotate"
                            : ""
                        }
                      `}
                    />

                  </NavLink>


                  {/* SOLUTIONS DROPDOWN */}

                  <div
                    className={`
                      nav-dropdown-menu
                      ${
                        solutionsOpen
                          ? "visible"
                          : ""
                      }
                    `}
                  >

                    {solutionItems.map(
                      (solution) => (

                        <NavLink
                          key={solution.path}
                          to={solution.path}
                          className="nav-dropdown-item"
                          onClick={() => {

                            setSolutionsOpen(false);

                            setMenuOpen(false);

                          }}
                        >

                          <span>
                            {solution.label}
                          </span>

                          <ChevronRight
                            size={15}
                          />

                        </NavLink>

                      )
                    )}

                  </div>

                </div>

              );

            }


            /* =================================================
               NORMAL NAVIGATION
            ================================================= */

            return (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setMenuOpen(false)
                }
              >

                {item.label}

              </NavLink>

            );

          })}

        </nav>


        {/* =====================================================
            CTA
        ===================================================== */}

        <a
          className={`
            header-cta-btn
            ${scrolled ? "show-cta" : ""}
          `}
          href="#contact"
          onClick={(e) =>
            scrollToSection(
              e,
              "contact"
            )
          }
        >

          <span>
            Get Started
          </span>

          <ChevronRight
            size={15}
          />

        </a>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <button
          className={`
            mobile-menu-toggle
            ${menuOpen ? "open" : ""}
          `}
          aria-label="Toggle Navigation"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
        >

          <span />
          <span />
          <span />

        </button>


      </div>

    </header>

  );
}


export default Navbar;