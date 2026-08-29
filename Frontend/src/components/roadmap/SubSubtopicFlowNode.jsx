import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CheckCircle2, Circle, Loader, Sparkles } from 'lucide-react';
import './RoadmapFlow.css';

const statusConfig = {
  'completed': {
    color: 'var(--success)',
    glow: 'rgba(52, 211, 153, 0.25)',
    border: 'rgba(52, 211, 153, 0.35)',
    bg: 'rgba(52, 211, 153, 0.08)',
    icon: CheckCircle2
  },
  'in-progress': {
    color: 'var(--primary)',
    glow: 'var(--primary-glow)',
    border: 'rgba(91, 95, 237, 0.45)',
    bg: 'rgba(91, 95, 237, 0.1)',
    icon: Loader
  },
  'not-started': {
    color: 'var(--text-3)',
    glow: 'none',
    border: 'var(--border)',
    bg: 'var(--bg-1)',
    icon: Circle
  }
};

function SubSubtopicFlowNode({ data, selected }) {
  const {
    id,
    title,
    status = 'not-started',
    parentSubtopicId,
    parentTopicId,
    onOpenTopic
  } = data;

  const cfg = statusConfig[status] || statusConfig['not-started'];
  const Icon = cfg.icon;

  return (
    <div
      className={`rf-leaf-node ${status} ${selected ? 'is-selected' : ''}`}
      style={{
        '--leaf-color': cfg.color,
        '--leaf-border': cfg.border,
        '--leaf-bg': cfg.bg,
        '--leaf-glow': cfg.glow
      }}
      onClick={() => onOpenTopic && onOpenTopic(parentTopicId || id)}
    >
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="rf-handle rf-handle-leaf"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="rf-handle rf-handle-top"
      />

      <div className="rf-leaf-content">
        <Icon size={11} className={`rf-leaf-icon ${status === 'in-progress' ? 'spin-slow' : ''}`} />
        <span className="rf-leaf-title">{title}</span>
      </div>
    </div>
  );
}

export default memo(SubSubtopicFlowNode);
