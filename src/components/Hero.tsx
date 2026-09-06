import { ArrowDown, Github, Linkedin, Code2, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E8E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Pill & Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F7F5] border border-[#E8E8E8] text-xs text-[#111111] font-medium shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#245CFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#245CFF]" />
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8E8E8] text-xs font-mono text-[#686868]">
            <MapPin className="w-3.5 h-3.5 text-[#686868]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.role}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
                {PERSONAL_INFO.headline}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#686868] leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Academic & Research credentials badge strip */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="p-3 rounded-xl bg-[#F7F7F5] border border-[#E8E8E8]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#686868]">
                  Research Affiliation
                </div>
                <div className="text-xs font-semibold text-[#111111] mt-0.5">
                  IIT Kanpur — VR Lab (Phase III)
                </div>
                <div className="text-[11px] text-[#686868]">Under Dr. Kantesh Balani</div>
              </div>

              <div className="p-3 rounded-xl bg-[#F7F7F5] border border-[#E8E8E8]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#686868]">
                  Undergraduate Degree
                </div>
                <div className="text-xs font-semibold text-[#111111] mt-0.5">
                  B.Tech CSE (Artificial Intelligence)
                </div>
                <div className="text-[11px] text-[#686868]">PSIT Kanpur · Exp. May 2028</div>
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-[#245CFF] transition-all duration-150 shadow-sm cursor-pointer group"
                id="hero-cta-work"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E8E8E8] text-[#111111] text-sm font-semibold hover:border-[#111111] hover:bg-[#F7F7F5] transition-all duration-150"
                id="hero-cta-github"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              {/* Quick links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-[#E8E8E8] text-[#686868] hover:text-[#245CFF] hover:border-[#245CFF] transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-[#E8E8E8] text-[#686868] hover:text-[#245CFF] hover:border-[#245CFF] transition-colors"
                  title="LeetCode Profile"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Interactive Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

