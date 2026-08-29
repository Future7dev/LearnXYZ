import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Zap, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Auth.css';

export default function Login() {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    // Simulate network delay
    await new Promise(r => setTimeout(r, 900));
    dispatch({ type: 'LOGIN', payload: { email: form.email } });
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
              "StudySphere turned my 80-page university syllabus into a clear, trackable learning plan in under a minute."
            </blockquote>
            <div className="auth-quote-author">
              <div className="auth-quote-avatar">R</div>
              <div>
                <div className="auth-quote-name">Rahul Mehta</div>
                <div className="auth-quote-role">Backend Engineer</div>
              </div>
            </div>
          </div>
          <div className="auth-left-stats">
            {[['50K+', 'Learners'], ['1M+', 'Topics'], ['4.9★', 'Rating']].map(([v, l]) => (
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
          <div className="auth-form-header">
            <h1 className="auth-form-title font-display">Welcome back</h1>
            <p className="auth-form-sub">Sign in to continue your learning journey.</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className="form-group">
              <label className="label" htmlFor="login-email">Email address</label>
              <input
                id="login-email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <div className="auth-pw-label">
                <label className="label" htmlFor="login-password">Password</label>
                <Link to="#" className="auth-forgot">Forgot password?</Link>
              </div>
              <div className="auth-pw-input">
                <input
                  id="login-password"
                  type={showPw ? 'text' : 'password'}
                  className="input"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  autoComplete="current-password"
                />
                <button type="button" className="auth-pw-toggle" onClick={() => setShowPw(v => !v)}>
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-lg auth-submit" disabled={loading}>
              {loading ? <span className="auth-spinner" /> : <>Sign in <ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>
          <div className="auth-socials">
            {['Google', 'GitHub'].map(p => (
              <button key={p} className="btn btn-secondary w-full auth-social-btn" type="button">
                <span className="auth-social-icon">{p === 'Google' ? '🔵' : '⚫'}</span>
                {p}
              </button>
            ))}
          </div>

          <p className="auth-switch">
            Don't have an account? <Link to="/signup" className="auth-switch-link">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
