import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import {
  CheckCircle2,
  Circle,
  Loader,
  BookOpen,
  ChevronRight,
  GitBranch,
  ChevronDown,
  Layers
} from 'lucide-react';
import './RoadmapFlow.css';

const statusConfig = {
  'completed': {
    label: 'Completed',
    icon: CheckCircle2,
    color: 'var(--success)',
    glow: 'rgba(52, 211, 153, 0.25)',
    border: 'rgba(52, 211, 153, 0.45)',
    badgeBg: 'var(--success-dim)'
  },
  'in-progress': {
    label: 'In Progress',
    icon: Loader,
    color: 'var(--primary)',
    glow: 'var(--primary-glow)',
    border: 'rgba(91, 95, 237, 0.55)',
    badgeBg: 'var(--primary-dim)'
  },
  'not-started': {
    label: 'Locked',
    icon: Circle,
    color: 'var(--text-3)',
    glow: 'none',
    border: 'var(--border)',
    badgeBg: 'var(--surface-2)'
  }
};

function TopicFlowNode({ data, selected }) {
  const {
    id,
    index,
    title,
    status = 'not-started',
    subtopics = [],
    completedCount = 0,
    totalSubs = 0,
    pct = 0,
    isExpanded = true,
    onToggleExpand,
    onSelect,
    onOpenTopic
  } = data;

  const cfg = statusConfig[status] || statusConfig['not-started'];
  const StatusIcon = cfg.icon;
  const hasSubtopics = subtopics && subtopics.length > 0;

  return (
    <div
      className={`rf-topic-node ${status} ${selected ? 'is-selected' : ''}`}
      style={{
        '--node-accent': cfg.color,
        '--node-glow': cfg.glow,
        '--node-border': cfg.border,
      }}
      onClick={() => onSelect && onSelect(data)}
      onDoubleClick={() => onOpenTopic && onOpenTopic(id)}
    >
      {/* Target Handles from previous milestone */}
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="rf-handle rf-handle-top"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="rf-handle rf-handle-left"
      />

      {/* Top Meta Bar */}
      <div className="rf-node-top">
        <div className="rf-node-index font-display">
          <span>MILESTONE</span>
          <strong>{String(index + 1).padStart(2, '0')}</strong>
        </div>

        <div className="rf-node-status-badge" style={{ color: cfg.color, background: cfg.badgeBg }}>
          <StatusIcon size={12} className={status === 'in-progress' ? 'spin-slow' : ''} />
          <span>{cfg.label}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="rf-node-body">
        <h3 className="rf-node-title font-display">{title}</h3>

        <div className="rf-node-stats">
          <div className="rf-node-stats-left">
            <Layers size={13} className="text-3" />
            <span>{completedCount} / {totalSubs} subtopics done</span>
          </div>
          <span className="rf-node-pct" style={{ color: cfg.color }}>{pct}%</span>
        </div>

        {/* Progress Bar */}
        <div className="rf-node-progress-track">
          <div
            className="rf-node-progress-fill"
            style={{ width: `${pct}%`, background: cfg.color }}
          />
        </div>
      </div>

      {/* Footer Controls & Sprout Button */}
      <div className="rf-node-footer">
        {hasSubtopics && (
          <button
            className={`rf-branch-sprout-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleExpand) onToggleExpand(id);
            }}
            title={isExpanded ? 'Hide branch subtopics' : 'Show branch subtopics'}
          >
            <GitBranch size={12} />
            <span>{isExpanded ? 'Collapse' : `+${totalSubs} Branches`}</span>
            {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          </button>
        )}

        <button
          className="rf-action-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenTopic) onOpenTopic(id);
          }}
        >
          <BookOpen size={12} />
          <span>Open</span>
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Source Handles */}
      {/* Bottom handle to next milestone */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="rf-handle rf-handle-bottom"
      />
      {/* Right handle to sprout Level-2 subtopic branches */}
      <Handle
        type="source"
        position={Position.Right}
        id="right-branches"
        className="rf-handle rf-handle-right"
      />
    </div>
  );
}

export default memo(TopicFlowNode);
