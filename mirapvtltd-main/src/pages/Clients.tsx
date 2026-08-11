import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
} from "lucide-react";

import "./Clients.css";
import Navbar from "../components/Navbar";
import Footer from "../sections/FooterSection";

/* =========================================================
   CLIENT IMAGES
========================================================= */

import AurofraImg from "../assets/aurore.png";
import PacksolImg from "../assets/Drreddys.png";
import RtvImg from "../assets/rtv.jpg";
import OrbicularImg from "../assets/Orbicular.png";
import HuhtamakiImg from "../assets/Huhtamaki.png";
import Optimues from "../assets/Optimus.png"
import Voltas from "../assets/voltas.webp"
import Nicho from "../assets/nicho.png"
import Komal from "../assets/komali.webp"



/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    id: 1,
    name: "Aurofra Pharmaceutical",
    category: "Pharmaceutical Industry",
    description:
      "Engineering and facility management solutions supporting pharmaceutical infrastructure and operational requirements.",
    image: AurofraImg,
  },

  {
    id: 2,
    name: "Packsol",
    category: "Industrial Facility",
    location: "Hyderabad, Telangana",
    description:
      "Facility engineering and infrastructure support for industrial operations and critical facility requirements.",
    image: PacksolImg,
  },

  {
    id: 3,
    name: "RTV",
    category: "Media & Infrastructure",
    description:
      "Engineering and facility support solutions for commercial and operational infrastructure.",
    image: RtvImg,
  },

  {
    id: 4,
    name: "Orbicular",
    category: "Industrial Solutions",
    description:
      "Engineering services and facility solutions supporting industrial infrastructure and operational efficiency.",
    image: OrbicularImg,
  },

  {
    id: 5,
    name: "Huhtamaki",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    image: HuhtamakiImg,
  },
  {
    id: 6,
    name: "Optimus",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    image: Optimues,
  },
  {
    id: 7,
    name: "Voltas",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    image: Voltas,
  },
  {
    id: 8,
    name: "Nicho",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    image: Nicho,
  },
  {
    id: 9,
    name: "KKomal",
    category: "Packaging & Manufacturing",
    description:
      "Engineering and facility management support for large-scale manufacturing and industrial environments.",
    image: Komal,
  },
 
];


/* =========================================================
   ANIMATION
========================================================= */

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


/* =========================================================
   CLIENTS PAGE
========================================================= */

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

          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.9,
          }}
        >

          <span className="clients-hero-tag">
            OUR CLIENTS
          </span>


          <h1>

            Trusted By

            <span>
              {" "}
              Industry Leaders
            </span>

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

      {/* <section className="clients-intro">

        <motion.div
          className="clients-intro-content"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={fadeUp}

          transition={{
            duration: 0.8,
          }}
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

      </section> */}



      {/* =====================================================
          CLIENT CAROUSEL
      ===================================================== */}

      <section className="clients-list-section">


        {/* SECTION HEADING */}

        <div className="clients-section-heading">

          <span>
            OUR PARTNERS
          </span>


          <h2>
            Companies We Serve
          </h2>


          <p>
            Delivering professional engineering and facility solutions
            across multiple industries.
          </p>

        </div>



        {/* ===================================================
            CAROUSEL
        =================================================== */}

        <div className="clients-carousel-wrapper">


          <motion.div
            className="clients-carousel-track"

            animate={{
              x: ["0%", "-50%"],
            }}

            transition={{
              duration: 25,

              repeat: Infinity,

              ease: "linear",
            }}
          >


            {/* =================================================
                FIRST CLIENT SET
            ================================================= */}

            {clients.map((client) => (

              <article
                key={`first-${client.id}`}
                className="client-card"
              >


                {/* =================================================
                    CLIENT IMAGE
                ================================================= */}

                <div className="client-image-area">

                  <img
                    src={client.image}
                    alt={`${client.name} logo`}
                    className="client-image"
                  />

                </div>



                {/* =================================================
                    CLIENT CONTENT
                ================================================= */}

                <div className="client-card-content">


                  <span className="client-category">
                    {client.category}
                  </span>


                  <h3>
                    {client.name}
                  </h3>


                  {client.location && (

                    <p className="client-location">

                      <Building2 size={13} />

                      {client.location}

                    </p>

                  )}


                  <p className="client-description">

                    {client.description}

                  </p>


                  <div className="client-project-status">

                    <CheckCircle2 size={14} />

                    <span>
                      Project Partnership
                    </span>

                  </div>


                </div>


                {/* BOTTOM LINE */}

                <div className="client-card-line" />

              </article>

            ))}



            {/* =================================================
                DUPLICATE CLIENT SET
                REQUIRED FOR INFINITE CAROUSEL
            ================================================= */}

            {clients.map((client) => (

              <article
                key={`second-${client.id}`}
                className="client-card"
              >


                {/* CLIENT IMAGE */}

                <div className="client-image-area">

                  <img
                    src={client.image}
                    alt={`${client.name} logo`}
                    className="client-image"
                  />

                </div>



                {/* CLIENT CONTENT */}

                <div className="client-card-content">


                  <span className="client-category">
                    {client.category}
                  </span>


                  <h3>
                    {client.name}
                  </h3>


                  {client.location && (

                    <p className="client-location">

                      <Building2 size={13} />

                      {client.location}

                    </p>

                  )}


                  <p className="client-description">

                    {client.description}

                  </p>


                  <div className="client-project-status">

                    <CheckCircle2 size={14} />

                    <span>
                      Project Partnership
                    </span>

                  </div>


                </div>


                <div className="client-card-line" />

              </article>

            ))}


          </motion.div>

        </div>

      </section>



      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="client-industries-section">


        <div className="clients-section-heading">

          <span>
            INDUSTRIES
          </span>


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


          {/* PHARMACEUTICAL */}

          <motion.div
            className="client-industry-card"

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
            }}

            variants={fadeUp}
          >

            <Building2 size={38} />

            <h3>
              Pharmaceutical
            </h3>

            <p>
              Reliable engineering and facility solutions for
              pharmaceutical environments.
            </p>

          </motion.div>



          {/* MANUFACTURING */}

          <motion.div
            className="client-industry-card"

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
            }}

            variants={fadeUp}
          >

            <Building2 size={38} />

            <h3>
              Manufacturing
            </h3>

            <p>
              Engineering and maintenance support for industrial
              manufacturing facilities.
            </p>

          </motion.div>



          {/* INDUSTRIAL */}

          <motion.div
            className="client-industry-card"

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
            }}

            variants={fadeUp}
          >

            <Building2 size={38} />

            <h3>
              Industrial
            </h3>

            <p>
              Complete facility engineering solutions for demanding
              industrial environments.
            </p>

          </motion.div>



          {/* COMMERCIAL */}

          <motion.div
            className="client-industry-card"

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
            }}

            variants={fadeUp}
          >

            <Building2 size={38} />

            <h3>
              Commercial
            </h3>

            <p>
              Efficient MEP and facility management services for
              commercial infrastructure.
            </p>

          </motion.div>


        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}