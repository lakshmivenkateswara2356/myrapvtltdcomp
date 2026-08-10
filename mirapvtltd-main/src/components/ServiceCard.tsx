import type { Service } from '../data/siteContent'
import { ArrowRight } from 'lucide-react'

import ElectricalImg from '../assets/electrical.png'
import HVACImg from '../assets/HOAC.png'
import FacilityImg from '../assets/Firesafty.png'
import EngineeringImg from '../assets/Plumbingand.png'

type ServiceCardProps = {
  item: Service
  index: number
  onContactClick?: (e: React.MouseEvent) => void
}

export function ServiceCard({
  item,
  index,
  onContactClick,
}: ServiceCardProps) {

  let image = ElectricalImg

  switch (index) {
    case 0:
      image = ElectricalImg
      break

    case 1:
      image = HVACImg
      break

    case 2:
      image = FacilityImg
      break

    case 3:
      image = EngineeringImg
      break

    default:
      image = ElectricalImg
  }

  return (
    <article
      className="glass-service-card"
      data-index={index}
    >

      {/* Service Image */}

      <div className="service-image-wrapper">

        <img
          src={image}
          alt={item.title}
          className="service-image"
          loading="lazy"
        />

        <div className="service-image-overlay" />

      </div>

      {/* Card Top */}

     

      {/* Body */}

      <div className="service-card-body">

        <h3>{item.title}</h3>

        <p>{item.description}</p>

      </div>

      {/* Footer */}

      <a
        href="#contact"
        className="service-card-footer"
        onClick={onContactClick}
      >

        <span>
          Request Consultation
        </span>

        <ArrowRight size={16} />

      </a>

    </article>
  )
}

export default ServiceCard