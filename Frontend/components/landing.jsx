import { useState } from "react";

const GITHUB_URL = "https://github.com/jatinupadhyay112/Bus-Tracking-System-Tracko-";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --bg2: #0f0f18;
    --surface: #13131e;
    --border: rgba(255,255,255,0.07);
    --accent: #f0c040;
    --accent2: #ff6b35;
    --text: #f0ede8;
    --muted: #7a7a8a;
    --green: #4ade80;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 1.4rem;
    color: var(--accent);
    display: flex; align-items: center; gap: 10px;
    text-decoration: none;
  }

  .nav-links { display: flex; align-items: center; gap: 40px; }

  .nav-links a {
    color: var(--muted); text-decoration: none;
    font-size: 0.9rem; font-weight: 500; letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color 0.2s;
    cursor: pointer;
  }
  .nav-links a:hover { color: var(--text); }

  .nav-cta {
    background: var(--accent) !important;
    color: var(--bg) !important;
    padding: 10px 24px !important;
    border-radius: 6px !important;
    font-weight: 700 !important;
    text-transform: none !important;
    letter-spacing: 0 !important;
    transition: opacity 0.2s !important;
  }
  .nav-cta:hover { opacity: 0.85 !important; }

  section { min-height: 100vh; }

  #home {
    display: flex; align-items: center; justify-content: center;
    padding: 120px 60px 80px;
    position: relative; overflow: hidden;
  }

  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240,192,64,0.08) 0%, transparent 70%),
                radial-gradient(ellipse 40% 40% at 80% 60%, rgba(255,107,53,0.06) 0%, transparent 60%);
  }

  .hero-grid {
    position: absolute; inset: 0; z-index: 0;
    background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .hero-content {
    position: relative; z-index: 1;
    max-width: 900px; text-align: center;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,192,64,0.1);
    border: 1px solid rgba(240,192,64,0.25);
    padding: 6px 16px; border-radius: 100px;
    font-size: 0.78rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 32px;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 800; line-height: 1;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  .hero-title span { color: var(--accent); }

  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--muted); max-width: 560px;
    margin: 0 auto 48px;
    font-weight: 300; line-height: 1.7;
  }

  .hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  .btn-primary {
    background: var(--accent); color: var(--bg);
    padding: 14px 32px; border-radius: 8px;
    font-weight: 700; font-size: 0.95rem;
    text-decoration: none; border: none; cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-primary:hover { transform: translateY(-2px); opacity: 0.9; }

  .btn-outline {
    background: transparent; color: var(--text);
    padding: 14px 32px; border-radius: 8px;
    font-weight: 500; font-size: 0.95rem;
    text-decoration: none; border: 1px solid var(--border); cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    font-family: 'DM Sans', sans-serif;
    display: flex; align-items: center; gap: 8px;
  }
  .btn-outline:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.03); }

  .hero-stats {
    display: flex; gap: 48px; justify-content: center;
    margin-top: 80px; flex-wrap: wrap;
  }

  .stat { text-align: center; }
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2.2rem; font-weight: 800; color: var(--text);
    display: block;
  }
  .stat-label { font-size: 0.8rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; }

  #video-section {
    padding: 80px 60px 0;
    display: flex;
    justify-content: center;
    background: var(--bg);
  }

  .video-container {
    width: 100%; max-width: 900px;
    position: relative; border-radius: 20px; overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 0 80px rgba(240,192,64,0.08);
    background: var(--surface);
    aspect-ratio: 16/9;
    display: flex; align-items: center; justify-content: center;
  }

  .video-placeholder {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 16px; width: 100%; height: 100%; min-height: 400px;
  }

  .video-play-icon {
    width: 80px; height: 80px;
    background: rgba(240,192,64,0.15);
    border: 2px solid rgba(240,192,64,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    animation: pulse 2s infinite;
  }
  .video-play-icon:hover { background: rgba(240,192,64,0.25); transform: scale(1.05); }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(240,192,64,0.3); }
    50% { box-shadow: 0 0 0 16px rgba(240,192,64,0); }
  }

  .video-placeholder-text {
    font-family: 'Syne', sans-serif; font-size: 1.1rem;
    font-weight: 600; color: var(--muted); letter-spacing: 0.05em;
  }
  .video-placeholder-sub { font-size: 0.8rem; color: #3a3a4a; }

  .tracko-video {
    width: 100%; height: 100%; object-fit: cover;
    border-radius: 20px; display: block;
  }

  .video-tag {
    position: absolute; top: 16px; left: 16px;
    background: rgba(240,192,64,0.1);
    border: 1px solid rgba(240,192,64,0.25);
    padding: 4px 12px; border-radius: 100px;
    font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent);
  }

  #about { padding: 120px 60px; background: var(--bg2); }

  .section-label {
    font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.15em;
    color: var(--accent); margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800; line-height: 1.1;
    letter-spacing: -0.02em; margin-bottom: 16px;
  }

  .section-sub {
    color: var(--muted); font-size: 1rem;
    max-width: 500px; font-weight: 300; line-height: 1.7;
    margin-bottom: 64px;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2px;
  }

  .feature-card {
    background: var(--surface); padding: 40px 36px;
    position: relative; overflow: hidden; transition: background 0.3s;
  }
  .feature-card:hover { background: #1a1a28; }

  .feature-icon {
    width: 48px; height: 48px;
    background: rgba(240,192,64,0.1);
    border: 1px solid rgba(240,192,64,0.2);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; margin-bottom: 24px;
  }

  .feature-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;
  }

  .feature-desc { color: var(--muted); font-size: 0.9rem; line-height: 1.7; }

  .how-section { padding: 120px 60px; max-width: 1100px; margin: 0 auto; }

  .roles-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 64px;
  }

  .role-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 36px 32px; position: relative;
  }

  .role-tag {
    display: inline-block; padding: 4px 12px; border-radius: 100px;
    font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;
  }

  .tag-driver { background: rgba(74,222,128,0.1); color: var(--green); border: 1px solid rgba(74,222,128,0.2); }
  .tag-parent { background: rgba(240,192,64,0.1); color: var(--accent); border: 1px solid rgba(240,192,64,0.2); }
  .tag-admin { background: rgba(255,107,53,0.1); color: var(--accent2); border: 1px solid rgba(255,107,53,0.2); }

  .role-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; }

  .role-list { list-style: none; }
  .role-list li {
    color: var(--muted); font-size: 0.88rem;
    padding: 8px 0; border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 10px;
  }
  .role-list li:last-child { border-bottom: none; }
  .role-list li::before { content: "→"; color: var(--accent); font-size: 0.8rem; }

  .tech-section { padding: 80px 60px; background: var(--bg2); text-align: center; }

  .tech-chips { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 48px; }

  .chip {
    background: var(--surface); border: 1px solid var(--border);
    padding: 10px 20px; border-radius: 100px;
    font-size: 0.85rem; font-weight: 500; color: var(--muted);
    transition: border-color 0.2s, color 0.2s;
  }
  .chip:hover { border-color: rgba(240,192,64,0.3); color: var(--text); }

  #contact { padding: 120px 60px; display: flex; justify-content: center; }

  .contact-wrap {
    max-width: 1000px; width: 100%;
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
  }

  .contact-info h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 800; line-height: 1.1;
    letter-spacing: -0.02em; margin-bottom: 20px;
  }

  .contact-info p { color: var(--muted); font-weight: 300; line-height: 1.7; margin-bottom: 40px; }

  .contact-links { display: flex; flex-direction: column; gap: 16px; }

  .contact-link {
    display: flex; align-items: center; gap: 14px;
    color: var(--muted); text-decoration: none;
    font-size: 0.9rem; transition: color 0.2s;
  }
  .contact-link:hover { color: var(--text); }

  .contact-link-icon {
    width: 40px; height: 40px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
  }

  .contact-form { display: flex; flex-direction: column; gap: 16px; }

  .form-group { display: flex; flex-direction: column; gap: 8px; }

  .form-group label {
    font-size: 0.78rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 16px;
    color: var(--text); font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; outline: none;
    transition: border-color 0.2s; resize: vertical;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus { border-color: rgba(240,192,64,0.4); }

  .form-group input::placeholder,
  .form-group textarea::placeholder { color: var(--muted); }

  .form-group select option { background: var(--surface); }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .submit-btn {
    background: var(--accent); color: var(--bg);
    border: none; padding: 14px 32px; border-radius: 8px;
    font-family: 'Syne', sans-serif;
    font-weight: 700; font-size: 0.95rem; cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
    text-align: center; margin-top: 8px;
  }
  .submit-btn:hover { transform: translateY(-2px); opacity: 0.9; }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  .success-msg {
    background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.2);
    border-radius: 8px; padding: 16px;
    color: var(--green); font-size: 0.9rem; text-align: center;
  }

  footer {
    padding: 40px 60px; border-top: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }

  .footer-logo { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--accent); font-size: 1.1rem; }
  .footer-text { color: var(--muted); font-size: 0.85rem; }
  .footer-link { color: var(--muted); text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
  .footer-link:hover { color: var(--text); }

  @media (max-width: 768px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    #home { padding: 100px 24px 60px; }
    #about { padding: 80px 24px; }
    .how-section { padding: 80px 24px; }
    .tech-section { padding: 60px 24px; }
    #contact { padding: 80px 24px; }
    footer { padding: 32px 24px; flex-direction: column; text-align: center; }
    .roles-grid { grid-template-columns: 1fr; }
    .contact-wrap { grid-template-columns: 1fr; gap: 48px; }
    .form-row { grid-template-columns: 1fr; }
    .hero-stats { gap: 32px; }
    #video-section { padding: 60px 24px 0; }
    .video-placeholder { min-height: 220px; }
  }
`;

const features = [
  { icon: "📍", title: "Real-Time Tracking", desc: "Live GPS location of every bus updated every few seconds. Parents and college students always know exactly where the bus is." },
  { icon: "🔔", title: "Smart Notifications", desc: "Automatic alerts when the bus is 10, 5, and 2 minutes away. No more waiting outside in the heat." },
  { icon: "🚌", title: "Driver App", desc: "Simple one-tap interface for drivers. Start route, share location automatically — no complexity." },
  { icon: "👨‍💼", title: "Admin Dashboard", desc: "School and college admins can manage all buses, routes, drivers and users from one place." },
  { icon: "🗺️", title: "Live Map View", desc: "Interactive map showing bus position with estimated time of arrival at each stop." },
  { icon: "🔒", title: "Role-Based Access", desc: "Separate secure logins for drivers, parents, students and admins. Everyone sees only what they need." },
];

const techStack = [
  "React Native", "Expo", "Node.js", "Express.js",
  "Firebase Auth", "Firebase Realtime DB", "MongoDB Atlas",
  "FCM Notifications", "OpenStreetMap", "OSRM"
];

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // FIX: Removed e.preventDefault() — no <form> tag, this is a button onClick handler
  const handleSubmit = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", role: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav>
        <a className="nav-logo" onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
          🚌 Tracko
        </a>
        <div className="nav-links">
          <a onClick={() => scrollTo("home")}>Home</a>
          <a onClick={() => scrollTo("video-section")}>Demo</a>
          <a onClick={() => scrollTo("about")}>About</a>
          <a onClick={() => scrollTo("contact")}>Contact</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="nav-cta">GitHub ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Now in Development
          </div>
          <h1 className="hero-title">
            Your bus.<br />
            Tracked in <span>real-time</span>
          </h1>
          <p className="hero-sub">
            Tracko eliminates the wait at bus stops — for parents tracking school buses and college students tracking campus shuttles. Live location, smart alerts, zero guesswork.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo("about")}>
              See How It Works
            </button>
            <a className="btn-outline" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">User Roles</span></div>
            <div className="stat"><span className="stat-num">Live</span><span className="stat-label">GPS Tracking</span></div>
            <div className="stat"><span className="stat-num">0₹</span><span className="stat-label">Free to Use</span></div>
            <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Mobile First</span></div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <div id="video-section">
        <div className="video-container">
          {/* TODO: Jab video ready ho toh placeholder hata ke video tag uncomment karo
          <video
            className="tracko-video"
            controls
            autoPlay
            muted
            loop
            src="./tracko-demo.mp4"
          />
          */}
          <div className="video-placeholder">
            <div className="video-play-icon">▶</div>
            <p className="video-placeholder-text">Tracko Demo Video</p>
            <p className="video-placeholder-sub">Video coming soon — replace src with your file</p>
          </div>
          <span className="video-tag">🎬 App Demo</span>
        </div>
      </div>

      {/* FEATURES / ABOUT */}
      <section id="about">
        <p className="section-label">What We Built</p>
        <h2 className="section-title">Every feature<br />parents & students need</h2>
        <p className="section-sub">
          Tracko is built mobile-first for real daily use — not a demo project. Every feature is designed around the actual pain points of school and college transport.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="how-section">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">Three roles.<br />One seamless system.</h2>
        <p className="section-sub">
          Tracko works differently for each user — drivers share location, parents and students track it, admins manage everything.
        </p>
        <div className="roles-grid">
          <div className="role-card">
            <span className="role-tag tag-driver">Driver</span>
            <h3 className="role-title">Bus Driver</h3>
            <ul className="role-list">
              <li>Login with assigned credentials</li>
              <li>Tap to start route & share GPS</li>
              <li>Location auto-updates every few seconds</li>
              <li>Mark route as completed</li>
            </ul>
          </div>
          <div className="role-card">
            <span className="role-tag tag-parent">Parent / Student</span>
            <h3 className="role-title">Parent & Student</h3>
            <ul className="role-list">
              <li>See live bus on map</li>
              <li>Get push notification alerts</li>
              <li>View estimated arrival time</li>
              <li>No app refresh needed — live updates</li>
            </ul>
          </div>
          <div className="role-card">
            <span className="role-tag tag-admin">Admin</span>
            <h3 className="role-title">School Admin</h3>
            <ul className="role-list">
              <li>Manage all buses & routes</li>
              <li>Add / remove drivers and users</li>
              <li>View live status of all buses</li>
              <li>Handle announcements & alerts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="tech-section">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Built with modern tools</h2>
        <div className="tech-chips">
          {techStack.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <h2>Get in touch with the team</h2>
            <p>Have questions about Tracko or want to collaborate? Reach out — we're a student team building this for real impact.</p>
            <div className="contact-links">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">🐙</span>
                GitHub Repository
              </a>
              <a href="mailto:team@tracko.dev" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                team@tracko.dev
              </a>
            </div>
          </div>
          <div className="contact-form">
            {submitted ? (
              <div className="success-msg">✅ Message sent! We'll get back to you soon.</div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text" placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email" placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  >
                    <option value="">Select your role</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="admin">School Admin</option>
                    <option value="developer">Developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={5} placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={sending || !form.name || !form.email || !form.message}
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">🚌 Tracko</span>
        <span className="footer-text">Built by AKTU students · 2024</span>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a>
      </footer>
    </>
  );
}