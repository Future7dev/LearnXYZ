import React from 'react';

export default function ProgressRing({ progress = 0, size = 80, strokeWidth = 6, color = 'var(--primary)' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-ring-wrapper" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <div className="progress-ring-label">
        <span className="progress-ring-value">{Math.round(progress)}</span>
        <span className="progress-ring-unit">%</span>
      </div>
      <style>{`
        .progress-ring-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .progress-ring-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1px;
        }
        .progress-ring-value {
          font-family: var(--font-display);
          font-size: ${size * 0.22}px;
          font-weight: 700;
          color: var(--text-1);
          line-height: 1;
        }
        .progress-ring-unit {
          font-size: ${size * 0.14}px;
          font-weight: 500;
          color: var(--text-3);
          align-self: flex-end;
          margin-bottom: 2px;
        }
      `}</style>
    </div>
  );
}
