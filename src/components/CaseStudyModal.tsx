import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisualMockup } from './ProjectVisualMockup';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#111111]/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-[#E8E8E8] shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E8E8E8] pb-5">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#245CFF] bg-[#245CFF]/10 px-2 py-0.5 rounded">
                {project.context}
              </span>
              {project.role && (
                <span className="text-[10px] font-mono uppercase tracking-wider font-medium text-[#686868] bg-[#F7F7F5] border border-[#E8E8E8] px-2 py-0.5 rounded">
                  {project.role}
                </span>
              )}
              {project.supervisor && (
                <span className="text-[10px] font-mono tracking-wider font-medium text-[#686868] bg-[#F7F7F5] border border-[#E8E8E8] px-2 py-0.5 rounded">
                  Supervised by {project.supervisor}
                </span>
              )}
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-[#686868]">{project.category}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#686868] hover:text-[#111111] hover:bg-[#F7F7F5] border border-[#E8E8E8] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF]"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Mockup inside Modal */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#686868] font-medium">
            System Interface & Telemetry
          </div>
          <ProjectVisualMockup project={project} />
        </div>

        {/* Architecture & Flow */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
            <Layers className="w-4 h-4 text-[#245CFF]" />
            <span>Architecture & Component Flow</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.deepDive.architectureNodes.map((node, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E8E8E8] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111111]">{node.name}</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#245CFF] font-medium">
                    {node.type}
                  </span>
                </div>
                <p className="text-xs text-[#686868] leading-relaxed">{node.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Engineering Accomplishments */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
            <Cpu className="w-4 h-4 text-[#245CFF]" />
            <span>Key Engineering Highlights</span>
          </div>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#245CFF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Technology Stack */}
        <div className="space-y-3 pt-2 border-t border-[#E8E8E8]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
            <Code2 className="w-4 h-4 text-[#245CFF]" />
            <span>Technical Stack Breakdown</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.deepDive.technicalStackDetails.map((group, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-[#E8E8E8] space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#686868] font-medium">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1">
                  {group.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] text-[#111111] border border-[#E8E8E8]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
          <div className="text-xs font-mono text-[#686868]">
            Source: Ankit Kumar's verified resume
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#111111] text-white hover:bg-[#245CFF] transition-colors"
            >
              <span>Explore on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#F7F7F5] text-[#111111] hover:bg-[#E8E8E8] border border-[#E8E8E8] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

