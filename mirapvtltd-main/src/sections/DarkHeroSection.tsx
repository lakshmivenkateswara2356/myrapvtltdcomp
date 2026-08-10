import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import './Hero.css'

import heroVideo from '../assets/aivediolog.mp4'
import COmpalogog from '../assets/complogo.png'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import {
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react'

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems = [
  // {
  //   path: '/',
  //   label: 'Home',
  // },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/services',
    label: 'Services',
  },
  {
    path: '/why-choose-us',
    label: 'Why Choose Us',
  },
  {
    path: '/clients',
    label: 'Clients',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]

export default function DarkHeroSection() {

  /* =======================================================
     STATE
  ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState('home')

  /* =======================================================
     ROUTER
  ======================================================= */

  const navigate = useNavigate()

  const location = useLocation()

  /* =======================================================
     MOUSE MOVEMENT PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = {
    damping: 25,
    stiffness: 150,
  }

  const mouseXSpring = useSpring(
    mouseX,
    springConfig
  )

  const mouseYSpring = useSpring(
    mouseY,
    springConfig
  )

  const heroParallaxX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-12, 12]
  )

  const heroParallaxY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [-12, 12]
  )

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const rect =
      e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseXPos =
      (e.clientX - rect.left) /
        width -
      0.5

    const mouseYPos =
      (e.clientY - rect.top) /
        height -
      0.5

    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  /* =======================================================
     HOME SECTION OBSERVER
     
     IMPORTANT:
     This is ONLY for sections that actually exist
     inside the Home page.
  ======================================================= */

  useEffect(() => {

    /*
      Only observe sections that are actually part
      of the Home page.

      Do NOT include About / Services / Clients etc.
      because those are now separate routes.
    */

    if (location.pathname !== '/') {
      return
    }

    const sectionIds = [
      'home',
      'about',
      'services',
      'why-us',
      'clients',
      'contact',
    ]

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) {
      return
    }

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                setActiveSection(
                  entry.target.id
                )

              }

            }
          )

        },
        {
          root: null,

          threshold: 0.35,

          rootMargin:
            '-35% 0px -55% 0px',
        }
      )

    sections.forEach(
      (section) =>
        observer.observe(section)
    )

    return () =>
      observer.disconnect()

  }, [location.pathname])

  /* =======================================================
     NAVBAR PAGE NAVIGATION
     
     This is the important change.
     
     Navbar items now navigate to actual React Router
     pages instead of looking for IDs on the Home page.
  ======================================================= */

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {

    e.preventDefault()

    setMenuOpen(false)

    /*
      If already on the same page,
      simply scroll to top.
    */

    if (
      location.pathname === path
    ) {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    /*
      Navigate to the separate page.
    */

    navigate(path)

    /*
      Make sure new page starts from top.
    */

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }

  /* =======================================================
     HOME SECTION SCROLL
     
     Used ONLY by buttons such as:
     Explore Services
     View Projects
  ======================================================= */

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {

    e.preventDefault()

    setMenuOpen(false)

    /*
      If the section exists on the current page,
      scroll to it.
    */

    const element =
      document.getElementById(id)

    if (element) {

      const offset = 80

      const bodyRect =
        document.body
          .getBoundingClientRect()
          .top

      const elementRect =
        element
          .getBoundingClientRect()
          .top

      const elementPosition =
        elementRect -
        bodyRect

      const offsetPosition =
        elementPosition -
        offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      /*
        Update URL hash.
      */

      window.history.pushState(
        null,
        '',
        `#${id}`
      )

      return
    }

    /*
      If section doesn't exist on the current page,
      navigate to Home first.

      Example:
      User is on /about and clicks a Home section.
    */

    navigate(`/#${id}`)
  }

  /* =======================================================
     RETURN
  ======================================================= */

  return (

    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
    >

      {/* ===================================================
          HERO CARD
      =================================================== */}

      <motion.div
        className="hero-card"

        initial={{
          opacity: 0,
          scale: 0.98,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.8,
          ease: [
            0.16,
            1,
            0.3,
            1,
          ],
        }}
      >

        {/* =================================================
            BACKGROUND GLOW LIGHTS
        ================================================= */}

        <div className="hero-bg-lights">

          <motion.div
            className="glow-orb orb-1"

            animate={{
              scale: [
                1,
                1.2,
                1,
              ],

              opacity: [
                0.35,
                0.6,
                0.35,
              ],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="glow-orb orb-2"

            animate={{
              scale: [
                1.2,
                1,
                1.2,
              ],

              opacity: [
                0.4,
                0.7,
                0.4,
              ],
            }}

            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

        </div>

        {/* =================================================
            BACKGROUND VIDEO
        ================================================= */}

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >

          <source
            src={heroVideo}
            type="video/mp4"
          />

        </video>

        {/* =================================================
            DARK OVERLAY
        ================================================= */}

        <div className="hero-overlay" />

        {/* =================================================
            NAVBAR
        ================================================= */}

        <motion.header
          className="hero-navbar"

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <div className="logo">

            <img
              src={COmpalogog}
              alt="Company Logo"
              className="company-logo"
            />

          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <button
            className={`mobile-toggle ${
              menuOpen
                ? 'open'
                : ''
            }`}

            aria-label="Toggle menu"

            aria-expanded={
              menuOpen
            }

            onClick={() =>
              setMenuOpen(
                (current) =>
                  !current
              )
            }
          >

            <span />
            <span />
            <span />

          </button>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav
            className={`nav-links ${
              menuOpen
                ? 'open'
                : ''
            }`}
          >

            {navItems.map(
              (item) => (

                <a
                  key={item.path}

                  href={item.path}

                  className={
                    location.pathname ===
                    item.path
                      ? 'active'
                      : ''
                  }

                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.path
                    )
                  }
                >

                  {item.label}

                </a>

              )
            )}

          </nav>

          {/* =================================================
              GET STARTED
          ================================================= */}

          <a
            className="contact-btn"

            href="/contact"

            onClick={(e) =>
              handleNavigation(
                e,
                '/contact'
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

        </motion.header>

        {/* =================================================
            HERO BODY
        ================================================= */}

        <div className="hero-body-grid">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            className="hero-content"

            style={{
              x: heroParallaxX,
              y: heroParallaxY,
            }}
          >

            {/* =================================================
                BADGE
            ================================================= */}

            <motion.div
              className="badge"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >

              <span className="badge-dot" />

              <Sparkles
                size={13}
                className="sparkle-icon"
              />

              <span>
                ENGINEERING EXCELLENCE
              </span>

            </motion.div>

            {/* =================================================
                ENGINEERING CONTENT
            ================================================= */}

            <div className="engineeringconten">

              {/* =================================================
                  HEADING
              ================================================= */}

              <motion.h1

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
              >

                Smart Engineering

                <br />

                <span className="hero-gradient-text">
                  For Modern Industries
                </span>

              </motion.h1>

              {/* =================================================
                  PARAGRAPH
              ================================================= */}

              <motion.p
                className="paragraphs"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
              >

                Delivering end-to-end MEP, HVAC,
                Fire Protection, Electrical
                Infrastructure, Plumbing and
                Specialized Industrial Engineering
                solutions across commercial,
                industrial and cleanroom
                environments.

              </motion.p>

            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              className="hero-buttons"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
            >

              {/* Explore Services */}

              <a
                className="primary"

                href="/services"

                onClick={(e) =>
                  handleNavigation(
                    e,
                    '/services'
                  )
                }
              >

                <span>
                  Explore Services
                </span>

                <ArrowRight
                  size={17}
                  className="btn-arrow"
                />

              </a>

              {/* View Projects */}

              <a
                className="secondary"

                href="/clients"

                onClick={(e) =>
                  handleNavigation(
                    e,
                    '/clients'
                  )
                }
              >

                <span>
                  View Projects
                </span>

              </a>

            </motion.div>

          </motion.div>

        </div>

        {/* =================================================
            FLOATING STATS
        ================================================= */}

        <motion.div
          className="hero-stats"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >

          <div className="stat-card">

            <h3>
              15+
            </h3>

            <span>
              Years Experience
            </span>

          </div>

          <div className="stat-card">

            <h3>
              250+
            </h3>

            <span>
              Completed Projects
            </span>

          </div>

          <div className="stat-card">

            <h3>
              100%
            </h3>

            <span>
              Client Satisfaction
            </span>

          </div>

        </motion.div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          className="scroll-indicator"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 1,
          }}
        >

          <span />

        </motion.div>

      </motion.div>

      {/* ===================================================
          SOCIAL ICONS
      =================================================== */}

      <motion.div
        className="socials"

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
      >

        <a
          href="#"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </motion.div>

    </section>
  )
}