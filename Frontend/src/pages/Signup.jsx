import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Zap, ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Auth.css';

const STEPS = ['Account', 'Profile', 'Interests'];
const INTERESTS = ['Web Development', 'Machine Learning', 'Data Structures', 'System Design', 'DevOps', 'Mobile Dev', 'Cybersecurity', 'Blockchain'];

export default function Signup() {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '', password: '', name: '', interests: [],
  });

  const toggleInterest = (i) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(i) ? f.interests.filter(x => x !== i) : [...f.interests, i]
    }));
  };

  const handleNext = () => {
    setError('');
    if (step === 0) {
      if (!form.email || !form.password) { setError('Fill in all fields.'); return; }
      if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    }
    if (step === 1 && !form.name.trim()) { setError('Please enter your name.'); return; }
    if (step < STEPS.length - 1) { setStep(s => s + 1); return; }
    handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    dispatch({ type: 'SIGNUP', payload: { name: form.name, email: form.email } });
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <Link to="/" className="auth-logo">
            <div className="auth-logo-icon"><Zap size={16} strokeWidth={2.5} /></div>
            <span>StudySphere</span>
          </Link>
          <div className="auth-left-quote">
            <blockquote>
              "I uploaded my Data Science syllabus and had a full roadmap with YouTube resources in under 2 minutes."
            </blockquote>
            <div className="auth-quote-author">
              <div className="auth-quote-avatar">P</div>
              <div>
                <div className="auth-quote-name">Priya Nair</div>
                <div className="auth-quote-role">CS Student, IIT Delhi</div>
              </div>
            </div>
          </div>
          <div className="auth-left-stats">
            {[['50K+', 'Learners'], ['1M+', 'Topics'], ['Free', 'Forever']].map(([v, l]) => (
              <div key={l} className="auth-stat">
                <span className="auth-stat-value">{v}</span>
                <span className="auth-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-wrap animate-in">
          {/* Steps indicator */}
          <div className="signup-steps">
            {STEPS.map((s, i) => (
              <div key={s} className={`signup-step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                <div className="signup-step-dot">
                  {i < step ? <Check size={10} strokeWidth={3} /> : <span>{i + 1}</span>}
                </div>
                <span className="signup-step-label">{s}</span>
                {i < STEPS.length - 1 && <div className="signup-step-line" />}
              </div>
            ))}
          </div>

          <div className="auth-form-header">
            <h1 className="auth-form-title font-display">
              {step === 0 ? 'Create account' : step === 1 ? 'About you' : 'Your interests'}
            </h1>
            <p className="auth-form-sub">
              {step === 0 ? 'Start your learning journey today.' : step === 1 ? 'Tell us a bit about yourself.' : 'Select topics you want to learn.'}
            </p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <div className="auth-form">
            {step === 0 && (
              <>
                <div className="form-group">
                  <label className="label" htmlFor="signup-email">Email address</label>
                  <input id="signup-email" type="email" className="input" placeholder="you@example.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="signup-pw">Password</label>
                  <div className="auth-pw-input">
                    <input id="signup-pw" type={showPw ? 'text' : 'password'} className="input"
                      placeholder="Min 8 characters" value={form.password}
                      onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
                    <button type="button" className="auth-pw-toggle" onClick={() => setShowPw(v => !v)}>
                      {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {form.password.length > 0 && (
                    <div className="pw-strength">
                      <div className="pw-strength-bar">
                        {[0,1,2].map(i => (
                          <div key={i} className={`pw-strength-seg ${form.password.length > i * 4 ? 'filled' : ''}`} />
                        ))}
                      </div>
                      <span className="pw-strength-label">
                        {form.password.length < 4 ? 'Weak' : form.password.length < 8 ? 'Fair' : 'Strong'}
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div className="form-group">
                  <label className="label" htmlFor="signup-name">Full name</label>
                  <input id="signup-name" type="text" className="input" placeholder="Alex Sharma"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="signup-role">I am a...</label>
                  <select id="signup-role" className="input">
                    <option value="">Select your role</option>
                    <option>Student</option>
                    <option>Self-taught developer</option>
                    <option>Professional upskilling</option>
                    <option>Educator</option>
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <div className="interest-grid">
                {INTERESTS.map(interest => (
                  <button key={interest} type="button"
                    className={`interest-chip ${form.interests.includes(interest) ? 'selected' : ''}`}
                    onClick={() => toggleInterest(interest)}>
                    {form.interests.includes(interest) && <Check size={12} strokeWidth={3} />}
                    {interest}
                  </button>
                ))}
              </div>
            )}

            <button type="button" className="btn btn-primary w-full btn-lg auth-submit" onClick={handleNext} disabled={loading}>
              {loading ? <span className="auth-spinner" /> : step < STEPS.length - 1 ? <>Continue <ArrowRight size={16} /></> : <>Create account <ArrowRight size={16} /></>}
            </button>

            {step > 0 && (
              <button type="button" className="btn btn-ghost w-full" onClick={() => setStep(s => s - 1)}>Back</button>
            )}
          </div>

          {step === 0 && (
            <>
              <div className="auth-divider"><span>or continue with</span></div>
              <div className="auth-socials">
                {['Google', 'GitHub'].map(p => (
                  <button key={p} className="btn btn-secondary w-full auth-social-btn" type="button">
                    <span className="auth-social-icon">{p === 'Google' ? '🔵' : '⚫'}</span>
                    {p}
                  </button>
                ))}
              </div>
            </>
          )}

          <p className="auth-switch">
            Already have an account? <Link to="/login" className="auth-switch-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
