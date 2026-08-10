import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

import "./Clients.css";
import Navbar from "../components/Navbar";
import Footer from "../sections/FooterSection";

const clients = [
  {
    id: 1,
    name: "Aurofra Pharmaceutical",
    category: "Pharmaceutical Industry",
    description:
      "Engineering and facility management solutions supporting pharmaceutical infrastructure and operational requirements.",
    logoText: "AUROFRA",
    logoSubText: "PHARMACEUTICAL",
  },
  {
    id: 2,
    name: "Packsol",
    category: "Industrial Facility",
    location: "Hyderabad, Telangana",
    description:
      "Facility engineering and infrastructure support for industrial operations and critical facility requirements.",
    logoText: "PACKSOL",
    logoSubText: "HYDERABAD",
  },
  {
    id: 3,
    name: "RTV",
    category: "Media & Infrastructure",
    description:
      "Engineering and facility support solutions for commercial and operational infrastructure.",
    logoText: "RTV",
    logoSubText: "",
  },
  {
    id: 4,
    name: "Orbicular",
    category: "Industrial Solutions",
    description:
      "Engineering services and facility solutions supporting industrial infrastructure and operational efficiency.",
    logoText: "ORBICULAR",
    logoSubText: "Performance Excellence • Delivered",
  },
  {
    id: 5,
    name: "Huhtamaki",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    logoText: "Huhtamaki",
    logoSubText: "",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Clients() {
  return (
    <main className="clients-page">
      <Navbar />

      {/* =====================================================
          CLIENTS HERO
      ===================================================== */}

      <section className="clients-hero">
        <div className="clients-hero-glow clients-hero-glow-one" />
        <div className="clients-hero-glow clients-hero-glow-two" />

        <motion.div
          className="clients-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="clients-hero-tag">
            OUR CLIENTS
          </span>

          <h1>
            Trusted By
            <span> Industry Leaders</span>
          </h1>

          <p>
            We work with organizations across pharmaceutical,
            manufacturing, industrial, commercial and infrastructure
            sectors, delivering reliable engineering and facility
            management solutions.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CLIENT INTRO
      ===================================================== */}

      <section className="clients-intro">
        <motion.div
          className="clients-intro-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <span className="clients-section-tag">
            FINISHED & ONGOING PROJECTS
          </span>

          <h2>
            Building Strong Partnerships
            <br />
            Through Engineering Excellence
          </h2>

          <p>
            Our clients trust MAIRA Facilities Management to deliver
            dependable engineering, maintenance and facility management
            solutions. Every project is approached with a commitment
            to safety, quality, efficiency and long-term performance.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CLIENT GRID
      ===================================================== */}

      <section className="clients-list-section">
        <div className="clients-section-heading">
          <span>OUR PARTNERS</span>
          <h2>Companies We Serve</h2>
          <p>
            Delivering professional engineering and facility solutions
            across multiple industries.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.article
              key={client.id}
              className="client-card"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              {/* Logo Area */}

              <div className="client-logo-area">
                <div
                  className={`client-logo client-logo-${client.id}`}
                >
                  <strong>{client.logoText}</strong>

                  {client.logoSubText && (
                    <small>{client.logoSubText}</small>
                  )}
                </div>
              </div>

              {/* Card Content */}

              <div className="client-card-content">
                <span className="client-category">
                  {client.category}
                </span>

                <h3>{client.name}</h3>

                {client.location && (
                  <p className="client-location">
                    <Building2 size={15} />
                    {client.location}
                  </p>
                )}

                <p className="client-description">
                  {client.description}
                </p>

                <div className="client-project-status">
                  <CheckCircle2 size={17} />
                  <span>Project Partnership</span>
                </div>
              </div>

              <div className="client-card-line" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="client-industries-section">
        <div className="clients-section-heading">
          <span>INDUSTRIES</span>

          <h2>
            Supporting Critical
            <br />
            Infrastructure
          </h2>

          <p>
            Our engineering expertise enables us to support diverse
            industries with specialized facility management solutions.
          </p>
        </div>

        <div className="client-industry-grid">
          <motion.div
            className="client-industry-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Building2 size={38} />

            <h3>Pharmaceutical</h3>

            <p>
              Reliable engineering and facility solutions for
              pharmaceutical environments.
            </p>
          </motion.div>

          <motion.div
            className="client-industry-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Building2 size={38} />

            <h3>Manufacturing</h3>

            <p>
              Engineering and maintenance support for industrial
              manufacturing facilities.
            </p>
          </motion.div>

          <motion.div
            className="client-industry-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Building2 size={38} />

            <h3>Industrial</h3>

            <p>
              Complete facility engineering solutions for demanding
              industrial environments.
            </p>
          </motion.div>

          <motion.div
            className="client-industry-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Building2 size={38} />

            <h3>Commercial</h3>

            <p>
              Efficient MEP and facility management services for
              commercial infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="clients-cta-section">
        <div className="clients-cta-card">
          <div className="clients-cta-glow" />

          <motion.div
            className="clients-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span>LET'S WORK TOGETHER</span>

            <h2>
              Ready to Build
              <br />
              Something Better?
            </h2>

            <p>
              Partner with MAIRA Facilities Management for reliable
              engineering, facility management and infrastructure
              solutions.
            </p>

            <div className="clients-cta-buttons">
              <a
                href="/contact"
                className="clients-primary-btn"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="clients-contact-info">
              <div>
                <Phone size={18} />
                <span>+91 9160525849</span>
              </div>

              <div>
                <Mail size={18} />
                <span>Service@mairafm.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        <Footer/>
    </main>
  );
}