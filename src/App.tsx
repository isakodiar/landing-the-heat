import { useState, type FormEvent } from "react";
import {
  ArrowDown,
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
  "Entrenadores y marcas personales",
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
  const bookingUrl = (import.meta.env.VITE_BOOKING_URL as string | undefined)?.trim();
  const formEndpoint = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim();
  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, "");
  const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim();
  const bookingHref = bookingUrl || "#contacto";

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setFormStatus("");

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("No fue posible enviar la solicitud.");
        setFormStatus("¡Listo! Recibimos tus datos. Nos pondremos en contacto contigo.");
        form.reset();
      } catch {
        setFormStatus("No pudimos enviar tu solicitud. Inténtalo de nuevo o contáctanos por otro medio.");
      }
      return;
    }

    const message = [
      "Hola, THE HEAT. Me interesa agendar una llamada de diagnóstico.",
      `Nombre: ${payload.name ?? ""}`,
      `Estudio / marca: ${payload.studio ?? ""}`,
      `WhatsApp: ${payload.phone ?? ""}`,
      `Correo: ${payload.email ?? ""}`,
      `Servicio: ${payload.service ?? ""}`,
      `Contexto: ${payload.message ?? ""}`,
    ].join("\n");

    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setFormStatus("Se abrió WhatsApp con tu solicitud preparada. Solo falta enviarla.");
      return;
    }

    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Solicitud de llamada — THE HEAT")}&body=${encodeURIComponent(message)}`;
      setFormStatus("Se abrió tu correo con la solicitud preparada. Solo falta enviarla.");
      return;
    }

    setFormStatus("El formulario está diseñado, pero todavía falta conectar el destino de los mensajes. Configura VITE_FORM_ENDPOINT, VITE_WHATSAPP_NUMBER o VITE_CONTACT_EMAIL.");
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
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="nav-cta" href={bookingHref} target={bookingUrl ? "_blank" : undefined} rel={bookingUrl ? "noreferrer" : undefined} onClick={closeMenu}>
            Agenda una llamada <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-shard hero-shard-one" aria-hidden="true" />
          <div className="hero-shard hero-shard-two" aria-hidden="true" />
          <div className="hero-topline">
            <span>ESTUDIO CREATIVO / AGUASCALIENTES, MX</span>
            <span className="hero-topline-right"><span className="live-dot" /> ESTRATEGIA · BRANDING · VIDEO</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> PARA ESTUDIOS FITNESS CON ALGO QUE DECIR</p>
              <h1>
                TU ESTUDIO
                <span className="hero-title-accent">NO ES UNO MÁS.</span>
              </h1>
              <p className="hero-description">
                Construimos marcas, contenido y experiencias audiovisuales para que tu estudio destaque por lo que realmente lo hace diferente.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={bookingHref} target={bookingUrl ? "_blank" : undefined} rel={bookingUrl ? "noreferrer" : undefined}>
                  Agenda una llamada <ArrowUpRight size={18} />
                </a>
                <a className="button button-ghost" href="#proyectos">
                  Explora nuestro trabajo <ArrowDown size={16} />
                </a>
              </div>
              <div className="hero-footnote">
                <span>01 / 03</span>
                <span>CREATIVIDAD CON DIRECCIÓN.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-video-frame">
                <video
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={projects[0].poster}
                  preload="metadata"
                >
                  <source src="https://res.cloudinary.com/jfum298a/video/upload/du_16,q_auto,so_6,w_720/v1794329742/the-heat-landing/parkour-evo.mp4" type="video/mp4" />
                </video>
                <div className="hero-video-shade" />
                <div className="hero-visual-top">
                  <span>THE HEAT / VISUAL STORIES</span>
                  <span>AGUASCALIENTES</span>
                </div>
                <div className="hero-visual-bottom">
                  <div>
                    <span className="hero-visual-kicker">MOVIMIENTO REAL</span>
                    <p>Historias que<br />se sienten.</p>
                  </div>
                  <span className="hero-visual-mark"><img src="/the-heat-mark.svg" alt="" /></span>
                </div>
              </div>
              <div className="hero-side-note">STUDIO CULTURE / 2026</div>
              <div className="hero-stamp"><span>BUILT</span><span>TO</span><span>MOVE</span></div>
            </div>
          </div>

          <div className="hero-bottomline">
            <span>01 — ESTRATEGIA</span>
            <span>02 — IDENTIDAD</span>
            <span>03 — NARRATIVA AUDIOVISUAL</span>
            <span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></span>
          </div>
        </section>

        <section className="manifesto-section section-pad">
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
              <span>03 / CONSISTENCIA</span>
              <h3>La operación diaria no te deja crear contenido.</h3>
              <p>Organizamos la estrategia y la producción para que comunicar no sea una carga más.</p>
            </article>
          </div>
        </section>

        <section className="services-section section-pad" id="servicios">
          <div className="section-kicker light-kicker">
            <span>02</span><span>LO QUE HACEMOS</span><span className="kicker-rule" />
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
            <a className="text-link light-link" href="#contacto">Hablemos de tu estudio <ArrowUpRight size={17} /></a>
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
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.offset} project={project} />)}
          </div>
          <div className="work-bottom">
            <span>IMAGEN, RITMO Y NARRATIVA.</span>
            <a className="text-link" href="#contacto">Hagamos visible tu estudio <ArrowUpRight size={17} /></a>
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
              <span>04</span><span>PARA QUIÉN</span><span className="kicker-rule" />
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

        <section className="process-section section-pad" id="proceso">
          <div className="section-kicker dark-kicker">
            <span>05</span><span>EL PROCESO</span><span className="kicker-rule" />
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

        <section className="cta-section">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-shard" aria-hidden="true" />
          <div className="cta-content">
            <div className="section-kicker light-kicker">
              <span>06</span><span>EL SIGUIENTE MOVIMIENTO</span><span className="kicker-rule" />
            </div>
            <p className="cta-overline">TU ESTUDIO YA TIENE LA ENERGÍA.</p>
            <h2>HAGAMOS QUE<br /><span>SE NOTE.</span></h2>
            <p className="cta-description">Cuéntanos qué estás construyendo. En una primera llamada podemos identificar dónde está la oportunidad para tu marca.</p>
            <a className="button button-primary cta-button" href={bookingHref} target={bookingUrl ? "_blank" : undefined} rel={bookingUrl ? "noreferrer" : undefined}>
              Agenda una llamada de diagnóstico <ArrowUpRight size={18} />
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
            <p>Déjanos tus datos y un poco de contexto. Queremos conocer tu proyecto antes de proponerte una solución.</p>
            <div className="contact-location"><MapPin size={17} /><span>Aguascalientes, México</span></div>
            <div className="contact-direct">
              <span className="contact-direct-line" />
              <p>Una buena estrategia empieza con una buena conversación.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>FORMULARIO / 01</span>
              <span>RESPUESTA PERSONALIZADA</span>
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
            <div className="form-row">
              <label>
                <span>WhatsApp *</span>
                <input name="phone" type="tel" placeholder="449 000 0000" required />
              </label>
              <label>
                <span>Correo electrónico *</span>
                <input name="email" type="email" placeholder="tu@correo.com" required />
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
              <p>Al enviar, aceptas que usemos tus datos únicamente para dar seguimiento a esta solicitud.</p>
              <button className="button button-dark" type="submit">Solicitar llamada <ArrowUpRight size={17} /></button>
            </div>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
          </form>
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
          </div>
          <div className="footer-column">
            <span>HABLEMOS</span>
            <a href="#contacto">Agenda una llamada</a>
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
