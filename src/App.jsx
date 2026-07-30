"use client";

import { useEffect, useRef, useState } from "react";
import {
  siCoreldraw,
  siCss,
  siGithub,
  siHtml5,
  siJavascript,
  siReact,
  siTailwindcss,
  siVite,
} from "simple-icons";

const artworks = [
  {
    id: "01",
    title: "NIVEA MEN — Body Odor Campaign",
    category: "Campaign",
    image: "assets/graphic-design/nivea-men-campaign.jpg",
    description:
      "Product-led campaign visual with a direct headline, dramatic lighting, and a clear promotional hierarchy.",
    tags: ["Campaign Visual", "Product Design", "Social Media"],
  },
  {
    id: "02",
    title: "Captain Morgan — Spiced Gold",
    category: "Campaign",
    image: "assets/graphic-design/captain-morgan-campaign.jpg",
    description:
      "A cinematic product composition built around atmosphere, depth, and a warm narrative setting.",
    tags: ["Key Visual", "Composition", "Advertising"],
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

const capabilities = [
  {
    id: "01",
    title: "Graphic Design",
    description:
      "Campaign visuals, social media systems, poster composition, and brand-led art direction.",
    tools: "Photoshop · Illustrator · CorelDRAW · Canva",
  },
  {
    id: "02",
    title: "Video Editing",
    description:
      "Narrative pacing, human-interest stories, institutional edits, and broadcast-ready visuals.",
    tools: "CapCut · vMix · Visual Storytelling",
  },
  {
    id: "03",
    title: "Digital Product",
    description:
      "UI/UX, responsive frontends, fullstack product thinking, and useful AI integration.",
    tools: "React · JavaScript · Web Development · AI",
  },
];

const skillTools = [
  {
    name: "Adobe Photoshop",
    short: "Ps",
    category: "Image Editing",
    color: "#31a8ff",
  },
  {
    name: "Adobe Illustrator",
    short: "Ai",
    category: "Vector Design",
    color: "#ff9a00",
  },
  {
    name: "Canva",
    short: "Ca",
    category: "Visual Design",
    color: "#7d72ff",
    variant: "canva",
  },
  {
    name: "CorelDRAW",
    short: "Cd",
    category: "Vector Design",
    color: "#61c454",
    icon: siCoreldraw,
  },
  {
    name: "CapCut",
    short: "Cc",
    category: "Video Editing",
    color: "#f4f4ef",
    variant: "capcut",
  },
  {
    name: "vMix",
    short: "vM",
    category: "Live Production",
    color: "#8b7cff",
    variant: "vmix",
  },
  {
    name: "React",
    short: "Re",
    category: "Frontend",
    color: "#61dafb",
    icon: siReact,
  },
  {
    name: "JavaScript",
    short: "JS",
    category: "Language",
    color: "#f7df1e",
    icon: siJavascript,
  },
  {
    name: "HTML5",
    short: "H5",
    category: "Markup",
    color: "#e34f26",
    icon: siHtml5,
  },
  {
    name: "CSS",
    short: "C3",
    category: "Styling",
    color: "#663399",
    icon: siCss,
  },
  {
    name: "Tailwind CSS",
    short: "Tw",
    category: "Styling",
    color: "#06b6d4",
    icon: siTailwindcss,
  },
  {
    name: "Vite",
    short: "Vi",
    category: "Build Tool",
    color: "#8b5cf6",
    icon: siVite,
  },
  {
    name: "GitHub",
    short: "Gh",
    category: "Version Control",
    color: "#f4f4ef",
    icon: siGithub,
  },
  {
    name: "Visual Storytelling",
    short: "VS",
    category: "Creative Direction",
    color: "#ff6b8a",
    variant: "story",
  },
  {
    name: "AI Integration",
    short: "AI",
    category: "Digital Product",
    color: "#55e6c1",
    variant: "ai",
  },
  {
    name: "Live Streaming",
    short: "LS",
    category: "Broadcast",
    color: "#ff5e57",
    variant: "live",
  },
];

const experiences = [
  {
    period: "2026 — Present",
    role: "AI Engineer Program",
    company: "Pijak × IBM SkillsBuild",
    note: "Applied AI learning and product exploration.",
  },
  {
    period: "Sep — Dec 2025",
    role: "Videographer",
    company: "Republika Online",
    note: "Professional media workflow, visual journalism, and live-stream production with vMix.",
  },
  {
    period: "May — Jun 2025",
    role: "Graphic Designer · Project-Based",
    company: "NIVEA MEN",
    note: "Digital campaign visuals aligned with product communication and brand direction.",
  },
  {
    period: "2024 — 2025",
    role: "Social Media Manager",
    company: "PT Menata Visual Utama",
    note: "Content strategy, creative direction, publishing, and performance evaluation.",
  },
  {
    period: "2022 — 2024",
    role: "Social Media Coordinator",
    company: "PT Frisian Flag Indonesia",
    note: "Social content coordination and visual communication support.",
  },
];

const certifications = [
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
  },
];

const filters = [
  "All",
  "Poster",
  "Social Media",
  "Campaign",
  "Brand Visual",
];

const linkedinUrl =
  "https://www.linkedin.com/in/rizki-dwi-febriansyah-s-sos-5152931a6";

const primaryNavigation = [
  { id: "about", number: "01", label: "About" },
  { id: "work", number: "02", label: "Work" },
  { id: "web-project", number: "03", label: "Web" },
  { id: "contact", number: "04", label: "Contact" },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Tilt({ children, className = "" }) {
  const onMove = (event) => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--rx", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--ry", `${x * 6}deg`);
    event.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const reset = (event) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      className={`tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

function SkillMark({ tool }) {
  return (
    <span
      className={`skill-logo ${tool.variant ? `is-${tool.variant}` : ""}`}
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

function AboutProfile() {
  return (
    <section id="about-profile" className="about-section section-space">
      <div className="shell about-intro-grid">
        <div className="reveal">
          <SectionLabel number="01">About Profile</SectionLabel>
          <p className="about-index-note">
            Creative communication, visual craft, and digital product thinking.
          </p>
        </div>

        <div className="about-copy reveal">
          <h2>Built for visuals that stay with you.</h2>
          <p className="about-lead">
            Rizki Dwi Febriansyah, S.Sos. is a Visual Specialist focused on
            graphic design, video editing, visual storytelling, and digital
            innovation.
          </p>
          <p>
            With a Communication and Islamic Broadcasting background from
            Universitas Ibn Khaldun Bogor, he approaches every visual as a
            communication problem first, then brings design, motion, product
            thinking, and technology together to solve it.
          </p>
          <div className="education-line">
            <span>Education</span>
            <strong>S.Sos. · Universitas Ibn Khaldun Bogor</strong>
            <small>2022—2026 · GPA 3.57</small>
          </div>
          <div className="about-intro-actions">
            <a href="#profile">
              Experience & certifications <Arrow />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn profile <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>

      <div className="shell about-profile-sheet reveal">
        <article className="profile-sheet-block">
          <span>01 / Strengths</span>
          <h3>What I bring</h3>
          <ul>
            <li>
              <strong>Cross-disciplinary execution</strong>
              <small>Design, motion, product, and technology in one workflow.</small>
            </li>
            <li>
              <strong>End-to-end ownership</strong>
              <small>From research and concept to interface, build, and delivery.</small>
            </li>
            <li>
              <strong>Communication-first thinking</strong>
              <small>Visual decisions are grounded in audience, message, and purpose.</small>
            </li>
            <li>
              <strong>Learning agility</strong>
              <small>Comfortable moving between creative craft and emerging technology.</small>
            </li>
          </ul>
        </article>

        <article className="profile-sheet-block">
          <span>02 / Growth Areas</span>
          <h3>How I improve</h3>
          <ul>
            <li>
              <strong>Detail bias</strong>
              <small>I can refine too deeply, so I use time-boxing and clear approval points.</small>
            </li>
            <li>
              <strong>Wide creative scope</strong>
              <small>I manage multidisciplinary ideas with priorities, milestones, and one core objective.</small>
            </li>
            <li>
              <strong>Delegation discipline</strong>
              <small>I am improving how I document decisions and hand work off earlier.</small>
            </li>
          </ul>
        </article>

        <article className="profile-sheet-block skills-block">
          <span>03 / Skills</span>
          <h3>Creative stack</h3>
          <div className="about-skills">
            {[
              "Graphic Design",
              "Video Editing",
              "Visual Storytelling",
              "UI/UX Design",
              "Art Direction",
              "Social Media",
              "Frontend Development",
              "Fullstack Development",
              "AI Integration",
              "Live Streaming",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="profile-sheet-block reach-block">
          <span>04 / Reach Me</span>
          <h3>Open a conversation</h3>
          <div className="about-contact-list">
            <a href="mailto:rizkidwifrb@gmail.com">
              <span>Email</span>
              <strong>rizkidwifrb@gmail.com</strong>
              <Arrow diagonal />
            </a>
            <a href="https://wa.me/6289682218382" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>+62 896-8221-8382</strong>
              <Arrow diagonal />
            </a>
            <a href="https://www.instagram.com/uwiberani/" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@uwiberani</strong>
              <Arrow diagonal />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Rizki Dwi Febriansyah</strong>
              <Arrow diagonal />
            </a>
          </div>
          <div className="about-availability">
            <div><span>Based in</span><strong>Bogor, Indonesia</strong></div>
            <div><span>Focus</span><strong>Visual & Digital Creative</strong></div>
            <div><span>Status</span><strong>Open to selected opportunities</strong></div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeArtwork, setActiveArtwork] = useState(null);
  const [activeSection, setActiveSection] = useState("about");
  const portraitRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const modalCloseRef = useRef(null);
  const artworkTriggerRef = useRef(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setActiveArtwork(null);
      }
    };
    window.addEventListener("keydown", close);
    document.body.style.overflow = activeArtwork ? "hidden" : "";
    if (activeArtwork) {
      requestAnimationFrame(() => modalCloseRef.current?.focus());
    } else {
      artworkTriggerRef.current?.focus();
    }
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [activeArtwork]);

  useEffect(() => {
    const sections = primaryNavigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -58% 0px", threshold: [0, 0.1, 0.25] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      scrollProgressRef.current?.style.setProperty(
        "--scroll-progress",
        Math.min(1, Math.max(0, progress)),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const movePortrait = (event) => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    portraitRef.current?.style.setProperty("--px", `${x * 18}px`);
    portraitRef.current?.style.setProperty("--py", `${y * 18}px`);
  };

  const filteredArtworks =
    activeFilter === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeFilter);

  return (
    <main id="top">
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#about" aria-label="Go to About Rizki">
          <span className="brand-avatar">
            <img
              src="assets/profile/rizki-dwi-febriansyah.png"
              alt=""
              aria-hidden="true"
            />
          </span>
          <span className="brand-copy">
            <strong>Rizki Dwi Febriansyah, S.Sos.</strong>
            <small>Visual Specialist · Bogor</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:rizkidwifrb@gmail.com">
          Contact me <Arrow diagonal />
        </a>

        <a className="mobile-mail" href="mailto:rizkidwifrb@gmail.com">
          Hire me <Arrow diagonal />
        </a>

        <span
          ref={scrollProgressRef}
          className="scroll-progress"
          aria-hidden="true"
        />
      </header>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        {primaryNavigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            <span>{item.number}</span>
            <strong>{item.label}</strong>
          </a>
        ))}
      </nav>

      <section id="about" className="hero about-hero shell">
        <div className="hero-copy reveal visible">
          <div className="hero-heading">
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>About Rizki · Bogor, Indonesia</span>
              <span className="hero-year">Open to opportunities</span>
            </div>

            <h1>
              <span className="hero-greeting">Hi, I&apos;m Rizki.</span>
              <span>Visual</span>
              <span className="outlined">specialist.</span>
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="hero-intro">
              <strong>Rizki Dwi Febriansyah, S.Sos.</strong>
              <p>
                Graphic Designer, Video Editor, and Digital Creative creating
                visuals that move people and stay with them.
              </p>
              <small>
                S.Sos. · Universitas Ibn Khaldun Bogor · GPA 3.57
              </small>
            </div>
            <div className="hero-actions">
              <a className="button light" href="#work">
                View selected work <Arrow diagonal />
              </a>
              <a className="text-link" href="#about-profile">
                Explore my profile <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div
          className="hero-portrait-wrap reveal visible"
          onPointerMove={movePortrait}
          onPointerLeave={() => {
            portraitRef.current?.style.setProperty("--px", "0px");
            portraitRef.current?.style.setProperty("--py", "0px");
          }}
        >
          <div className="portrait-code">RDF—01</div>
          <div className="hero-nametag" aria-label="Rizki creative identity">
            <div className="nametag-top">
              <span>Creative ID</span>
              <small>RDF / 026</small>
            </div>
            <strong>Rizki Dwi<br />Febriansyah</strong>
            <p>Visual Specialist</p>
          </div>
          <a
            ref={portraitRef}
            className="hero-portrait"
            href="#about-profile"
            aria-label="Open Rizki's profile details"
          >
            <img
              src="assets/profile/rizki-dwi-febriansyah.png"
              alt="Rizki Dwi Febriansyah, S.Sos."
            />
            <div className="portrait-gradient" />
            <span className="portrait-name">
              <small>Design · Motion · Digital</small>
              <strong>Rizki Dwi Febriansyah</strong>
            </span>
            <span className="portrait-about-cta">
              View profile <Arrow diagonal />
            </span>
          </a>
          <div className="portrait-tag tag-two">
            <span>NOW EXPLORING</span>
            <strong>Design × Motion × AI</strong>
          </div>
          <div className="portrait-cross cross-one">+</div>
          <div className="portrait-cross cross-two">+</div>
        </div>

        <div className="hero-rail">
          <span>Scroll to explore</span>
          <i />
          <span>03 disciplines · 01 point of view</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio facts">
        <div className="shell proof-grid">
          <div>
            <strong>03</strong>
            <span>Creative disciplines</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Original design works</span>
          </div>
          <div>
            <strong>696+</strong>
            <span>Films curated in IMAN IN MOTION</span>
          </div>
          <div>
            <strong>3.57</strong>
            <span>Academic GPA · S.Sos.</span>
          </div>
        </div>
      </section>

      <AboutProfile />

      <section id="work" className="selected-work shell section-space">
        <div className="section-head reveal">
          <SectionLabel number="02">Selected Work</SectionLabel>
          <h2>One visual mind. Three ways to make an impact.</h2>
        </div>

        <div className="work-index">
          <article className="work-row reveal">
            <div className="work-number">01</div>
            <div className="work-copy">
              <span>Graphic Design</span>
              <h3>Visuals built to stop the scroll.</h3>
              <p>
                Campaign composition, poster systems, product visuals, and
                brand-led social content.
              </p>
              <div className="micro-tags">
                <span>Poster</span>
                <span>Campaign</span>
                <span>Social Media</span>
              </div>
              <a href="#graphic-design">
                Explore design archive <Arrow diagonal />
              </a>
            </div>
            <Tilt className="work-media design-stack">
              <img
                src="assets/graphic-design/matchday-campaign.jpg"
                alt="Matchday graphic design by Rizki"
                loading="lazy"
              />
              <img
                src="assets/graphic-design/nivea-men-campaign.jpg"
                alt="NIVEA MEN campaign graphic by Rizki"
                loading="lazy"
              />
            </Tilt>
          </article>

          <article className="work-row reverse reveal">
            <div className="work-number">02</div>
            <div className="work-copy">
              <span>Video Editing</span>
              <h3>Edits with rhythm, clarity, and feeling.</h3>
              <p>
                Human-interest storytelling and institutional video shaped
                through pace, sequencing, and visual focus.
              </p>
              <div className="micro-tags">
                <span>Story Edit</span>
                <span>Editorial</span>
                <span>YouTube</span>
              </div>
              <a href="#video-editing">
                Watch selected edits <Arrow diagonal />
              </a>
            </div>
            <Tilt className="work-media video-cover">
              <img
                src="https://i.ytimg.com/vi/hUufVZppXqk/hqdefault.jpg"
                alt="Video editing project preview"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://i.ytimg.com/vi/hUufVZppXqk/mqdefault.jpg";
                }}
              />
              <span className="play-disc">▶</span>
              <span className="timecode">00:01:14:08</span>
              <div className="edit-track">
                <i />
                <i />
                <i />
                <i />
              </div>
            </Tilt>
          </article>

          <article className="work-row reveal">
            <div className="work-number">03</div>
            <div className="work-copy">
              <span>Web Project</span>
              <h3>Digital experience with a reason to exist.</h3>
              <p>
                A mood-based Islamic film discovery product combining
                research, interface design, fullstack development, and AI.
              </p>
              <div className="micro-tags">
                <span>UI/UX</span>
                <span>Fullstack</span>
                <span>AI Integration</span>
              </div>
              <a href="#web-project">
                Read the case study <Arrow diagonal />
              </a>
            </div>
            <Tilt className="work-media web-cover">
              <img
                src="assets/iman-in-motion/06-mood-pathway.jpg"
                alt="IMAN IN MOTION mood discovery screen"
                loading="lazy"
              />
              <div className="web-cover-note">
                <span>Original product screenshot</span>
                <strong>03:04</strong>
              </div>
            </Tilt>
          </article>
        </div>
      </section>

      <section id="web-project" className="web-case section-space">
        <div className="shell">
          <div className="case-header reveal">
            <SectionLabel number="03">Only Web Project</SectionLabel>
            <div className="case-title">
              <p>Mood-Based Islamic Film Discovery Web App</p>
              <h2>IMAN IN<br />MOTION</h2>
              <a
                className="button light"
                href="https://iman-in-motion.web.id"
                target="_blank"
                rel="noreferrer"
              >
                Visit live product <Arrow diagonal />
              </a>
            </div>
          </div>

          <div className="case-overview reveal">
            <p>
              A digital product that starts with how people feel—not a genre
              dropdown. IMAN IN MOTION connects mood, film, Islamic literacy,
              and AI-assisted reflection in one focused experience.
            </p>
            <div className="case-facts">
              <div><strong>696+</strong><span>curated films</span></div>
              <div><strong>06</strong><span>mood pathways</span></div>
              <div><strong>AIMAN</strong><span>AI chatbot</span></div>
              <div><strong>HKI</strong><span>No. 001241778</span></div>
            </div>
          </div>

          <div className="role-ticker reveal" aria-label="Roles on IMAN IN MOTION">
            {[
              "Founder",
              "Product Owner",
              "Fullstack Developer",
              "UI/UX Designer",
              "Graphic Designer",
              "AI Integrator",
              "Researcher",
            ].map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>

          <div className="iim-gallery">
            {webScreens.map((screen, index) => (
              <figure
                key={screen.id}
                className={`iim-shot reveal ${index === 0 || index === 3 ? "offset" : ""}`}
              >
                <div className="screen-frame">
                  <div className="screen-chrome">
                    <i />
                    <i />
                    <i />
                    <span>iman-in-motion.web.id</span>
                  </div>
                  <img src={screen.image} alt={`IMAN IN MOTION — ${screen.title}`} loading="lazy" />
                </div>
                <figcaption>
                  <span>{screen.id}</span>
                  <div>
                    <strong>{screen.title}</strong>
                    <small>{screen.label}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="case-narrative reveal">
            <article>
              <span>01 / The Challenge</span>
              <h3>Discovery usually starts from category. People often start from emotion.</h3>
              <p>
                The product needed to make Islamic film discovery personal,
                approachable, and relevant to the habits of younger digital
                audiences.
              </p>
            </article>
            <article>
              <span>02 / The Solution</span>
              <h3>A guided path from mood to film, reflection, and deeper literacy.</h3>
              <p>
                Six mood pathways, curated recommendations, editorial
                literacy, and AIMAN turn a simple search into a thoughtful
                experience.
              </p>
            </article>
            <article>
              <span>03 / Core Experience</span>
              <h3>Clear enough to use quickly. Meaningful enough to remember.</h3>
              <p>
                AI-assisted discovery supports the journey without replacing
                human curation, context, or responsibility.
              </p>
            </article>
            <article>
              <span>04 / Impact</span>
              <h3>A working protected digital product—not a speculative mockup.</h3>
              <p>
                IMAN IN MOTION contains 696+ curated films and is officially
                recorded as an HKI-protected digital work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="graphic-design" className="design-archive shell section-space">
        <div className="archive-head reveal">
          <SectionLabel number="04">Graphic Design Archive</SectionLabel>
          <div>
            <h2>Selected visual work from @uwiberani.</h2>
            <p>
              Original portfolio assets supplied by Rizki. Select a work to
              view it in detail.
            </p>
          </div>
        </div>

        <div className="filter-bar reveal" role="group" aria-label="Filter graphic design archive">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="art-grid">
          {filteredArtworks.map((artwork) => (
            <article className="art-item reveal" key={artwork.id}>
              <Tilt className="art-visual">
                <button
                  type="button"
                  onClick={(event) => {
                    artworkTriggerRef.current = event.currentTarget;
                    setActiveArtwork(artwork);
                  }}
                  aria-label={`Open ${artwork.title}`}
                >
                  <img src={artwork.image} alt={artwork.title} loading="lazy" />
                  <span className="art-open">Open work <Arrow diagonal /></span>
                </button>
              </Tilt>
              <div className="art-meta">
                <span>{artwork.id}</span>
                <div>
                  <h3>{artwork.title}</h3>
                  <p>{artwork.category}</p>
                </div>
                <span>4:5</span>
              </div>
            </article>
          ))}
        </div>

        <a
          className="archive-source"
          href="https://www.instagram.com/uwiberani/"
          target="_blank"
          rel="noreferrer"
        >
          View source archive on Instagram <Arrow diagonal />
        </a>
      </section>

      <section id="video-editing" className="video-section section-space">
        <div className="shell">
          <div className="section-head reveal">
            <SectionLabel number="05">Video Editing</SectionLabel>
            <h2>Cinematic rhythm. Human attention.</h2>
          </div>

          <div className="video-list">
            <article className="video-project reveal">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/hUufVZppXqk?rel=0"
                  title="SALUT BANGET!! SEORANG PENGAMEN INSPIRATIF YANG BERJUANG SEJAK SMP"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="frame-line" aria-hidden="true" />
              </div>
              <div className="video-copy">
                <span>01 / Human Interest Edit</span>
                <h3>SALUT BANGET!! SEORANG PENGAMEN INSPIRATIF YANG BERJUANG SEJAK SMP</h3>
                <p>
                  A story-led edit shaped around resilience, emotional pacing,
                  and a clear human arc.
                </p>
                <div className="timeline">
                  <i /><i /><i /><i /><i />
                  <span>00:01:14:08</span>
                </div>
                <a href="https://youtu.be/hUufVZppXqk" target="_blank" rel="noreferrer">
                  Watch on YouTube <Arrow diagonal />
                </a>
              </div>
            </article>

            <article className="video-project reverse reveal">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/B-Vnd_ngheM?rel=0"
                  title="KOMUNIKASI DAN PENYIARAN ISLAM UIKA BOGOR"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="frame-line" aria-hidden="true" />
              </div>
              <div className="video-copy">
                <span>02 / Institutional Edit</span>
                <h3>KOMUNIKASI DAN PENYIARAN ISLAM UIKA BOGOR</h3>
                <p>
                  An institutional edit balancing information, visual rhythm,
                  and a focused academic identity.
                </p>
                <div className="timeline">
                  <i /><i /><i /><i /><i />
                  <span>00:02:09:17</span>
                </div>
                <a href="https://youtu.be/B-Vnd_ngheM" target="_blank" rel="noreferrer">
                  Watch on YouTube <Arrow diagonal />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="profile" className="profile-section section-space">
        <div className="shell">
          <div className="section-head reveal">
            <SectionLabel number="06">Capability Profile</SectionLabel>
            <h2>Built to connect craft, communication, and technology.</h2>
          </div>

          <div className="capability-list">
            {capabilities.map((capability) => (
              <article key={capability.id} className="capability reveal">
                <span>{capability.id}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <small>{capability.tools}</small>
              </article>
            ))}
          </div>

          <div className="skill-wall reveal">
            <div className="skill-wall-head">
              <div>
                <span>Toolbox / 16</span>
                <h3>Tools I use to make ideas real.</h3>
              </div>
              <p>
                A practical stack across design, motion, live production, and
                digital products.
              </p>
            </div>

            <div className="skill-logo-grid" role="list" aria-label="Creative and digital tools">
              {skillTools.map((tool, index) => (
                <article
                  key={tool.name}
                  role="listitem"
                  className="skill-card"
                  style={{
                    "--tool-color": tool.color,
                    "--skill-index": index,
                  }}
                >
                  <SkillMark tool={tool} />
                  <span className="skill-card-copy">
                    <strong>{tool.name}</strong>
                    <small>{tool.category}</small>
                  </span>
                  <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                </article>
              ))}
            </div>
          </div>

          <div className="career-grid">
            <div className="experience reveal">
              <div className="subsection-title">
                <span>A</span>
                <h3>Selected Experience</h3>
              </div>
              {experiences.map((experience) => (
                <article key={`${experience.period}-${experience.company}`}>
                  <span>{experience.period}</span>
                  <div>
                    <h4>{experience.role}</h4>
                    <strong>{experience.company}</strong>
                    <p>{experience.note}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="credentials reveal">
              <div className="subsection-title">
                <span>B</span>
                <h3>Selected Certifications</h3>
              </div>
              {certifications.map((certification, index) => (
                <article key={certification.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 lang="id">{certification.title}</h4>
                    <p>{certification.issuer}</p>
                  </div>
                  <small>{certification.date}</small>
                </article>
              ))}
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                View full profile on LinkedIn <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-space">
        <div className="shell">
          <div className="contact-top reveal">
            <p>Have a role, brief, or bold idea?</p>
            <h2>Let&apos;s make<br />something <span>move.</span></h2>
          </div>

          <div className="contact-links reveal">
            <a href="mailto:rizkidwifrb@gmail.com">
              <span>01 / Email</span>
              <strong>rizkidwifrb@gmail.com</strong>
              <Arrow diagonal />
            </a>
            <a href="https://wa.me/6289682218382" target="_blank" rel="noreferrer">
              <span>02 / WhatsApp</span>
              <strong>+62 896-8221-8382</strong>
              <Arrow diagonal />
            </a>
            <a href="https://www.instagram.com/uwiberani/" target="_blank" rel="noreferrer">
              <span>03 / Instagram</span>
              <strong>@uwiberani</strong>
              <Arrow diagonal />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <span>04 / LinkedIn</span>
              <strong>Rizki Dwi Febriansyah</strong>
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <div>
          <strong>RIZKI DWI FEBRIANSYAH, S.Sos.</strong>
          <span>Visual Specialist · Bogor, Indonesia</span>
        </div>
        <a href="#top">Back to top ↑</a>
        <span>© 2026</span>
      </footer>

      {activeArtwork && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveArtwork(null);
          }}
        >
          <div
            className="art-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="art-modal-title"
          >
            <button
              ref={modalCloseRef}
              type="button"
              className="modal-close"
              onClick={() => setActiveArtwork(null)}
              aria-label="Close artwork"
            >
              Close ×
            </button>
            <div className="modal-image">
              <img src={activeArtwork.image} alt={activeArtwork.title} />
            </div>
            <div className="modal-copy">
              <span>{activeArtwork.id} / {activeArtwork.category}</span>
              <h3 id="art-modal-title">{activeArtwork.title}</h3>
              <p>{activeArtwork.description}</p>
              <div className="micro-tags">
                {activeArtwork.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                href="https://www.instagram.com/uwiberani/"
                target="_blank"
                rel="noreferrer"
              >
                Open source profile <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
