import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Sparkles } from 'lucide-react';

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E8E8]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 / Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Engineered for Real-World Impact
            </h2>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
              Applied AI systems, multi-agent RAG pipelines, high-throughput microservices, and NLP
              parsers built with rigorous software foundations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-[#F7F7F5] border border-[#E8E8E8] text-xs font-mono text-[#686868]">
              4 Flagship Implementations
            </div>
          </div>
        </div>

        {/* Projects Grid: 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

