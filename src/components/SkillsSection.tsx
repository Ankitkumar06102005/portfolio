import {
  Code2,
  Cpu,
  Server,
  Binary,
  GitBranch,
  Award,
  CheckCircle2,
  BookmarkCheck,
} from 'lucide-react';
import { SKILL_GROUPS, CREDENTIALS } from '../data/portfolioData';

export function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#245CFF]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#245CFF]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#245CFF]" />;
      case 'Binary':
        return <Binary className="w-4 h-4 text-[#245CFF]" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-[#245CFF]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#245CFF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 / Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Engineering & AI Toolset
          </h2>
          <p className="text-base sm:text-lg text-[#686868] leading-relaxed">
            Proficiencies grounded in verified implementations, algorithmic problem solving, and
            production-level backend development.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFAF9] border border-[#E8E8E8] hover:border-[#D4D4D0] transition-colors space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-[#E8E8E8] shadow-2xs">
                      {getCategoryIcon(group.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-[#111111]">{group.category}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#686868] bg-white px-2 py-0.5 rounded border border-[#E8E8E8]">
                    {group.skills.length} skills
                  </span>
                </div>

                {group.description && (
                  <p className="text-xs text-[#686868] leading-relaxed">{group.description}</p>
                )}
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-white text-[#111111] border border-[#E8E8E8] hover:border-[#245CFF] hover:text-[#245CFF] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Strip */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
              <Award className="w-4 h-4 text-[#245CFF]" />
              <span>Verified Credentials & Coursework</span>
            </div>
            <span className="text-xs font-mono text-[#686868]">Verified via Resume</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E8E8E8] hover:border-[#245CFF]/40 transition-all space-y-3 shadow-2xs group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#245CFF] bg-[#245CFF]/10 px-2.5 py-0.5 rounded">
                    {cred.issuer}
                  </span>
                  <BookmarkCheck className="w-4 h-4 text-[#245CFF] group-hover:scale-110 transition-transform" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#111111] leading-snug">{cred.title}</h4>
                  <p className="text-xs text-[#686868] leading-relaxed">{cred.detail}</p>
                </div>

                <div className="pt-2 border-t border-[#F0F0EE] flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Credential Active & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

