import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import {
  CheckCircle2,
  Circle,
  Loader,
  ChevronRight,
  ChevronDown,
  BookOpen,
  GitCommit
} from 'lucide-react';
import './RoadmapFlow.css';

const statusConfig = {
  'completed': {
    label: 'Done',
    icon: CheckCircle2,
    color: 'var(--success)',
    glow: 'rgba(52, 211, 153, 0.25)',
    border: 'rgba(52, 211, 153, 0.4)',
    bg: 'var(--success-dim)'
  },
  'in-progress': {
    label: 'Current',
    icon: Loader,
    color: 'var(--primary)',
    glow: 'var(--primary-glow)',
    border: 'rgba(91, 95, 237, 0.5)',
    bg: 'var(--primary-dim)'
  },
  'not-started': {
    label: 'Next',
    icon: Circle,
    color: 'var(--text-3)',
    glow: 'none',
    border: 'var(--border)',
    bg: 'var(--surface-2)'
  }
};

function SubtopicFlowNode({ data, selected }) {
  const {
    id,
    title,
    status = 'not-started',
    parentTopicId,
    items = [],
    isExpanded = true,
    onToggleExpand,
    onSelect,
    onOpenTopic
  } = data;

  const cfg = statusConfig[status] || statusConfig['not-started'];
  const StatusIcon = cfg.icon;
  const hasItems = items && items.length > 0;
  const completedItems = hasItems ? items.filter(it => it.status === 'completed').length : 0;

  return (
    <div
      className={`rf-branch-node ${status} ${selected ? 'is-selected' : ''}`}
      style={{
        '--branch-accent': cfg.color,
        '--branch-glow': cfg.glow,
        '--branch-border': cfg.border,
      }}
      onClick={() => onSelect && onSelect(data)}
      onDoubleClick={() => onOpenTopic && onOpenTopic(parentTopicId || id)}
    >
      {/* Target Handle from Parent Topic */}
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="rf-handle rf-handle-branch"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="rf-handle rf-handle-top"
      />

      <div className="rf-branch-content">
        <div className="rf-branch-header">
          <div className="rf-branch-status" style={{ color: cfg.color }}>
            <StatusIcon size={12} className={status === 'in-progress' ? 'spin-slow' : ''} />
            <span className="rf-branch-tag">{cfg.label}</span>
          </div>

          {hasItems && (
            <button
              className="rf-branch-expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (onToggleExpand) onToggleExpand(id);
              }}
              title={isExpanded ? 'Collapse sub-topics' : 'Expand sub-topics'}
            >
              <GitCommit size={11} />
              <span>{completedItems}/{items.length}</span>
              {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            </button>
          )}
        </div>

        <h4 className="rf-branch-title">{title}</h4>
      </div>

      {/* Source Handle to Child Leaves (Sub-Subtopics) */}
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="rf-handle rf-handle-branch-source"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="rf-handle rf-handle-bottom"
      />
    </div>
  );
}

export default memo(SubtopicFlowNode);
