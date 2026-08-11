import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";

import ElectricalImg from "../assets/electrical.png";
import HVACImg from "../assets/HOAC.png";
import FireSafetyImg from "../assets/Firesafty.png";
import PlumbingImg from "../assets/Plumbingand.png";
import FacilityImg from "../assets/electrical.png";

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  overview: string;
  services: string[];
};

const serviceData: Record<string, ServiceData> = {

  "electrical-engineering": {
    title: "Electrical Engineering",
    subtitle: "Reliable Power. Intelligent Engineering. Better Performance.",
    description:
      "Our electrical engineering solutions are designed to provide safe, reliable and energy-efficient power systems for commercial, industrial and institutional facilities.",
    image: ElectricalImg,
    overview:
      "MAIRA provides complete electrical engineering services covering power distribution, electrical installations, testing, maintenance and energy management. Our engineering team focuses on safety, efficiency and long-term system reliability.",
    services: [
      "Electrical Design & Engineering",
      "Power Distribution Systems",
      "Electrical Installation",
      "LT & HT Systems",
      "Lighting Systems",
      "Electrical Testing & Commissioning",
      "Preventive Electrical Maintenance",
      "Energy Efficiency Solutions",
    ],
  },


  hvac: {
    title: "HVAC",
    subtitle: "Comfortable Environments. Efficient Systems. Reliable Performance.",
    description:
      "We deliver complete HVAC engineering solutions that provide efficient temperature control, ventilation and air quality for modern facilities.",
    image: HVACImg,
    overview:
      "Our HVAC services cover system design, installation, commissioning, maintenance and optimization. We help facilities maintain comfortable and controlled environments while improving energy efficiency and operational reliability.",
    services: [
      "HVAC Design & Engineering",
      "Air Conditioning Systems",
      "Central HVAC Systems",
      "Ventilation Systems",
      "Air Handling Units",
      "Ducting & Air Distribution",
      "HVAC Maintenance",
      "Energy Optimization",
    ],
  },


  "fire-safety": {
    title: "Fire & Safety",
    subtitle: "Protecting People. Protecting Assets. Protecting Infrastructure.",
    description:
      "Our fire and safety solutions are designed to provide reliable protection against fire hazards and emergency situations.",
    image: FireSafetyImg,
    overview:
      "We provide integrated fire protection and safety solutions for commercial, industrial and institutional facilities. Our approach combines reliable systems, proper installation and regular maintenance.",
    services: [
      "Fire Detection Systems",
      "Fire Alarm Systems",
      "Fire Fighting Systems",
      "Fire Hydrant Systems",
      "Sprinkler Systems",
      "Emergency & Safety Systems",
      "Fire Equipment Maintenance",
      "Safety System Inspection",
    ],
  },


  "plumbing-pipeline": {
    title: "Plumbing & Pipeline",
    subtitle: "Efficient Flow. Reliable Infrastructure. Professional Engineering.",
    description:
      "We provide complete plumbing and pipeline engineering solutions for commercial, industrial and institutional infrastructure.",
    image: PlumbingImg,
    overview:
      "Our plumbing and pipeline services cover water supply, drainage, sanitary systems and industrial pipeline requirements. We focus on efficient flow management, durability and reliable operation.",
    services: [
      "Plumbing Design & Engineering",
      "Water Supply Systems",
      "Drainage Systems",
      "Sanitary Systems",
      "Industrial Pipelines",
      "Pump & Water Systems",
      "Pipeline Installation",
      "Plumbing Maintenance",
    ],
  },


  "facility-management": {
    title: "Facility Management",
    subtitle: "Smarter Operations. Better Maintenance. Long-Term Reliability.",
    description:
      "Our facility management services help organizations maintain safe, efficient and reliable facilities through professional engineering and maintenance operations.",
    image: FacilityImg,
    overview:
      "MAIRA provides integrated facility management services combining technical maintenance, engineering support, preventive maintenance and operational management to improve facility performance.",
    services: [
      "Integrated Facility Management",
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Electrical Maintenance",
      "HVAC Maintenance",
      "Building Maintenance",
      "Technical Facility Management",
      "24/7 Facility Support",
    ],
  },

};


export default function ServiceDetail() {

  const { serviceId } = useParams();

  const navigate = useNavigate();

  const service = serviceId
    ? serviceData[serviceId]
    : undefined;


  /* INVALID SERVICE */
  if (!service) {

    return (

      <main className="service-detail-page">

        <Navbar />

        <section className="service-not-found">

          <h1>
            Service Not Found
          </h1>

          <p>
            The service you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/services")}
          >
            Back to Services
          </button>

        </section>

      </main>

    );

  }


  return (

    <main className="service-detail-page">

      <Navbar />


      {/* HERO */}
      <section className="service-detail-hero">

        <img
          src={service.image}
          alt={service.title}
          className="service-detail-image"
        />

        <div className="service-detail-overlay" />


        <div className="service-detail-hero-content">

          <button
            className="service-back-button"
            onClick={() => navigate("/services")}
          >

            <ArrowLeft size={18} />

            Back to Services

          </button>


          <span className="service-detail-tag">
            MAIRA FACILITIES MANAGEMENT
          </span>


          <h1>
            {service.title}
          </h1>


          <p className="service-detail-subtitle">
            {service.subtitle}
          </p>


          <p className="service-detail-description">
            {service.description}
          </p>

        </div>

      </section>


      {/* OVERVIEW */}
      <section className="service-overview">

        <div className="service-overview-left">

          <span className="services-section-tag">
            SERVICE OVERVIEW
          </span>

          <h2>
            Engineering Excellence
            <span> That Delivers Results</span>
          </h2>

        </div>


        <div className="service-overview-right">

          <p>
            {service.overview}
          </p>

          <button
            onClick={() => navigate("/contact")}
          >
            Discuss Your Requirement

            <ArrowRight size={18} />

          </button>

        </div>

      </section>


      {/* WHAT WE PROVIDE */}
      <section className="service-provided-section">

        <div className="service-provided-heading">

          <span className="services-section-tag">
            OUR CAPABILITIES
          </span>

          <h2>
            What We Provide
          </h2>

          <p>
            Our specialized services are designed to meet
            the engineering and operational requirements
            of modern facilities.
          </p>

        </div>


        <div className="service-capabilities-grid">

          {service.services.map((item, index) => (

            <div
              className="service-capability-card"
              key={item}
            >

              <div className="capability-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <CheckCircle2 size={22} />

              <h3>
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="service-detail-cta">

        <div>

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's Discuss Your
            {` ${service.title}`} Requirement
          </h2>

          <p>
            Our engineering team is ready to understand
            your requirements and provide the right solution.
          </p>

          <button
            onClick={() => navigate("/contact")}
          >
            Contact Our Team

            <ArrowRight size={18} />

          </button>

        </div>

      </section>

    </main>

  );
}