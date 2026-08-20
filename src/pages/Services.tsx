import { ArrowRight, Building2, Flame, Droplets, Settings, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";

import ElectricalImg from "../assets/electrical.png";
import HVACImg from "../assets/HOAC.png";
import FireSafetyImg from "../assets/Firesafty.png";
import PlumbingImg from "../assets/Plumbingand.png";
import FacilityImg from "../assets/electrical.png";

const services = [
  {
    id: "electrical-engineering",
    title: "Electrical Engineering",
    shortTitle: "Electrical",
    description:
      "Complete electrical engineering solutions designed for safe, reliable and energy-efficient infrastructure.",
    image: ElectricalImg,
    icon: Zap,
  },
  {
    id: "hvac",
    title: "HVAC",
    shortTitle: "HVAC",
    description:
      "Advanced HVAC solutions for comfortable, efficient and controlled indoor environments.",
    image: HVACImg,
    icon: Settings,
  },
  {
    id: "fire-safety",
    title: "Fire & Safety",
    shortTitle: "Fire & Safety",
    description:
      "Integrated fire protection and safety systems designed to protect people, assets and infrastructure.",
    image: FireSafetyImg,
    icon: Flame,
  },
  {
    id: "plumbing-pipeline",
    title: "Plumbing & Pipeline",
    shortTitle: "Plumbing",
    description:
      "Professional plumbing and pipeline engineering solutions for commercial and industrial facilities.",
    image: PlumbingImg,
    icon: Droplets,
  },
  {
    id: "facility-management",
    title: "Facility Management",
    shortTitle: "Facility Management",
    description:
      "Complete facility management services focused on operational efficiency, maintenance and reliability.",
    image: FacilityImg,
    icon: Building2,
  },
];

export default function Services() {
  const navigate = useNavigate();

  const openService = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <main className="services-page">

      <Navbar />

      {/* HERO */}
      <section className="services-hero">

        <div className="services-hero-content">

          <span className="services-tag">
            OUR SERVICES
          </span>

          <h1>
            Engineering Solutions
            <span> Built for Excellence</span>
          </h1>

          <p>
            From electrical engineering and HVAC to fire protection,
            plumbing and facility management, MAIRA delivers complete
            engineering solutions for modern infrastructure.
          </p>

        </div>

      </section>


      {/* SERVICES INTRO */}
      <section className="services-intro">

        <div className="services-intro-content">

          <span className="services-section-tag">
            WHAT WE DO
          </span>

          <h2>
            Complete Engineering & Facility Solutions
          </h2>

          <p>
            We provide integrated engineering and facility management
            services designed to improve safety, efficiency,
            reliability and long-term performance.
          </p>

        </div>

      </section>


      {/* SERVICES GRID */}
      <section className="services-grid-section">

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <article
                key={service.id}
                className={`service-card service-card-${index + 1}`}
                onClick={() => openService(service.id)}
              >

                {/* IMAGE */}
                <div className="service-card-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-image-overlay" />

                  <div className="service-card-number">
                    0{index + 1}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="service-card-content">

                  <div className="service-icon">
                    <Icon size={28} />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openService(service.id);
                    }}
                  >
                    Explore Service

                    <ArrowRight size={18} />

                  </button>

                </div>

              </article>

            );

          })}

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <div className="services-cta-inner">

          <span>
            ENGINEERING WITH PURPOSE
          </span>

          <h2>
            Let's Build Better Infrastructure Together
          </h2>

          <p>
            Talk to our engineering team about your next project,
            maintenance requirement or facility management needs.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}