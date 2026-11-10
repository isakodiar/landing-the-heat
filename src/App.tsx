import { useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Clapperboard,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Play,
  Sparkles,
  Target,
  X,
} from "lucide-react";

type Project = {
  title: string;
  discipline: string;
  service: string;
  video: string;
  poster: string;
  offset: string;
};

const projects: Project[] = [
  {
    title: "Parkour EVO",
    discipline: "Parkour · Academia",
    service: "Producción audiovisual",
    video: "https://res.cloudinary.com/jfum298a/video/upload/q_auto,w_720/v1794329742/the-heat-landing/parkour-evo.mp4",
    poster: "https://res.cloudinary.com/jfum298a/video/upload/so_6,w_900,f_jpg/v1794329742/the-heat-landing/parkour-evo.jpg",
    offset: "01",
  },
  {
    title: "Pilates Mat",
    discipline: "Pilates · Estudio",
    service: "Contenido para redes",
    video: "https://res.cloudinary.com/jfum298a/video/upload/q_auto,w_720/v1794329750/the-heat-landing/pilates-mat.mp4",
    poster: "https://res.cloudinary.com/jfum298a/video/upload/so_42,w_900,f_jpg/v1794329750/the-heat-landing/pilates-mat.jpg",
    offset: "02",
  },
  {
    title: "Yoga Sabinal",
    discipline: "Yoga · Comunidad",
    service: "Cobertura audiovisual",
    video: "https://res.cloudinary.com/jfum298a/video/upload/q_auto,w_720/v1794329756/the-heat-landing/yoga-sabinal.mp4",
    poster: "https://res.cloudinary.com/jfum298a/video/upload/so_30,w_900,f_jpg/v1794329756/the-heat-landing/yoga-sabinal.jpg",
    offset: "03",
  },
  {
    title: "Academia de Box",
    discipline: "Box · Entrenamiento",
    service: "Producción audiovisual",
    video: "https://res.cloudinary.com/jfum298a/video/upload/q_auto,w_720/v1794329762/the-heat-landing/academia-box.mp4",
    poster: "https://res.cloudinary.com/jfum298a/video/upload/so_12,w_900,f_jpg/v1794329762/the-heat-landing/academia-box.jpg",
    offset: "04",
  },
];

const services = [
  {
    number: "01",
    title: "Branding",
    descriptor: "Una identidad con dirección.",
    description:
      "Construimos una marca que traduzca lo que hace especial a tu estudio y lo vuelva reconocible en cada punto de contacto.",
    items: ["Estrategia y posicionamiento", "Identidad visual", "Sistema y aplicaciones de marca"],
    icon: Palette,
    accent: "pink",
  },
  {
    number: "02",
    title: "Gestión de redes",
    descriptor: "Una presencia con intención.",
    description:
      "Planeamos y gestionamos contenido para que tus redes comuniquen valor, construyan comunidad y faciliten nuevas consultas.",
    items: ["Estrategia de contenido", "Planeación y publicaciones", "Guiones, reels y carruseles"],
    icon: Layers,
    accent: "teal",
  },
  {
    number: "03",
    title: "Producción audiovisual",
    descriptor: "Contenido que se siente.",
    description:
      "Convertimos la energía de tu espacio, tus clases y tu comunidad en piezas audiovisuales que hacen tangible la experiencia.",
    items: ["Reels y video comercial", "Fotografía y cobertura", "Edición y versiones para redes"],
    icon: Camera,
    accent: "white",
  },
];

const process = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Conocemos tu estudio, tus objetivos, tu comunidad y los retos que hoy frenan tu comunicación.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Damos dirección",
    description: "Definimos el enfoque de marca, el mensaje y el tipo de contenido que necesita tu negocio.",
    icon: Target,
  },
  {
    number: "03",
    title: "Lo hacemos visible",
    description: "Producimos, diseñamos y activamos las piezas con una línea visual y narrativa consistente.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Seguimos mejorando",
    description: "Revisamos lo que funciona y ajustamos la comunicación a partir de objetivos y aprendizajes.",
    icon: Sparkles,
  },
];

const audiences = [
  "Estudios de entrenamiento funcional",
  "Pilates, yoga y disciplinas boutique",
  "Gimnasios y academias deportivas",
  "Estudios de box, danza y entrenamiento especializado",
];

const faqs = [
  {
    question: "¿Trabajan únicamente con estudios fitness de Aguascalientes?",
    answer:
      "Esta landing está enfocada en estudios de Aguascalientes. La estrategia y la postproducción también pueden trabajarse a distancia; las grabaciones presenciales se coordinan según ubicación, logística y propuesta.",
  },
  {
    question: "¿Tengo que contratar los tres servicios?",
    answer:
      "No. Podemos comenzar con branding, gestión de redes o producción audiovisual por separado, o integrar los tres frentes si eso responde mejor a la etapa y los objetivos de tu estudio.",
  },
  {
    question: "¿Qué sucede después de escribirles por WhatsApp?",
    answer:
      "Primero conocemos tu estudio, sus objetivos y necesidades. Si tiene sentido, coordinamos una llamada de diagnóstico y después preparamos una propuesta personalizada con alcance, tiempos y cotización.",
  },
  {
    question: "¿Pueden garantizar más clientes o ventas?",
    answer:
      "No prometemos cifras sin conocer el negocio ni controlar todos los factores de venta. Definimos objetivos de posicionamiento y captación, construimos la comunicación y revisamos indicadores para mejorarla.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className={`project-card ${playing ? "is-playing" : ""}`}>
      <div className="project-media">
        {playing ? (
          <video
            className="project-video"
            src={project.video}
            poster={project.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : (
          <button
            className="project-poster"
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir proyecto ${project.title}`}
          >
            <img src={project.poster} alt={`Producción audiovisual para ${project.title}`} loading="lazy" />
            <span className="project-play"><Play size={18} fill="currentColor" /></span>
            <span className="project-poster-label">VER PIEZA</span>
          </button>
        )}
        <span className="project-index">{project.offset}</span>
      </div>
      <div className="project-meta">
        <div>
          <p className="project-discipline">{project.discipline}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-service">{project.service}</span>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselAtEnd, setCarouselAtEnd] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  // WhatsApp comercial confirmado: +52 449 468 5875.
  // Es un número de contacto público. Se puede cambiar desde la variable del hosting.
  const rawWhatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, "") || "524494685875";
  const whatsappNumber = /^\d{10,15}$/.test(rawWhatsappNumber) ? rawWhatsappNumber : "";
  const quickMessage = "Hola, equipo THE HEAT. Tengo un estudio fitness en Aguascalientes y quiero conocer sus servicios de branding, redes sociales y producción audiovisual. ¿Podemos platicar?";
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(quickMessage)}`
    : "#contacto";

  const closeMenu = () => setMenuOpen(false);

  function moveCarousel(direction: -1 | 1) {
    const track = carouselRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".project-card");
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 18;
    const step = firstCard.getBoundingClientRect().width + gap;
    // Scroll based on current position so the final, partial carousel view remains reachable.
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function handleCarouselScroll() {
    const track = carouselRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".project-card");
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 18;
    const step = firstCard.getBoundingClientRect().width + gap;
    if (!step) return;
    const atEnd = track.scrollWidth - track.clientWidth - track.scrollLeft <= 5;
    setCarouselAtEnd(atEnd);
    setCarouselIndex(atEnd ? projects.length - 1 : Math.max(0, Math.min(projects.length - 1, Math.round(track.scrollLeft / step))));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!whatsappNumber) {
      setFormStatus("El enlace de WhatsApp aún no está configurado. THE HEAT debe agregar su número comercial para activar este botón.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hola, THE HEAT. Me interesa conocer sus servicios para mi estudio fitness.",
      `Nombre: ${formData.get("name") || ""}`,
      `Estudio / marca: ${formData.get("studio") || ""}`,
      `Servicio de interés: ${formData.get("service") || ""}`,
      `Lo que quiero mejorar: ${formData.get("message") || "Por definir"}`,
    ].join("\n");

    // Navegación directa por acción del usuario: evita bloqueos de ventanas emergentes.
    // El mensaje no se envía automáticamente; la persona confirma el envío en WhatsApp.
    window.location.assign(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#inicio" aria-label="THE HEAT, inicio" onClick={closeMenu}>
          <img src="/the-heat-signature-pink.svg" alt="THE HEAT" />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#proceso" onClick={closeMenu}>Proceso</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="nav-cta" href={whatsappHref} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noopener noreferrer" : undefined} onClick={closeMenu}>
            Hablemos por WhatsApp <MessageCircle size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section hero-v2" id="inicio">
          {/* Video ocupa el 100% del viewport; se recorta a formato horizontal con object-fit: cover.
              La tipografía, navegación y formulario permanecen superpuestos sobre el video. */}
          <div className="hero-video-stage" aria-hidden="true" style={{ backgroundImage: `url(${projects[0].poster})` }}>
            <video className="hero-background-video" autoPlay muted loop playsInline preload="metadata" poster={projects[0].poster}>
              <source src="https://res.cloudinary.com/jfum298a/video/upload/du_16,q_auto,so_6,w_1280/v1794329742/the-heat-landing/parkour-evo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-film-overlay" aria-hidden="true" />
          <div className="hero-topline">
            <span>THE HEAT / CREATIVE STUDIO</span>
            <span className="hero-topline-right"><span className="live-dot" /> AGUASCALIENTES · MÉXICO</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> MARCAS QUE SE MUEVEN. IDEAS QUE DESTACAN.</p>
              <h1>
                TU ESTUDIO<br />
                NO ES <span className="hero-title-accent">UNO MÁS.</span>
              </h1>
              <p className="hero-description">
                Branding, redes sociales y producción audiovisual para que tu estudio fitness comunique lo que lo hace diferente.
              </p>
              <div className="hero-actions">
                <a className="button button-ghost" href="#proyectos">Conoce nuestro trabajo <ArrowDown size={16} /></a>
              </div>
              <div className="hero-footnote"><span>ESTRATEGIA + PRODUCCIÓN</span><span>HECHO PARA EL MOVIMIENTO.</span></div>
            </div>

            <form className="contact-form hero-lead-form" onSubmit={handleSubmit} aria-label="Escríbenos por WhatsApp desde el inicio">
              <div className="hero-form-overline"><span className="live-dot" /> CONECTEMOS TU MARCA CON MÁS PERSONAS</div>
              <h2>HABLEMOS DE<br /><span>TU ESTUDIO.</span></h2>
              <p className="hero-form-intro">Déjanos algunos datos y abre una conversación directa con THE HEAT en WhatsApp.</p>
              <label>
                <span>Tu nombre *</span>
                <input name="name" type="text" placeholder="¿Cómo te llamas?" autoComplete="name" required />
              </label>
              <label>
                <span>Nombre de tu estudio *</span>
                <input name="studio" type="text" placeholder="Nombre de tu marca" autoComplete="organization" required />
              </label>
              <label>
                <span>¿Qué necesitas trabajar? *</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Branding">Branding</option>
                  <option value="Gestión de redes sociales">Manejo de redes sociales</option>
                  <option value="Producción audiovisual">Producción audiovisual</option>
                  <option value="Solución integral">Todo lo anterior</option>
                  <option value="Aún no lo tengo claro">Necesito orientación</option>
                </select>
              </label>
              <label className="hero-message-field">
                <span>¿Qué te gustaría mejorar?</span>
                <textarea name="message" rows={2} placeholder="Cuéntanos brevemente (opcional)" />
              </label>
              <button className="button button-primary hero-form-submit" type="submit">Enviar a WhatsApp <MessageCircle size={17} /></button>
              <p className="hero-form-privacy">Revisarás el mensaje antes de enviarlo. No enviamos tus datos automáticamente.</p>
              {!whatsappNumber && <p className="form-status" role="status">Contacto temporalmente no disponible.</p>}
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            </form>
          </div>

          <div className="hero-bottomline">
            <span>01 — ESTRATEGIA</span>
            <span>02 — IDENTIDAD</span>
            <span>03 — CONTENIDO</span>
            <a className="scroll-cue" href="#idea">DESLIZA PARA EXPLORAR <ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="manifesto-section section-pad" id="idea">
          <div className="section-kicker dark-kicker">
            <span>01</span><span>LA IDEA</span><span className="kicker-rule" />
          </div>
          <div className="manifesto-layout">
            <div className="manifesto-heading">
              <h2>NO SE TRATA DE<br /><span>PUBLICAR MÁS.</span></h2>
              <div className="manifesto-mark"><img src="/the-heat-mark.svg" alt="" /></div>
            </div>
            <div className="manifesto-copy">
              <p className="manifesto-lead">Se trata de comunicar mejor lo que hace único a tu estudio.</p>
              <p>Tu comunidad, tus entrenadores, tu método y la energía de cada clase ya cuentan una historia. Nosotros te ayudamos a darle dirección y convertirla en una marca que se reconoce, se recuerda y genera confianza.</p>
              <a className="text-link" href="#servicios">Así podemos ayudarte <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="pain-grid">
            <article className="pain-card">
              <span>01 / VISIBILIDAD</span>
              <h3>Publicas,<br />pero no llegan consultas.</h3>
              <p>Tu presencia digital necesita un objetivo más claro que simplemente estar activa.</p>
            </article>
            <article className="pain-card pain-card-featured">
              <span>02 / DIFERENCIACIÓN</span>
              <h3>Tu estudio tiene algo distinto, pero no se nota.</h3>
              <p>Encontramos la idea que te distingue y la llevamos a cada punto de contacto.</p>
            </article>
            <article className="pain-card">
              <span>03 / TIEMPO</span>
              <h3>La operación diaria no te deja crear contenido.</h3>
              <p>Organizamos la estrategia y la producción para que comunicar no sea una carga más.</p>
            </article>
            <article className="pain-card">
              <span>04 / CONFIANZA</span>
              <h3>Ya probaste agencias o creadores sin una dirección clara.</h3>
              <p>Empezamos por entender tu negocio y definir por qué y para quién comunicar.</p>
            </article>
            <article className="pain-card">
              <span>05 / CLARIDAD</span>
              <h3>No sabes qué contenido necesita tu marca.</h3>
              <p>Convertimos tus objetivos y diferenciales en una estrategia de contenido concreta.</p>
            </article>
          </div>
        </section>

        <section className="process-section section-pad" id="proceso">
          <div className="section-kicker dark-kicker">
            <span>02</span><span>EL PROCESO</span><span className="kicker-rule" />
            <span className="kicker-side">DE LA IDEA A LA ACCIÓN</span>
          </div>
          <div className="process-heading">
            <h2>CLARIDAD ANTES<br /><span>DE CREAR.</span></h2>
            <p>Antes de grabar o diseñar, entendemos qué necesita tu negocio y por qué. Así cada pieza tiene una razón de existir.</p>
          </div>
          <div className="process-grid">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <article className="process-step" key={step.number}>
                  <div className="process-step-top"><span>{step.number}</span><Icon size={23} strokeWidth={1.5} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="process-step-line" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="work-section section-pad" id="proyectos">
          <div className="section-kicker dark-kicker">
            <span>03</span><span>TRABAJO EN MOVIMIENTO</span><span className="kicker-rule" />
            <span className="kicker-side">MATERIAL REAL / PRODUCCIÓN THE HEAT</span>
          </div>
          <div className="work-heading">
            <h2>EL MOVIMIENTO<br /><span>SE DEMUESTRA.</span></h2>
            <p>Una selección de piezas audiovisuales realizadas en espacios y disciplinas deportivas. Dale play para ver cada proyecto.</p>
          </div>
          <div className="projects-carousel" aria-label="Carrusel de videos de THE HEAT">
            <div className="projects-grid" ref={carouselRef} onScroll={handleCarouselScroll} role="region" aria-roledescription="carrusel" aria-label="Proyectos audiovisuales, desliza horizontalmente">
              {projects.map((project) => <ProjectCard key={project.offset} project={project} />)}
            </div>
            <div className="carousel-toolbar">
              <div className="carousel-position" aria-live="polite"><strong>{String(carouselIndex + 1).padStart(2, "0")}</strong><span> / {String(projects.length).padStart(2, "0")}</span></div>
              <div className="carousel-controls">
                <button type="button" onClick={() => moveCarousel(-1)} disabled={carouselIndex === 0} aria-label="Proyecto anterior"><ArrowLeft size={19}/></button>
                <button type="button" onClick={() => moveCarousel(1)} disabled={carouselAtEnd} aria-label="Proyecto siguiente"><ArrowRight size={19}/></button>
              </div>
            </div>
          </div>
          <div className="work-bottom">
            <span>IMAGEN, RITMO Y NARRATIVA.</span>
            <a className="text-link" href={whatsappHref} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noopener noreferrer" : undefined}>Hagamos visible tu estudio <MessageCircle size={17} /></a>
          </div>
        </section>

        <section className="services-section section-pad" id="servicios">
          <div className="section-kicker light-kicker">
            <span>04</span><span>LO QUE HACEMOS</span><span className="kicker-rule" />
            <span className="kicker-side">TRES FRENTES / UNA MISMA DIRECCIÓN</span>
          </div>
          <div className="services-intro">
            <h2>IDEAS CON<br /><span>INTENCIÓN.</span></h2>
            <p>Unimos estrategia, identidad y producción para que cada esfuerzo de comunicación construya hacia el mismo lugar.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={`service-card service-${service.accent}`} key={service.number}>
                  <div className="service-card-top">
                    <span>{service.number} / SERVICIO</span>
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="service-card-content">
                    <p className="service-descriptor">{service.descriptor}</p>
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul>
                      {service.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}
                    </ul>
                  </div>
                  <span className="service-card-index">{service.number}</span>
                </article>
              );
            })}
          </div>
          <div className="services-note">
            <span className="services-note-icon"><Sparkles size={18} /></span>
            <p>Podemos trabajar cada servicio de forma independiente o construir una solución integrada según la etapa de tu negocio.</p>
            <a className="text-link light-link" href={whatsappHref} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noopener noreferrer" : undefined}>Hablemos por WhatsApp <MessageCircle size={17} /></a>
          </div>
        </section>

        <section className="fit-section">
          <div className="fit-image">
            <img src={projects[2].poster} alt="Sesión de yoga al aire libre" loading="lazy" />
            <div className="fit-image-overlay" />
            <span className="fit-image-caption">MOVIMIENTO / COMUNIDAD / EXPERIENCIA</span>
          </div>
          <div className="fit-copy">
            <div className="section-kicker dark-kicker">
              <span>05</span><span>PARA QUIÉN</span><span className="kicker-rule" />
            </div>
            <h2>CONOCEMOS<br />EL <span>FITNESS.</span></h2>
            <p>No buscamos que tu estudio se vea como todos. Trabajamos con negocios donde el movimiento, la disciplina y la comunidad son parte de la marca.</p>
            <ul className="audience-list">
              {audiences.map((audience, index) => (
                <li key={audience}><span>0{index + 1}</span>{audience}<ArrowUpRight size={15} /></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-shard" aria-hidden="true" />
          <div className="cta-content">
            <div className="section-kicker light-kicker">
              <span>06</span><span>EL SIGUIENTE MOVIMIENTO</span><span className="kicker-rule" />
            </div>
            <p className="cta-overline">TU ESTUDIO YA TIENE LA ENERGÍA.</p>
            <h2>HAGAMOS QUE<br /><span>SE NOTE.</span></h2>
            <p className="cta-description">Cuéntanos por WhatsApp qué estás construyendo. Podemos conversar sobre tu estudio y coordinar una llamada si necesitas un diagnóstico más profundo.</p>
            <a className="button button-primary cta-button" href={whatsappHref} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noopener noreferrer" : undefined}>
              Escríbenos por WhatsApp <MessageCircle size={18} />
            </a>
          </div>
          <div className="cta-side-label">THE HEAT / CREATIVE STUDIO</div>
        </section>

        <section className="contact-section section-pad" id="contacto">
          <div className="contact-intro">
            <div className="section-kicker dark-kicker">
              <span>07</span><span>HABLEMOS</span><span className="kicker-rule" />
            </div>
            <h2>CUÉNTANOS<br />DE TU <span>ESTUDIO.</span></h2>
            <p>¿Prefieres presentarte primero? Completa estos datos y abriremos WhatsApp con el mensaje listo para que tú lo envíes.</p>
            <div className="contact-location"><MapPin size={17} /><span>Aguascalientes, México</span></div>
            <div className="contact-direct">
              <span className="contact-direct-line" />
              <p>Una buena estrategia empieza con una buena conversación.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>MENSAJE / WHATSAPP</span>
              <span>TÚ CONFIRMAS EL ENVÍO</span>
            </div>
            <div className="form-row">
              <label>
                <span>Tu nombre *</span>
                <input name="name" type="text" placeholder="Nombre y apellido" required />
              </label>
              <label>
                <span>Nombre de tu estudio *</span>
                <input name="studio" type="text" placeholder="¿Cómo se llama tu negocio?" required />
              </label>
            </div>
            <label>
              <span>¿Qué necesitas trabajar? *</span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>Selecciona un servicio</option>
                <option value="Branding">Branding</option>
                <option value="Gestión de redes sociales">Gestión de redes sociales</option>
                <option value="Producción audiovisual">Producción audiovisual</option>
                <option value="Solución integral">Una solución integral</option>
                <option value="Aún no lo tengo claro">Aún no lo tengo claro</option>
              </select>
            </label>
            <label>
              <span>Cuéntanos un poco más</span>
              <textarea name="message" rows={4} placeholder="¿Qué te gustaría mejorar o conseguir con tu marca?" />
            </label>
            <div className="form-footer">
              <p>Se abrirá WhatsApp con un mensaje preparado. No se envía nada hasta que presiones Enviar en la conversación.</p>
              <button className="button button-dark" type="submit">Continuar en WhatsApp <MessageCircle size={17} /></button>
            </div>
            {!whatsappNumber && <p className="form-status" role="status">Contacto por WhatsApp pendiente de activación: falta configurar el número comercial.</p>}
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
          </form>
        </section>

        <section className="faq-section section-pad" id="preguntas">
          <div className="section-kicker dark-kicker">
            <span>08</span><span>PREGUNTAS FRECUENTES</span><span className="kicker-rule" />
            <span className="kicker-side">ANTES DE ESCRIBIR</span>
          </div>
          <div className="faq-layout">
            <div className="faq-heading">
              <h2>ANTES DE<br /><span>EMPEZAR.</span></h2>
              <p>Queremos que sepas cómo trabajamos y qué puedes esperar antes de dar el siguiente paso.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    <span className="faq-number">0{index + 1}</span>
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Volver al inicio"><img src="/the-heat-signature-dark.svg" alt="THE HEAT" /></a>
            <p>Estudio creativo que conecta estrategia y narrativa visual.</p>
          </div>
          <div className="footer-column">
            <span>EXPLORA</span>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Proceso</a>
            <a href="#preguntas">Preguntas frecuentes</a>
          </div>
          <div className="footer-column">
            <span>HABLEMOS</span>
            <a href={whatsappHref} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noopener noreferrer" : undefined}>Escríbenos por WhatsApp</a>
            <p>Aguascalientes, México</p>
          </div>
          <div className="footer-signoff">
            <span>BUILT TO MOVE.</span>
            <img src="/the-heat-mark.svg" alt="" />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} THE HEAT. ALL RIGHTS RESERVED.</span>
          <span>ESTRATEGIA / IDENTIDAD / MOVIMIENTO</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
