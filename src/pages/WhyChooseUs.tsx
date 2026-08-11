import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Clock3,
  BadgeCheck,
  Settings,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Target,
} from "lucide-react";

import "./WhyChooseUs.css";
import Navbar from "../components/Navbar";

import WhyChooseImage from "../assets/myraimg.png";
import Footer from "../sections/FooterSection";


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

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


/* =========================================================
   WHY CHOOSE US FEATURES
========================================================= */

const advantages = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Safety is at the core of every engineering, maintenance and facility management operation we undertake.",
  },

  {
    icon: Award,
    title: "Quality Excellence",
    text: "We maintain high-quality standards across every stage of planning, execution and maintenance.",
  },

  {
    icon: Users,
    title: "Experienced Team",
    text: "Our experienced engineering and facility management professionals bring practical industry expertise to every project.",
  },

  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    text: "We use modern technologies and innovative engineering approaches to create smarter and more efficient solutions.",
  },

  {
    icon: Clock3,
    title: "24/7 Support",
    text: "Our support and maintenance services are designed to ensure reliable operations whenever our clients need us.",
  },

  {
    icon: BadgeCheck,
    title: "Reliable Service",
    text: "We focus on consistent delivery, dependable maintenance and long-term performance.",
  },

  {
    icon: Settings,
    title: "Complete Solutions",
    text: "From MEP and HVAC to fire protection and facility management, we provide integrated engineering solutions.",
  },

  {
    icon: Headphones,
    title: "Customer Focus",
    text: "We understand our clients' requirements and work closely with them to deliver solutions that exceed expectations.",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding your facility, requirements, challenges and operational goals.",
  },

  {
    number: "02",
    title: "Plan",
    text: "Our engineering team develops a practical and efficient solution based on project requirements.",
  },

  {
    number: "03",
    title: "Execute",
    text: "Our experienced professionals execute the project with strong focus on quality, safety and timelines.",
  },

  {
    number: "04",
    title: "Support",
    text: "We continue to support and maintain your facility for reliable long-term performance.",
  },
];


/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  "Commercial Buildings",
  "Industrial Plants",
  "Healthcare Facilities",
  "Hotels & Resorts",
  "Educational Institutions",
  "Government Projects",
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhyChooseUs() {
  return (
    <main className="why-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="why-hero">

        <img
          src={WhyChooseImage}
          alt="Why Choose Maira"
          className="why-hero-image"
        />

        <div className="why-hero-overlay" />

        <motion.div
          className="why-hero-content"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <span className="why-hero-tag">
            WHY CHOOSE MAIRA
          </span>

          <h1>
            Engineering Excellence
            <br />

            <span>
              You Can Trust
            </span>
          </h1>

          <p>
            Reliable engineering, facility management and
            infrastructure solutions designed around quality,
            safety, innovation and long-term performance.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="why-intro">

        <motion.div
          className="why-intro-image"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <img
            src={WhyChooseImage}
            alt="Maira Engineering Team"
          />

          <div className="why-image-badge">

            <Target size={28} />

            <div>
              <strong>
                Client Focused
              </strong>

              <span>
                Engineering Solutions
              </span>
            </div>

          </div>

        </motion.div>


        <motion.div
          className="why-intro-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <span className="why-section-tag">
            WHY MAIRA
          </span>

          <h2>
            More Than Engineering.
            <br />
            <span>We Build Confidence.</span>
          </h2>

          <p>
            Choosing the right engineering and facility management
            partner is essential for the performance, safety and
            reliability of your infrastructure.
          </p>

          <p>
            At Maira Facilities Management, we combine engineering
            expertise, modern technology and a customer-first
            approach to deliver dependable solutions across
            commercial, industrial, healthcare, hospitality and
            government environments.
          </p>

          <div className="why-check-list">

            <div>
              <CheckCircle2 size={20} />
              <span>
                Experienced engineering professionals
              </span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>
                Integrated engineering solutions
              </span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>
                Strong quality and safety standards
              </span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>
                Long-term client relationships
              </span>
            </div>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          ADVANTAGES
      ===================================================== */}

      <section className="why-advantages">

        <div className="why-title-center">

          <span>
            OUR ADVANTAGES
          </span>

          <h2>
            Why Clients Choose Us
          </h2>

          <p>
            We combine technical expertise, reliability and
            customer-focused service to deliver engineering
            solutions that create long-term value.
          </p>

        </div>


        <div className="why-advantages-grid">

          {advantages.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="why-advantage-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.05,
                }}
              >

                <div className="why-icon-box">
                  <Icon size={30} />
                </div>

                <span className="why-card-number">
                  0{index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="why-card-line" />

              </motion.div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="why-process">

        <div className="why-title-center">

          <span>
            OUR APPROACH
          </span>

          <h2>
            From Requirement to Reliability
          </h2>

          <p>
            A structured approach that keeps every project
            efficient, transparent and focused on results.
          </p>

        </div>


        <div className="why-process-grid">

          {processSteps.map((step, index) => (

            <motion.div
              key={step.number}
              className="why-process-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >

              <div className="why-process-number">
                {step.number}
              </div>

              <div className="why-process-icon">
                <ArrowRight size={22} />
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="why-industries">

        <div className="why-title-center">

          <span>
            INDUSTRIES
          </span>

          <h2>
            Built for Different Environments
          </h2>

          <p>
            Our engineering and facility management capabilities
            support a wide range of demanding environments.
          </p>

        </div>


        <div className="why-industry-grid">

          {industries.map((industry, index) => (

            <motion.div
              key={industry}
              className="why-industry-card"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {industry}
              </h3>

              <ArrowRight size={20} />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="why-cta">

        <motion.div
          className="why-cta-box"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="why-cta-glow" />

          <span>
            LET'S WORK TOGETHER
          </span>

          <h2>
            Ready to Build Better
            Infrastructure?
          </h2>

          <p>
            Partner with Maira Facilities Management for
            dependable engineering, facility management and
            infrastructure solutions.
          </p>

          <button>
            Contact Us
            <ArrowRight size={18} />
          </button>

        </motion.div>

      </section>
  <Footer/>
    </main>
  );
}