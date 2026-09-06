import { GraduationCap, Sparkles, Terminal, BookOpen, Compass, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F7F5] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>04 / Background & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Engineering Philosophy
          </h2>
          <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
            Bridging foundational computer-science algorithms with modern machine-learning workflows.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Monogram / Visual Badge & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* Editorial Abstract Monogram Graphic */}
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-8 space-y-6 text-center shadow-xs">
              <div className="relative mx-auto w-32 h-32 rounded-2xl bg-[#111111] text-white flex flex-col items-center justify-center p-4 border-2 border-[#E8E8E8] shadow-inner group">
                <div className="text-3xl font-mono font-black tracking-tighter">AK</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#245CFF] font-semibold mt-1">
                  AI / Systems
                </div>
                {/* Visual grid accent lines */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#245CFF] rounded-full border-2 border-white" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-[#111111]">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-[#686868]">{PERSONAL_INFO.role}</p>
              </div>

              {/* Education Card */}
              <div className="pt-4 border-t border-[#E8E8E8] text-left space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#686868]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#245CFF]" />
                  <span>Academic Degree</span>
                </div>
                <div className="text-sm font-bold text-[#111111] leading-tight">
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="text-xs text-[#245CFF] font-medium">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-[11px] font-mono text-[#686868]">
                  {PERSONAL_INFO.education.expectedGraduation}
                </div>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 space-y-3 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#245CFF]" />
                <span>Core Engineering Standards</span>
              </div>
              <ul className="space-y-2 text-xs text-[#686868]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#245CFF] shrink-0" />
                  <span>Algorithmic rigor: Clean DSA foundations in Python & C++.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#245CFF] shrink-0" />
                  <span>Multi-agent design with structured deterministic routing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#245CFF] shrink-0" />
                  <span>Robust backend APIs with FastAPI, PostgreSQL & pgvector.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-8 sm:p-10 space-y-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#245CFF] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Narrative</span>
              </div>

              {/* Exact user-requested narrative */}
              <blockquote className="text-xl sm:text-2xl font-semibold text-[#111111] leading-relaxed tracking-tight border-l-2 border-[#245CFF] pl-5">
                “{PERSONAL_INFO.aboutNarrative}”
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-[#686868] leading-relaxed pt-2">
                <p>
                  As an undergraduate in Computer Science & Engineering with a concentration in
                  Artificial Intelligence at PSIT Kanpur, Ankit has paired academic rigor with
                  substantial hands-on execution. His leadership role during the Smart India
                  Hackathon demonstrated an ability to formulate complete multi-model architectures—coupling
                  Gemini 2.5 Flash, Sarvam AI speech models, and pgvector embeddings under strict time
                  constraints.
                </p>
                <p>
                  At IIT Kanpur’s VR Lab (Phase III), he collaborates under the guidance of Dr.
                  Kantesh Balani, bringing fundamental algorithmic precision and data structures to
                  ongoing experimental pipelines.
                </p>
              </div>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E8E8]">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                    Applied Retrieval & Vector Search
                  </div>
                  <p className="text-xs text-[#686868]">
                    Implementing dense semantic search, chunking strategies, and multi-agent RAG.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                    Production Backend Architecture
                  </div>
                  <p className="text-xs text-[#686868]">
                    Designing performant FastAPI microservices, relational PostgreSQL schemas, and
                    REST endpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

