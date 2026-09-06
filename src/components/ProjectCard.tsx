import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisualMockup } from './ProjectVisualMockup';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#D4D4D0] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden"
      id={`project-card-${project.id}`}
    >
      <div className="p-6 sm:p-8 space-y-6">
        {/* Context & Category Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E8E8] pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#245CFF] bg-[#245CFF]/10 px-2.5 py-1 rounded-full">
              {project.context}
            </span>
            {project.role && (
              <span className="text-[10px] font-mono uppercase tracking-wider font-medium text-[#111111] bg-[#F7F7F5] border border-[#E8E8E8] px-2.5 py-1 rounded-full">
                {project.role}
              </span>
            )}
            {project.supervisor && (
              <span className="text-[10px] font-mono tracking-wider text-[#686868] bg-[#F7F7F5] border border-[#E8E8E8] px-2.5 py-1 rounded-full">
                Supervised by {project.supervisor}
              </span>
            )}
          </div>

          {project.metrics && (
            <div className="text-[11px] font-mono font-semibold text-[#111111] bg-[#F7F7F5] px-2.5 py-1 rounded-md border border-[#E8E8E8]">
              {project.metrics.value}
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-[#111111] group-hover:text-[#245CFF] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#686868] group-hover:text-[#245CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </h3>
          <p className="text-xs font-mono text-[#686868] font-medium">{project.category}</p>
          <p className="text-sm text-[#686868] leading-relaxed pt-1">
            {project.shortDescription}
          </p>
        </div>

        {/* High-Craft Interactive/Telemetry Mockup */}
        <div className="pt-1">
          <ProjectVisualMockup project={project} />
        </div>

        {/* Bullet Highlights */}
        <div className="space-y-2 pt-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#686868] font-medium">
            Core Technical Highlights
          </div>
          <ul className="space-y-2">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#245CFF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Strip with Tech Stack & Expand Button */}
      <div className="p-6 sm:p-8 pt-0 mt-auto">
        <div className="pt-4 border-t border-[#E8E8E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 max-w-md">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] text-[#111111] border border-[#E8E8E8]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* View Case Study Trigger */}
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#111111] text-white hover:bg-[#245CFF] transition-all duration-150 shadow-2xs shrink-0 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF]"
            id={`btn-case-study-${project.id}`}
          >
            <span>View case study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

