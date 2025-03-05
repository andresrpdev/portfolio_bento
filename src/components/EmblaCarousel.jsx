import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../styles/embla.css"

const projects = [
    {
        title:"ImportedJM",
        description:"Trabajo para un cliente en el que importaba productos, con node js realice un scraper para obtener los datos de los productos y un api para poder usarlos en el frontend y calcular el precio final de importacion. Ademas de tener un modo manual",
        tags:["React","Tailwind","Node.js","Express","MongoDB"],
        image:"https://cdn.palbincdn.com/images/blog/gallery/Partes-de-una-pagina-web.png",
        link:"google.com",
        github:"github.com"
    },
    {
        title:"",
        description:"",
        tags:["React","Tailwind","Node.js","Express","MongoDB"],
        image:"",
        link:"",
        github:""
    }
    ]

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false
  }, [Autoplay({
    delay: 5000,
    stopOnInteraction: true
  })])

  const [selectedIndex, setSelectedIndex] = useState(0)

  // Función para agrupar proyectos en pares para vista de escritorio
  const getProjectGroups = () => {
    const groups = [];
    for (let i = 0; i < projects.length; i += 2) {
      if (i + 1 < projects.length) {
        groups.push([projects[i], projects[i + 1]]);
      } else {
        groups.push([projects[i]]);
      }
    }
    return groups;
  }

  const [isMobile, setIsMobile] = useState(false);
  const projectGroups = getProjectGroups();
  const slidesData = isMobile ? projects : projectGroups;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al cargar
    checkScreenSize();
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {isMobile ? (
          // Vista móvil: 1 proyecto por slide
          projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          // Vista escritorio: 2 proyectos por slide
          projectGroups.map((group, groupIndex) => (
            <div className="embla__slide" key={groupIndex}>
              <div className="project-group">
                {group.map((project, projectIndex) => (
                  <ProjectCard key={projectIndex} project={project} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="embla__dots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

// Componente de tarjeta de proyecto para reutilizar
function ProjectCard({ project }) {
  return (
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
        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link}
              className="project-link project-link-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Ver demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github}
              className="project-link project-link-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}