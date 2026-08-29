import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Flame, Trophy, Clock, Edit3 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressRing from '../components/ProgressRing';
import './Profile.css';

export default function Profile() {
  const { state } = useApp();
  const { user, uploadedSyllabi, quizResults } = state;

  const totalProgress = uploadedSyllabi.length
    ? Math.round(uploadedSyllabi.reduce((a, b) => a + b.progress, 0) / uploadedSyllabi.length)
    : 0;

  return (
    <div className="page-layout">
      <Navbar />
      <main className="profile-page animate-in">
        <div className="container">
          {/* Back */}
          <Link to="/dashboard" className="rm-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-2)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
            <ArrowLeft size={15} /> Dashboard
          </Link>

          {/* Profile card */}
          <div className="profile-hero card">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar font-display">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button className="profile-edit-btn" title="Edit profile">
                <Edit3 size={13} />
              </button>
            </div>
            <div className="profile-info">
              <h1 className="profile-name font-display">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-joined">Member since {new Date(user.joinedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="profile-hero-stats">
              <div className="profile-stat">
                <ProgressRing progress={totalProgress} size={68} strokeWidth={5} />
                <span className="profile-stat-label">Avg progress</span>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-num font-display">{user.streak}</div>
                <span className="profile-stat-label">🔥 Day streak</span>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-num font-display">{user.totalTopicsCompleted}</div>
                <span className="profile-stat-label">Topics done</span>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-num font-display">{user.averageQuizScore}%</div>
                <span className="profile-stat-label">Quiz avg</span>
              </div>
            </div>
          </div>

          <div className="profile-grid">
            {/* Left */}
            <div className="profile-col-main">
              {/* Syllabi */}
              <div className="profile-section">
                <div className="profile-section-header">
                  <h2 className="profile-section-title"><BookOpen size={15} /> Syllabi ({uploadedSyllabi.length})</h2>
                </div>
                <div className="profile-syllabi">
                  {uploadedSyllabi.map(s => (
                    <Link key={s.id} to={`/roadmap/${s.id}`} className="profile-syllabus card card-interactive">
                      <div className="profile-syllabus-left">
                        <div className="profile-syllabus-title">{s.title}</div>
                        <div className="profile-syllabus-meta">
                          <Clock size={11} /> {s.uploadedAt}
                        </div>
                      </div>
                      <div className="profile-syllabus-right">
                        <div className="progress-track" style={{ width: 80 }}>
                          <div className="progress-fill" style={{ width: `${s.progress}%` }} />
                        </div>
                        <span className="profile-syllabus-pct">{s.progress}%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quiz results */}
              <div className="profile-section">
                <div className="profile-section-header">
                  <h2 className="profile-section-title"><Brain size={15} /> Quiz History</h2>
                </div>
                {quizResults.length > 0 ? (
                  <div className="profile-quiz-history">
                    {quizResults.map((r, i) => (
                      <div key={i} className="profile-quiz-item card">
                        <span className="profile-quiz-name">{r.title}</span>
                        <span className="profile-quiz-date">{r.date}</span>
                        <span className={`badge ${r.score >= 80 ? 'badge-success' : r.score >= 60 ? 'badge-primary' : 'badge-error'}`}>
                          {r.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="profile-empty">
                    <Brain size={24} className="profile-empty-icon" />
                    <p>No quizzes taken yet.</p>
                    <Link to="/dashboard" className="btn btn-secondary btn-sm">Start a quiz</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Badges */}
            <div className="profile-col-side">
              <div className="profile-section">
                <div className="profile-section-header">
                  <h2 className="profile-section-title"><Trophy size={15} /> Badges</h2>
                </div>
                <div className="profile-badges">
                  {user.badges.map(b => (
                    <div key={b.id} className={`profile-badge card ${!b.earned ? 'locked' : ''}`}>
                      <div className="profile-badge-icon">{b.icon}</div>
                      <div className="profile-badge-info">
                        <div className="profile-badge-name">{b.name}</div>
                        <div className="profile-badge-desc">{b.description}</div>
                      </div>
                      {!b.earned && <div className="profile-badge-locked">🔒</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
