import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../styles/embla.css"

const projects = [
  {
    title: "Proyecto 1",
    description: "Aplicación web desarrollada con React y Node.js",
    image: "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Proyecto+1",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Proyecto 2",
    description: "Sitio web responsive con Astro y Tailwind CSS",
    image: "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Proyecto+2",
    tags: ["Astro", "Tailwind", "JavaScript"],
    link: "#"
  },
  {
    title: "Proyecto 3",
    description: "Aplicación móvil desarrollada con React Native",
    image: "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Proyecto+3",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#"
  }
]

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false
  }, [Autoplay({
    delay: 5000,
    stopOnInteraction: true
  })])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project, index) => (
          <div className="embla__slide" key={index}>
            <div className="slide-content">
              <div className="slide-image">
                <img src={project.image} alt={project.title} />
                <div className="slide-overlay"></div>
              </div>
              <div className="slide-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="slide-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="slide-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="slide-button">Ver proyecto</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="embla__dots">
        {projects.map((_, index) => (
          <button key={index} className="embla__dot"></button>
        ))}
      </div>
    </div>
  )
}
