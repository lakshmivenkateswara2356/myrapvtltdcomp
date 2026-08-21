import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'
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
  Zap,
  Wind,
  Droplets,
  Flame,
  Building2,
  Settings,
} from 'lucide-react'

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems = [
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

/* =========================================================
   HERO SERVICES
========================================================= */

const heroServices = [
  {
    id: 'electrical',
    title: 'Electrical',
    subtitle: 'Power & Distribution',
    description:
      'Reliable electrical infrastructure and intelligent power distribution systems.',
    icon: Zap,
    number: '01',
  },
  {
    id: 'hvac',
    title: 'HVAC',
    subtitle: 'Climate Control',
    description:
      'Advanced HVAC systems designed for comfort, efficiency and industrial performance.',
    icon: Wind,
    number: '02',
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    subtitle: 'Utility Piping',
    description:
      'Complete plumbing and utility piping solutions for modern facilities.',
    icon: Droplets,
    number: '03',
  },
  {
    id: 'fire-safety',
    title: 'Fire & Safety',
    subtitle: 'Protection Systems',
    description:
      'Integrated fire detection, suppression and life-safety engineering solutions.',
    icon: Flame,
    number: '04',
  },
  {
    id: 'facility',
    title: 'Facility Management',
    subtitle: 'Operations & Maintenance',
    description:
      'End-to-end facility operations, maintenance and engineering support.',
    icon: Building2,
    number: '05',
  },
  {
    id: 'mep',
    title: 'MEP Engineering',
    subtitle: 'Integrated Solutions',
    description:
      'Integrated mechanical, electrical and plumbing engineering for complex projects.',
    icon: Settings,
    number: '06',
  },
]

export default function DarkHeroSection() {
  /* =======================================================
     STATE
  ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false)

  const [, setActiveSection] = useState('home')

  const [activeService, setActiveService] = useState(0)

  const [isServiceHovered, setIsServiceHovered] =
    useState(false)

  /* =======================================================
     ROUTER
  ======================================================= */

 const navigate = useNavigate()
  const location = useLocation()

  /* =======================================================
     SERVICE AUTO CAROUSEL
  ======================================================= */

  useEffect(() => {
    if (isServiceHovered) {
      return
    }

    const interval = setInterval(() => {
      setActiveService(
        (current) =>
          (current + 1) % heroServices.length
      )
    }, 2800)

    return () => clearInterval(interval)
  }, [isServiceHovered])

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */
    const [showVideo, setShowVideo] = useState(true)

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

  useEffect(() => {
    const handleResize = () => {
      setShowVideo(window.innerWidth > 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect()

    const mouseXPos =
      (e.clientX - rect.left) /
        rect.width -
      0.5

    const mouseYPos =
      (e.clientY - rect.top) /
        rect.height -
      0.5

    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  /* =======================================================
     RESET PARALLAX
  ======================================================= */

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  /* =======================================================
     HOME SECTION OBSERVER
  ======================================================= */

  useEffect(() => {
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
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id
              )
            }
          })
        },
        {
          root: null,
          threshold: 0.35,
          rootMargin:
            '-35% 0px -55% 0px',
        }
      )

    sections.forEach((section) =>
      observer.observe(section)
    )

    return () =>
      observer.disconnect()
  }, [location.pathname])

  /* =======================================================
     NAVIGATION
  ======================================================= */

 /* =======================================================
   NAVIGATION
======================================================= */

const handleNavigation = (
  e: React.MouseEvent<HTMLAnchorElement>,
  path: string
) => {
  e.preventDefault()

  setMenuOpen(false)

  navigate(path)

  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
}
  /* =======================================================
     CURRENT SERVICE
  ======================================================= */

  const currentService =
    heroServices[activeService]

  const CurrentIcon =
    currentService.icon

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ===================================================
          MAIN HERO CARD
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
            BACKGROUND LIGHTS
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

          <div className="hero-grid-glow" />

          
        </div>



        {/* =================================================
            BACKGROUND VIDEO (lazy on small screens)
        ================================================= */}

        {showVideo ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="hero-video-fallback"
            aria-hidden="true"
          />
        )}

        

        {/* =================================================
            OVERLAY
        ================================================= */}

        <div className="hero-overlay" />

        {/* =================================================
            NAVBAR
        ================================================= */}

        

        {/* =================================================
            HERO MAIN CONTENT
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
          {/* LOGO */}

          <a
            href="/"
            className="logo"
            aria-label="MAIRA Facilities Management Home"
            onClick={(e) =>
              handleNavigation(e, '/')
            }
          >
            <img
              src={COmpalogog}
              alt="MAIRA Facilities Management"
              className="company-logo"
            />
          </a>

          {/* MOBILE MENU BUTTON */}

          {/* <button
            type="button"
            className={`mobile-toggle ${
              menuOpen ? 'open' : ''
            }`}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
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
          </button> */}

          {/* NAVIGATION */}

       
 <nav
  className={`nav-links ${
    menuOpen ? 'open' : ''
  }`}
  aria-label="Main navigation"
>
  {navItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        isActive ? 'active' : ''
      }
      onClick={(e) => {
        e.preventDefault()

        console.log('Hero navbar clicked:', item.path)

        setMenuOpen(false)

        navigate(item.path)

        window.scrollTo({
          top: 0,
          behavior: 'auto',
        })
      }}
    >
      {item.label}
    </NavLink>
  ))}
</nav>
          {/* CONTACT BUTTON */}

          

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
            {/* BADGE */}

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

            {/* ENGINEERING CONTENT */}

            <div className="engineeringconten">
              {/* HEADING */}

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

              {/* DESCRIPTION */}

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
                Delivering end-to-end MEP,
                HVAC, Fire Protection,
                Electrical Infrastructure,
                Plumbing and Specialized
                Industrial Engineering
                solutions across commercial,
                industrial and cleanroom
                environments.
              </motion.p>
            </div>

            {/* CTA BUTTONS */}

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

          {/* =================================================
              RIGHT SERVICE AREA
          ================================================= */}

          <motion.div
            className="hero-service-area"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            onMouseEnter={() =>
              setIsServiceHovered(true)
            }
            onMouseLeave={() =>
              setIsServiceHovered(false)
            }
          >
            {/* SERVICE LABEL */}

            <div className="service-carousel-label">
              <span className="service-live-dot" />

              <span>
                OUR CORE SERVICES
              </span>
            </div>

            {/* MAIN SERVICE CARD */}

            <motion.a
              href="/services"
              className="hero-service-card"
              onClick={(e) =>
                handleNavigation(
                  e,
                  '/services'
                )
              }
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* GLOW */}

              <div className="service-card-glow" />

              {/* CARD HEADER */}

              <div className="service-card-top">
                <div className="service-icon-box">
                  <motion.div
                    key={
                      currentService.id
                    }
                    initial={{
                      scale: 0.5,
                      rotate: -20,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    <CurrentIcon
                      size={16}
                      strokeWidth={1.7}
                    />
                  </motion.div>
                </div>

                <span className="service-number">
                  {currentService.number}
                </span>
              </div>

              {/* SERVICE CONTENT */}

              <motion.div
                key={
                  currentService.id
                }
                className="service-card-content"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <span className="service-subtitle">
                  {currentService.subtitle}
                </span>

                <h2>
                  {currentService.title}
                </h2>

                <p>
                  {currentService.description}
                </p>
              </motion.div>

              {/* CARD FOOTER */}

              <div className="service-card-footer">
                <span>
                  Explore Service
                </span>

                <span className="service-arrow">
                  <ArrowRight
                    size={17}
                  />
                </span>
              </div>
            </motion.a>

            {/* CAROUSEL DOTS */}

            <div
              className="service-carousel-dots"
              role="tablist"
              aria-label="Services"
            >
              {heroServices.map(
                (
                  service,
                  index
                ) => (
                  <button
                    type="button"
                    key={
                      service.id
                    }
                    className={
                      index ===
                      activeService
                        ? 'active'
                        : ''
                    }
                    aria-label={`Show ${service.title}`}
                    aria-selected={
                      index ===
                      activeService
                    }
                    onClick={() =>
                      setActiveService(
                        index
                      )
                    }
                  />
                )
              )}
            </div>

            {/* MINI SERVICE CARDS */}

            <div className="mini-service-list">
              {heroServices
                .filter(
                  (_, index) =>
                    index !==
                    activeService
                )
                .slice(0, 3)
                .map(
                  (service) => {
                    const Icon =
                      service.icon

                    const serviceIndex =
                      heroServices.findIndex(
                        (item) =>
                          item.id ===
                          service.id
                      )

                    return (
                      <button
                        type="button"
                        key={
                          service.id
                        }
                        className="mini-service-card"
                        onClick={() =>
                          setActiveService(
                            serviceIndex
                          )
                        }
                      >
                        <span className="mini-icon">
                          <Icon
                            size={15}
                          />
                        </span>

                        <span>
                          {
                            service.title
                          }
                        </span>
                      </button>
                    )
                  }
                )}
            </div>
          </motion.div>
        </div>

        {/* =================================================
            STATS
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
            <h3>15+</h3>

            <span>
              Years Experience
            </span>
          </div>

          <div className="stat-card">
            <h3>250+</h3>

            <span>
              Completed Projects
            </span>
          </div>

          <div className="stat-card">
            <h3>100%</h3>

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
          aria-hidden="true"
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