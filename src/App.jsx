"use client";

import { useEffect, useRef, useState } from "react";
import {
  siCoreldraw,
  siCss,
  siGithub,
  siHtml5,
  siJavascript,
  siObsstudio,
  siReact,
  siTailwindcss,
  siVite,
} from "simple-icons";
import {
  siAdobeillustrator,
  siAdobephotoshop,
  siCanva,
} from "simple-icons-legacy";

const linkedinUrl =
  "https://www.linkedin.com/in/rizki-dwi-febriansyah-s-sos-5152931a6";

const navigation = [
  { id: "about", number: "01", label: "About" },
  { id: "work", number: "02", label: "Work" },
  { id: "projects", number: "03", label: "Project" },
  { id: "contact", number: "04", label: "Contact" },
];

const artworks = [
  {
    id: "01",
    title: "NIVEA MEN — Body Odor Campaign",
    category: "Campaign Visual",
    image: "assets/graphic-design/nivea-men-campaign.jpg",
    description:
      "Product-led campaign visual with a direct headline, dramatic lighting, and a clear promotional hierarchy.",
    tags: ["Campaign", "Product Visual", "Social Media"],
  },
  {
    id: "02",
    title: "Captain Morgan — Spiced Gold",
    category: "Campaign Visual",
    image: "assets/graphic-design/captain-morgan-campaign.jpg",
    description:
      "A cinematic product composition built around atmosphere, depth, and a warm narrative setting.",
    tags: ["Key Visual", "Advertising", "Composition"],
  },
  {
    id: "03",
    title: "Matchday — Indonesia vs China",
    category: "Social Media",
    image: "assets/graphic-design/matchday-campaign.jpg",
    description:
      "A high-energy matchday poster balancing team identity, player focus, and editorial sports typography.",
    tags: ["Sports Visual", "Social Media", "Photo Composite"],
  },
  {
    id: "04",
    title: "Aventador — Automotive Poster",
    category: "Poster",
    image: "assets/graphic-design/aventador-poster.jpg",
    description:
      "A sharp automotive poster study using a monochrome portrait, vivid product color, and layered motion.",
    tags: ["Poster", "Automotive", "Art Direction"],
  },
  {
    id: "05",
    title: "Kahf — Men Care Promotion",
    category: "Social Media",
    image: "assets/graphic-design/kahf-campaign.jpg",
    description:
      "A restrained retail visual with soft product staging and clear offer communication.",
    tags: ["Product Visual", "Promotion", "Social Media"],
  },
  {
    id: "06",
    title: "Jordan — Brand Visual",
    category: "Brand Visual",
    image: "assets/graphic-design/jordan-brand-visual.jpg",
    description:
      "A tactile brand composition that combines material, silhouette, and basketball culture.",
    tags: ["Brand Visual", "Poster", "Composition"],
  },
];

const webScreens = [
  {
    id: "01",
    title: "Brand entry",
    label: "A quiet, recognizable first touch.",
    image: "assets/iman-in-motion/01-brand-intro.jpg",
  },
  {
    id: "02",
    title: "AIMAN chatbot",
    label: "A reflective AI companion for calm conversation.",
    image: "assets/iman-in-motion/02-aiman-chatbot.jpg",
  },
  {
    id: "03",
    title: "Islamic film literacy",
    label: "Editorial articles make discovery more meaningful.",
    image: "assets/iman-in-motion/03-islamic-literacy.jpg",
  },
  {
    id: "04",
    title: "Film discovery",
    label: "Curated recommendations with a clean browsing rhythm.",
    image: "assets/iman-in-motion/04-film-discovery.jpg",
  },
  {
    id: "05",
    title: "Mood reflection",
    label: "A thoughtful layer connecting emotion and reflection.",
    image: "assets/iman-in-motion/05-mood-reflection.jpg",
  },
  {
    id: "06",
    title: "Mood pathway",
    label: "Three prompts lead to one relevant film.",
    image: "assets/iman-in-motion/06-mood-pathway.jpg",
  },
];

const videos = [
  {
    id: "01",
    label: "Human interest edit",
    title: "Salut Banget!! Seorang Pengamen Inspiratif yang Berjuang Sejak SMP",
    description:
      "A story-led edit shaped around resilience, emotional pacing, and a clear human arc.",
    youtubeId: "hUufVZppXqk",
    href: "https://youtu.be/hUufVZppXqk",
    timecode: "01:14:08",
  },
  {
    id: "02",
    label: "Institutional edit",
    title: "Komunikasi dan Penyiaran Islam UIKA Bogor",
    description:
      "An institutional edit balancing information, visual rhythm, and a focused academic identity.",
    youtubeId: "B-Vnd_ngheM",
    href: "https://youtu.be/B-Vnd_ngheM",
    timecode: "02:09:17",
  },
];

const skillTools = [
  { name: "Adobe Photoshop", short: "Ps", color: "#31a8ff", icon: siAdobephotoshop },
  { name: "Adobe Illustrator", short: "Ai", color: "#ff9a00", icon: siAdobeillustrator },
  { name: "Canva", short: "Ca", color: "#00c4cc", icon: siCanva },
  { name: "CorelDRAW", short: "Cd", color: "#61c454", icon: siCoreldraw },
  { name: "CapCut", short: "Cc", color: "#f4f4ef", variant: "capcut" },
  { name: "vMix", short: "vMix", color: "#8b7cff", variant: "vmix" },
  { name: "OBS Studio", short: "OBS", color: "#f4f4ef", icon: siObsstudio },
  { name: "React", short: "Re", color: "#61dafb", icon: siReact },
  { name: "JavaScript", short: "JS", color: "#f7df1e", icon: siJavascript },
  { name: "HTML5", short: "H5", color: "#e34f26", icon: siHtml5 },
  { name: "CSS", short: "C3", color: "#663399", icon: siCss },
  { name: "Tailwind CSS", short: "Tw", color: "#06b6d4", icon: siTailwindcss },
  { name: "Vite", short: "Vi", color: "#8b5cf6", icon: siVite },
  { name: "GitHub", short: "Gh", color: "#f4f4ef", icon: siGithub },
];

const disciplines = [
  {
    number: "01",
    title: "Graphic Design",
    eyebrow: "Visual direction",
    description:
      "Campaign visual, social media system, poster composition, and art direction made to hold attention before the message disappears.",
    details: ["Campaign Visual", "Poster System", "Social Media"],
    mark: "GD",
  },
  {
    number: "02",
    title: "Video Editing",
    eyebrow: "Pacing and narrative",
    description:
      "Human-interest stories, institutional edits, and broadcast-ready visuals shaped through rhythm, sequencing, and emotional timing.",
    details: ["Story Edit", "Editorial", "Live Production"],
    mark: "VE",
  },
  {
    number: "03",
    title: "Web & Product",
    eyebrow: "Experience and build",
    description:
      "From UI/UX and frontend implementation to full product thinking and useful AI integration for real user needs.",
    details: ["UI/UX", "Web App", "AI Integration"],
    mark: "DP",
  },
];

const projectCategories = [
  {
    id: "graphic",
    number: "01",
    title: "Graphic Design",
    type: "Visual archive",
    description: "Campaign, poster, product, and social media visual work.",
    image: "assets/graphic-design/matchday-campaign.jpg",
    count: "06 selected works",
  },
  {
    id: "webapp",
    number: "02",
    title: "Web App",
    type: "Digital product",
    description: "IMAN IN MOTION, a mood-based Islamic film discovery product.",
    image: "assets/iman-in-motion/06-mood-pathway.jpg",
    count: "01 case study",
  },
  {
    id: "video",
    number: "03",
    title: "Video Editing",
    type: "Cinematic reel",
    description: "Two story-led edits built around pacing, clarity, and feeling.",
    count: "02 selected edits",
  },
];

const gravityMarks = [
  { label: "RDF", x: "7%", y: "20%", delay: "-1.8s", size: "small" },
  { label: "01", x: "82%", y: "14%", delay: "-3.4s", size: "small" },
  { label: "✦", x: "90%", y: "62%", delay: "-5s", size: "medium" },
  { label: "AI", x: "12%", y: "78%", delay: "-2.5s", size: "small" },
  { label: "03", x: "73%", y: "83%", delay: "-4.2s", size: "small" },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SkillMark({ tool }) {
  return (
    <span
      className={`skill-mark ${tool.variant ? `is-${tool.variant}` : ""}`}
      style={{ "--tool-color": tool.color }}
      aria-hidden="true"
    >
      {tool.icon ? (
        <svg viewBox="0 0 24 24" focusable="false">
          <path d={tool.icon.path} />
        </svg>
      ) : (
        <strong>{tool.short}</strong>
      )}
    </span>
  );
}

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let frame;
    const startedAt = performance.now();

    const tick = (now) => {
      const next = Math.min(100, Math.max(1, Math.ceil(((now - startedAt) / 5000) * 100)));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [onComplete]);

  return (
    <div className="loader-screen" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-glow loader-glow-one" />
      <div className="loader-glow loader-glow-two" />
      <div className="loader-content">
        <div className="loader-brand">
          <span>RDF</span>
          <p>Visual portfolio system</p>
        </div>
        <div className="loader-counter">{String(progress).padStart(3, "0")}</div>
        <div className="loader-line"><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <p className="loader-copy">Calibrating creative field</p>
      </div>
      <span className="loader-corner loader-corner-left">01–100</span>
      <span className="loader-corner loader-corner-right">2026 / BOGOR</span>
    </div>
  );
}

function ScrambleValue({ value, label }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let interval;
    const startedAt = performance.now();
    const scramble = () =>
      Array.from(value, (character) => {
        if (/\d/.test(character)) return String(Math.floor(Math.random() * 10));
        if (character === "+" || character === ".") return character;
        return character;
      }).join("");

    const update = () => {
      if (performance.now() - startedAt > 1250) {
        setDisplay(value);
        window.clearInterval(interval);
        return;
      }
      setDisplay(scramble());
    };

    setDisplay(scramble());
    interval = window.setInterval(update, 55);
    return () => window.clearInterval(interval);
  }, [value]);

  return (
    <div className="stat-card">
      <strong aria-label={`${value} ${label}`}>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

function GravityField() {
  return (
    <div className="gravity-field" aria-hidden="true">
      {gravityMarks.map((mark) => (
        <span
          key={`${mark.label}-${mark.x}`}
          className={`gravity-track gravity-${mark.size}`}
          style={{
            "--mark-x": mark.x,
            "--mark-y": mark.y,
            "--mark-delay": mark.delay,
          }}
        >
          <i>{mark.label}</i>
        </span>
      ))}
    </div>
  );
}

function Header({ activePage, onNavigate }) {
  const activeNav = ["graphic", "webapp", "video"].includes(activePage)
    ? "projects"
    : activePage;

  return (
    <header className="app-header">
      <button className="brand-lockup" type="button" onClick={() => onNavigate("about")}>
        <span className="brand-avatar">
          <img src="assets/profile/rizki-dwi-febriansyah.png" alt="" />
        </span>
        <span>
          <strong>Rizki Dwi Febriansyah</strong>
          <small>Visual Specialist</small>
        </span>
      </button>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeNav === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
            aria-current={activeNav === item.id ? "page" : undefined}
          >
            <span>{item.number}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <a className="header-contact" href="mailto:rizkidwifrb@gmail.com">
        <span>Let&apos;s talk</span>
        <Arrow diagonal />
      </a>
    </header>
  );
}

function AboutView() {
  return (
    <section className="view view-about" aria-labelledby="about-title">
      <div className="view-topline">
        <span>01 / About</span>
        <p>Creative communication, visual craft, and digital product thinking.</p>
      </div>

      <div className="about-layout">
        <div className="about-intro">
          <p className="eyebrow">Hi, I&apos;m Rizki.</p>
          <h1 id="about-title">Visual work with a point of view.</h1>
          <p className="lead">
            Rizki Dwi Febriansyah, S.Sos. is a Visual Specialist focused on graphic design,
            video editing, visual storytelling, and digital innovation.
          </p>
          <p className="body-copy">
            A communication-first background informs the process. Every output starts with audience,
            purpose, and message, then brings craft, motion, and technology together.
          </p>

          <div className="stats-row" aria-label="Portfolio statistics">
            <ScrambleValue value="03" label="creative disciplines" />
            <ScrambleValue value="06" label="design works" />
            <ScrambleValue value="696+" label="curated films" />
            <ScrambleValue value="3.57" label="academic GPA" />
          </div>
        </div>

        <div className="about-side">
          <article className="identity-card">
            <div className="identity-photo">
              <img
                src="assets/profile/rizki-dwi-febriansyah.png"
                alt="Rizki Dwi Febriansyah, S.Sos."
              />
              <span className="identity-line" />
            </div>
            <div className="identity-footer">
              <span>RDF / CREATIVE ID</span>
              <strong>Design · Motion · Digital</strong>
            </div>
          </article>

          <article className="trait-card">
            <div>
              <span>Strengths</span>
              <strong>Cross-disciplinary execution.</strong>
              <p>Design, motion, product, and technology in one working flow.</p>
            </div>
            <div>
              <span>Growth area</span>
              <strong>Detail needs direction.</strong>
              <p>Time-boxing and clear approval points keep refinement useful.</p>
            </div>
          </article>

          <article className="tool-panel">
            <div className="tool-panel-title">
              <span>Creative stack</span>
              <small>{skillTools.length} tools</small>
            </div>
            <div className="tool-grid" aria-label="Creative and digital tools">
              {skillTools.map((tool) => (
                <div key={tool.name} className="tool-item" title={tool.name}>
                  <SkillMark tool={tool} />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WorkView() {
  return (
    <section className="view view-work" aria-labelledby="work-title">
      <div className="view-topline">
        <span>02 / Work</span>
        <p>Three ways of turning a message into something people can feel.</p>
      </div>

      <div className="work-heading">
        <p className="eyebrow">What I do</p>
        <h1 id="work-title">One creative practice. Three distinct disciplines.</h1>
      </div>

      <div className="discipline-grid">
        {disciplines.map((discipline, index) => (
          <article className="discipline-card" key={discipline.title} style={{ "--discipline-index": index }}>
            <div className="discipline-top">
              <span>{discipline.number}</span>
              <i>{discipline.mark}</i>
            </div>
            <div>
              <p>{discipline.eyebrow}</p>
              <h2>{discipline.title}</h2>
              <strong>{discipline.description}</strong>
            </div>
            <div className="discipline-tags">
              {discipline.details.map((detail) => <span key={detail}>{detail}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsView({ onOpenProject }) {
  return (
    <section className="view view-projects" aria-labelledby="projects-title">
      <div className="view-topline">
        <span>03 / Project</span>
        <p>Select a field to enter its dedicated portfolio page.</p>
      </div>

      <div className="project-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h1 id="projects-title">Pick a world to explore.</h1>
        </div>
        <p>Every category opens its own focused viewing space. No mixed archive, no long scroll.</p>
      </div>

      <div className="project-choice-grid">
        {projectCategories.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className="project-choice"
            onClick={() => onOpenProject(project.id)}
            style={{ "--project-index": index }}
          >
            {project.image ? (
              <img src={project.image} alt="" loading={index === 0 ? "eager" : "lazy"} />
            ) : (
              <span className="project-video-visual" aria-hidden="true">
                <span className="video-visual-meta">EDIT / 02</span>
                <strong>VE</strong>
                <span className="video-visual-wave">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </span>
            )}
            <span className="project-overlay" />
            <span className="project-choice-top">
              <small>{project.number}</small>
              <small>{project.count}</small>
            </span>
            <span className="project-choice-copy">
              <small>{project.type}</small>
              <strong>{project.title}</strong>
              <em>{project.description}</em>
            </span>
            <span className="project-choice-arrow"><Arrow diagonal /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

function DetailControls({ current, total, onPrevious, onNext }) {
  return (
    <div className="detail-controls">
      <span>{String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      <div>
        <button type="button" onClick={onPrevious} aria-label="Previous project">←</button>
        <button type="button" onClick={onNext} aria-label="Next project">→</button>
      </div>
    </div>
  );
}

function ProjectDetailView({ type, onBack }) {
  const [index, setIndex] = useState(0);
  const isGraphic = type === "graphic";
  const isWeb = type === "webapp";
  const collection = isGraphic ? artworks : isWeb ? webScreens : videos;
  const item = collection[index];
  const title = isGraphic ? "Graphic Design" : isWeb ? "IMAN IN MOTION" : "Video Editing";
  const sectionLabel = isGraphic ? "Visual archive" : isWeb ? "Digital product case study" : "Cinematic reel";

  const previous = () => setIndex((current) => (current - 1 + collection.length) % collection.length);
  const next = () => setIndex((current) => (current + 1) % collection.length);

  return (
    <section className="view view-detail" aria-labelledby="detail-title">
      <div className="view-topline detail-topline">
        <button className="back-button" type="button" onClick={onBack}>← Back to project</button>
        <p>{sectionLabel}</p>
      </div>

      <div className="detail-layout">
        <div className={`detail-media ${isWeb ? "is-web" : ""} ${type === "video" ? "is-video" : ""}`}>
          {type === "video" ? (
            <iframe
              key={item.youtubeId}
              src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img src={item.image} alt={item.title} />
          )}
          <span className="media-frame" />
          <span className="detail-orbit orbit-one" />
          <span className="detail-orbit orbit-two" />
        </div>

        <article className="detail-copy">
          <div>
            <p className="eyebrow">{sectionLabel}</p>
            <h1 id="detail-title">{isWeb ? "IMAN IN MOTION" : item.title}</h1>
            <p className="detail-lead">
              {isWeb
                ? "A mood-based Islamic film discovery web app for digital Islamic literacy."
                : item.description || item.label}
            </p>
          </div>

          {isGraphic && (
            <div className="detail-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}

          {isWeb && (
            <div className="product-facts">
              <span><strong>696+</strong> curated films</span>
              <span><strong>06</strong> mood pathways</span>
              <span><strong>AIMAN</strong> AI chatbot</span>
              <span><strong>HKI</strong> protected work</span>
            </div>
          )}

          {type === "video" && (
            <a className="external-button" href={item.href} target="_blank" rel="noreferrer">
              Watch on YouTube <Arrow diagonal />
            </a>
          )}

          {isGraphic && (
            <a className="external-button" href="https://www.instagram.com/uwiberani/" target="_blank" rel="noreferrer">
              View source archive <Arrow diagonal />
            </a>
          )}

          {isWeb && (
            <a className="external-button" href="https://iman-in-motion.web.id" target="_blank" rel="noreferrer">
              Visit live product <Arrow diagonal />
            </a>
          )}

          <DetailControls current={index} total={collection.length} onPrevious={previous} onNext={next} />
        </article>
      </div>
      <p className="detail-caption">{item.id} / {isWeb ? item.title : isGraphic ? item.category : item.label}</p>
    </section>
  );
}

function ContactView() {
  const contacts = [
    { label: "Email", value: "rizkidwifrb@gmail.com", href: "mailto:rizkidwifrb@gmail.com" },
    { label: "WhatsApp", value: "+62 896-8221-8382", href: "https://wa.me/6289682218382" },
    { label: "Instagram", value: "@uwiberani", href: "https://www.instagram.com/uwiberani/" },
    { label: "LinkedIn", value: "Rizki Dwi Febriansyah", href: linkedinUrl },
  ];

  return (
    <section className="view view-contact" aria-labelledby="contact-title">
      <div className="view-topline">
        <span>04 / Contact</span>
        <p>Available for selected creative and digital opportunities.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-hero">
          <p className="eyebrow">Open a conversation</p>
          <h1 id="contact-title">Let&apos;s make something move.</h1>
          <p>For roles, projects, and ideas that need a clear visual point of view.</p>
        </div>
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
              <span>{String(index + 1).padStart(2, "0")} / {contact.label}</span>
              <strong>{contact.value}</strong>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
      <footer className="view-footer">
        <span>Rizki Dwi Febriansyah, S.Sos.</span>
        <span>Visual Specialist · Bogor, Indonesia</span>
      </footer>
    </section>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("about");
  const appRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && ["graphic", "webapp", "video"].includes(activePage)) {
        setActivePage("projects");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePage]);

  const moveGravity = (event) => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const rect = appRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
    const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
    appRef.current?.style.setProperty("--gravity-x", x);
    appRef.current?.style.setProperty("--gravity-y", y);
  };

  const resetGravity = () => {
    appRef.current?.style.setProperty("--gravity-x", "0");
    appRef.current?.style.setProperty("--gravity-y", "0");
  };

  const renderView = () => {
    if (activePage === "about") return <AboutView />;
    if (activePage === "work") return <WorkView />;
    if (activePage === "projects") return <ProjectsView onOpenProject={setActivePage} />;
    if (activePage === "graphic" || activePage === "webapp" || activePage === "video") {
      return <ProjectDetailView type={activePage} onBack={() => setActivePage("projects")} />;
    }
    return <ContactView />;
  };

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div
        ref={appRef}
        className={`portfolio-app ${isLoading ? "is-loading" : ""}`}
        onPointerMove={moveGravity}
        onPointerLeave={resetGravity}
      >
        <GravityField />
        <Header activePage={activePage} onNavigate={setActivePage} />
        <main className="view-stage" key={activePage}>
          {renderView()}
        </main>
      </div>
    </>
  );
}
