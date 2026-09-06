import { FlaskConical, Binary, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';

export function ResearchSection() {
  return (
    <section id="research" className="py-20 md:py-28 bg-[#F7F7F5] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>02 / Academic Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Research in Progress
          </h2>
          <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
            Applying core computer-science and engineering fundamentals within a multi-phase research
            program at a premier national institute.
          </p>
        </div>

        {/* Featured Research Card */}
        <div className="bg-white rounded-2xl border border-[#E8E8E8] shadow-xs overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Research details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Institutional pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#111111] text-white font-mono text-xs font-semibold">
                  {RESEARCH_EXPERIENCE.institution}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E8E8E8] text-[#111111] font-mono text-xs font-medium">
                  {RESEARCH_EXPERIENCE.lab}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-medium">
                  Status: {RESEARCH_EXPERIENCE.period}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                  {RESEARCH_EXPERIENCE.role}
                </h3>
                <div className="text-sm sm:text-base font-mono text-[#245CFF] font-medium">
                  Under {RESEARCH_EXPERIENCE.supervisor}
                </div>
              </div>

              {/* Verified description points */}
              <div className="space-y-3 pt-2">
                {RESEARCH_EXPERIENCE.description.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#111111] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#245CFF] shrink-0 mt-2" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#686868] bg-[#F7F7F5] px-3 py-2 rounded-lg border border-[#E8E8E8]">
                  <ShieldCheck className="w-4 h-4 text-[#245CFF]" />
                  <span>Strict adherence to published lab protocols</span>
                </div>
              </div>
            </div>

            {/* Right: Restrained Lab-Inspired System Diagram */}
            <div className="lg:col-span-5 bg-[#FAFAF9] rounded-xl border border-[#E8E8E8] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-3">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-[#245CFF]" />
                  <span className="text-xs font-mono font-semibold text-[#111111] uppercase tracking-wider">
                    Program Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#686868] bg-white px-2 py-0.5 rounded border border-[#E8E8E8]">
                  Phase III Program
                </span>
              </div>

              {/* Sequential Flow Nodes */}
              <div className="space-y-3">
                {/* Node 1 */}
                <div className="bg-white p-3.5 rounded-lg border border-[#E8E8E8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#686868]">
                      Stage 01 · Foundations
                    </span>
                    <Binary className="w-3.5 h-3.5 text-[#245CFF]" />
                  </div>
                  <div className="text-xs font-semibold text-[#111111]">
                    Core Computer Science & Algorithmic Modeling
                  </div>
                  <div className="text-[11px] text-[#686868]">
                    Data structures, spatial indexing, and computational algorithms.
                  </div>
                </div>

                <div className="flex justify-center -my-1 text-[#D4D4D0]">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                {/* Node 2 */}
                <div className="bg-white p-3.5 rounded-lg border border-[#245CFF]/30 space-y-1 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#245CFF] font-medium">
                      Stage 02 · Integration
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#245CFF] animate-pulse" />
                  </div>
                  <div className="text-xs font-semibold text-[#111111]">
                    VR Lab Multi-Phase Research Objectives
                  </div>
                  <div className="text-[11px] text-[#686868]">
                    Applied engineering pipeline under faculty supervision at IIT Kanpur.
                  </div>
                </div>

                <div className="flex justify-center -my-1 text-[#D4D4D0]">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                {/* Node 3 */}
                <div className="bg-white p-3.5 rounded-lg border border-[#E8E8E8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#686868]">
                      Stage 03 · Outcomes
                    </span>
                    <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs font-semibold text-[#111111]">
                    System Verification & Experimental Protocols
                  </div>
                  <div className="text-[11px] text-[#686868]">
                    Validating functional fidelity and computational consistency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

