import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../sections/FooterSection"

import HeroImage from "../assets/myraimg.png";
import OfficeImage from "../assets/myrabuildingcompnya.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace modern engineering technologies to deliver smarter, sustainable and efficient facility solutions.",
  },
  {
    icon: Award,
    title: "Quality",
    text: "Every project follows strict quality standards ensuring long-lasting performance and customer satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Safety is our highest priority across every engineering and maintenance operation.",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "Understanding client requirements and exceeding expectations is at the heart of everything we do.",
  },
];

// const timeline = [
//   {
//     year: "2015",
//     title: "Company Founded",
//     text: "Started with a vision of delivering world-class engineering services.",
//   },
//   {
//     year: "2018",
//     title: "Industrial Expansion",
//     text: "Expanded into industrial maintenance and facility management.",
//   },
//   {
//     year: "2021",
//     title: "Large Scale Projects",
//     text: "Successfully completed several commercial infrastructure projects.",
//   },
//   {
//     year: "2024",
//     title: "500+ Projects",
//     text: "Crossed 500 successful engineering and facility management projects.",
//   },
// ];

const stats = [
  { number: "15+", title: "Years Experience" },
  { number: "500+", title: "Projects Completed" },
  { number: "150+", title: "Happy Clients" },
  { number: "24/7", title: "Support" },
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
<Navbar/>
      <section className="about-hero">
        
        <img src={HeroImage} alt="About Maira" className="about-hero-image" />

        <div className="about-hero-overlay" />

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <p>WELCOME TO MAIRA</p>

          <h1>ABOUT US</h1>

          <span>
            Engineering Excellence • Trusted Facility Management • Sustainable
            Infrastructure
          </span>
        </motion.div>
      </section>

      {/* COMPANY */}

      <section className="company-section">

        <motion.div
          className="company-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img src={OfficeImage} alt="" />
        </motion.div>

        <motion.div
          className="company-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">
            ABOUT MAIRA
          </span>

          <h2>
            Building Better Infrastructure Through Innovation &
            Engineering Excellence
          </h2>

          <p>
            Maira Facilities Management is a leading engineering and
            facility management company delivering complete MEP,
            HVAC, Electrical, Fire Protection, Plumbing and
            Industrial Engineering solutions.
          </p>

          <p>
            Our experienced engineers combine innovation,
            technology and industry expertise to provide reliable,
            cost-effective and sustainable engineering services
            across commercial, industrial, healthcare,
            hospitality and government sectors.
          </p>

          <div className="company-buttons">

            <button>
              Explore Services
              <ArrowRight size={18} />
            </button>

          </div>
        </motion.div>
      </section>

      {/* MISSION */}

      <section className="mission-section">

        <motion.div
          className="mission-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Target size={42} />

          <h3>Our Mission</h3>

          <p>
            To provide innovative engineering and facility
            management solutions that maximize operational
            efficiency while ensuring safety, quality and
            sustainability.
          </p>
        </motion.div>

        <motion.div
          className="mission-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Eye size={42} />

          <h3>Our Vision</h3>

          <p>
            To become India's most trusted engineering and
            facility management company delivering world-class
            infrastructure solutions.
          </p>
        </motion.div>

      </section>

      {/* VALUES */}

      <section className="values-section">

        <div className="title-center">
          <span>OUR VALUES</span>

          <h2>Core Values That Drive Us</h2>
        </div>

        <div className="values-grid">

          {values.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                className="value-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true }}
              >

                <Icon size={45} />

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </motion.div>

            );

          })}

        </div>

      </section>

            {/* TIMELINE */}

      {/* <section className="timeline-section">

        <div className="title-center">
          <span>OUR JOURNEY</span>
          <h2>Milestones That Define Our Growth</h2>
        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              key={item.year}
              className="timeline-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
            >

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </section> */}



      {/* INDUSTRIES */}

      <section className="industries-section">

        <div className="title-center">
          <span>OUR EXPERTISE</span>
          <h2>Industries We Serve</h2>
        </div>

        <div className="industry-grid">

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Commercial Buildings</h3>
          </div>

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Industrial Plants</h3>
          </div>

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Healthcare</h3>
          </div>

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Hotels & Resorts</h3>
          </div>

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Educational Institutions</h3>
          </div>

          <div className="industry-card">
            <Building2 size={42}/>
            <h3>Government Projects</h3>
          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="stats-section">

        <div className="stats-grid">

          {stats.map((item)=>(

            <motion.div
              key={item.title}
              className="stat-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once:true }}
            >

              <h2>{item.number}</h2>

              <span>{item.title}</span>

            </motion.div>

          ))}

        </div>

      </section>



      {/* LEADERSHIP */}

      <section className="leadership-section">

        <div className="title-center">
          <span>OUR LEADERSHIP</span>
          <h2>Driven by Experience & Innovation</h2>
        </div>

        <motion.div
          className="leadership-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once:true }}
        >

          <div className="leadership-icon">
            <Users size={60}/>
          </div>

          <div>

            <p>

              Our experienced engineering professionals and facility
              management experts are committed to delivering
              innovative, reliable and sustainable infrastructure
              solutions.

            </p>

            <p>

              Every project reflects our dedication to quality,
              safety, transparency and long-term client
              relationships.

            </p>

          </div>

        </motion.div>

      </section>



      {/* CTA */}

      <section className="about-cta">

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
        >

          <h2>
            Let's Build Better Infrastructure Together
          </h2>

          <p>

            Partner with MAIRA Facilities Management for
            engineering excellence, innovative solutions and
            long-term reliability.

          </p>

          <button>

            Contact Us

            <ArrowRight size={18}/>

          </button>

        </motion.div>
        

      </section>
        <Footer/>

    </main>

  

  );

}