import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Map, Brain, BarChart2, CheckCircle2, Zap, Star } from 'lucide-react';
import Footer from '../components/Footer';
import './Landing.css';

const features = [
  {
    icon: Upload,
    title: 'Upload Any Syllabus',
    description: 'Drop a PDF, DOCX, or paste raw text. We parse and structure it instantly into a learning plan.',
    color: 'var(--primary)',
  },
  {
    icon: Map,
    title: 'Smart Roadmaps',
    description: 'Every topic becomes a visual node-based roadmap with clear milestones and dependencies.',
    color: 'var(--success)',
  },
  {
    icon: Brain,
    title: 'Curated Resources',
    description: 'Each subtopic gets hand-picked YouTube videos, articles, and documentation links.',
    color: 'var(--gold)',
  },
  {
    icon: BarChart2,
    title: 'Progress Tracking',
    description: 'Visual progress rings and completion indicators keep you motivated and on track.',
    color: '#C084FC',
  },
  {
    icon: CheckCircle2,
    title: 'Adaptive Quizzes',
    description: 'Test your understanding with timed MCQ quizzes generated per topic.',
    color: 'var(--error)',
  },
  {
    icon: Zap,
    title: 'Personal Dashboard',
    description: 'All your uploaded syllabi, progress, streaks, and achievements — in one clean view.',
    color: 'var(--primary)',
  },
];

const stats = [
  { value: '50K+', label: 'Learners' },
  { value: '1M+', label: 'Topics Studied' },
  { value: '98%', label: 'Completion Rate' },
  { value: '4.9★', label: 'Avg Rating' },
];

const testimonials = [
  { name: 'Priya Nair', role: 'CS Student, IIT Delhi', text: 'I uploaded my entire semester syllabus and had a full roadmap in seconds. The YouTube video curation alone saved me hours.', avatar: 'P' },
  { name: 'Rahul Mehta', role: 'Backend Engineer', text: 'Using StudySphere to transition into ML. The progress tracking and quizzes keep me honest about what I actually know.', avatar: 'R' },
  { name: 'Aisha Khan', role: 'Self-taught Developer', text: 'Finally a learning tool that doesn\'t feel like a toy. The UI is clean, the roadmaps are thorough.', avatar: 'A' },
];

export default function Landing() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty('--mx', `${x}%`);
      heroRef.current.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="landing">
      {/* ── Navbar (simple, no auth) */}
      <header className="landing-nav">
        <div className="container landing-nav-inner">
          <Link to="/" className="landing-logo">
            <div className="landing-logo-icon"><Zap size={14} strokeWidth={2.5} /></div>
            <span>StudySphere</span>
          </Link>
          <div className="landing-nav-actions">
            <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Get started free</Link>
          </div>
        </div>
      </header>

      {/* ── Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-glow" />
        <div className="container hero-content animate-in">
          <div className="hero-badge">
            <Star size={11} fill="currentColor" />
            <span>Trusted by 50,000+ learners</span>
          </div>
          <h1 className="hero-title font-display">
            Turn your syllabus into<br />
            <span className="hero-title-gradient">a mastery roadmap</span>
          </h1>
          <p className="hero-subtitle">
            Upload any PDF, DOCX, or topic name. StudySphere generates a structured roadmap,
            curates YouTube videos &amp; resources, and tracks your progress — all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn-primary btn-xl">
              Start learning free <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn btn-secondary btn-lg">
              Sign in
            </Link>
          </div>
          <div className="hero-note">No credit card required · Free forever plan</div>
        </div>

        {/* Hero visual */}
        <div className="container hero-visual-wrap">
          <div className="hero-visual animate-scale">
            <div className="hero-visual-header">
              <div className="hero-visual-dots">
                <span /><span /><span />
              </div>
              <span className="hero-visual-title">Full-Stack Web Development</span>
              <span className="badge badge-success" style={{marginLeft: 'auto'}}>42% complete</span>
            </div>
            <div className="hero-visual-body">
              {['HTML & CSS', 'JavaScript', 'React Framework', 'Node.js & Express', 'Databases', 'Deployment'].map((t, i) => (
                <div key={t} className={`hero-node ${i < 2 ? 'done' : i === 2 ? 'active' : 'pending'}`}>
                  <div className="hero-node-dot" />
                  <span>{t}</span>
                  {i < 2 && <CheckCircle2 size={13} className="hero-node-check" />}
                  {i === 2 && <div className="hero-node-progress"><div style={{width:'25%'}} /></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats */}
      <section className="stats-bar">
        <div className="container stats-bar-inner">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value font-display">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Features</div>
            <h2 className="section-title font-display">Everything you need to learn deeply</h2>
            <p className="section-sub">Not just a list of links. A full learning system built around your material.</p>
          </div>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, description, color }, i) => (
              <div className="feature-card card card-interactive" key={title} style={{ animationDelay: `${i * 50}ms` }}>
                <div className="feature-icon" style={{ background: `${color}15`, color }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works */}
      <section className="section how-section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">How it works</div>
            <h2 className="section-title font-display">Three steps to mastery</h2>
          </div>
          <div className="how-steps">
            {[
              { step: '01', title: 'Upload your syllabus', desc: 'Drag and drop a PDF or type your topic. We do the heavy lifting.' },
              { step: '02', title: 'Get your roadmap', desc: 'A structured, node-based learning path appears instantly with curated resources.' },
              { step: '03', title: 'Learn & track progress', desc: 'Work through topics, watch videos, take quizzes, and watch your progress grow.' },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="how-step">
                <div className="how-step-number font-display">{step}</div>
                <div className="how-step-connector" />
                <h3 className="how-step-title">{title}</h3>
                <p className="how-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">Testimonials</div>
            <h2 className="section-title font-display">Loved by learners</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(({ name, role, text, avatar }) => (
              <div key={name} className="testimonial-card card">
                <div className="testimonial-stars">{'★★★★★'}</div>
                <p className="testimonial-text">"{text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{avatar}</div>
                  <div>
                    <div className="testimonial-name">{name}</div>
                    <div className="testimonial-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <h2 className="cta-title font-display">Ready to learn smarter?</h2>
            <p className="cta-sub">Join 50,000+ learners who turned their syllabi into structured journeys.</p>
            <Link to="/signup" className="btn btn-primary btn-xl">
              Get started — it's free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
