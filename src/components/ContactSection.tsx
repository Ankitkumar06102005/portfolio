import { useState, FormEvent } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail || !inquiryMessage) return;

    // Open mailto with formatted query
    const subject = encodeURIComponent(`Portfolio Inquiry from ${inquiryName || 'Colleague'}`);
    const body = encodeURIComponent(
      `Hi Ankit,\n\n${inquiryMessage}\n\nFrom: ${inquiryName} (${inquiryEmail})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.links.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Large closing headline */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245CFF] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / Connection & Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.05]">
            Have an AI problem worth solving?
          </h2>

          <p className="text-lg sm:text-xl text-[#686868] max-w-2xl leading-relaxed">
            I am always interested in discussing technical challenges in RAG systems, applied LLM
            engineering, research internships, or scalable backend architectures.
          </p>
        </div>

        {/* Contact Grid: Direct Channels & Interactive Quick Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Email Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Email Direct Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFAF9] border border-[#E8E8E8] space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#686868] font-semibold">
                Direct Email Inquiries
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-[#E8E8E8]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#F7F7F5] border border-[#E8E8E8]">
                    <Mail className="w-5 h-5 text-[#245CFF]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-mono font-bold text-[#111111]">
                      {PERSONAL_INFO.links.email}
                    </div>
                    <div className="text-xs text-[#686868]">Email address</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-[#F7F7F5] text-[#111111] hover:bg-[#E8E8E8] border border-[#E8E8E8] transition-colors cursor-pointer"
                    id="btn-copy-email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.links.email}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#111111] text-white hover:bg-[#245CFF] transition-colors"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E8E8E8] hover:border-[#111111] transition-all space-y-1 group"
                id="contact-link-github"
              >
                <div className="flex items-center justify-between">
                  <Github className="w-4 h-4 text-[#111111]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-[#245CFF] transition-colors" />
                </div>
                <div className="text-xs font-bold text-[#111111]">GitHub</div>
                <div className="text-[10px] font-mono text-[#686868] truncate">
                  {PERSONAL_INFO.links.githubDisplay}
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E8E8E8] hover:border-[#245CFF] transition-all space-y-1 group"
                id="contact-link-linkedin"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="w-4 h-4 text-[#245CFF]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-[#245CFF] transition-colors" />
                </div>
                <div className="text-xs font-bold text-[#111111]">LinkedIn</div>
                <div className="text-[10px] font-mono text-[#686868] truncate">
                  {PERSONAL_INFO.links.linkedinDisplay}
                </div>
              </a>

              {/* LeetCode */}
              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E8E8E8] hover:border-amber-600 transition-all space-y-1 group"
                id="contact-link-leetcode"
              >
                <div className="flex items-center justify-between">
                  <Code2 className="w-4 h-4 text-amber-600" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#686868] group-hover:text-amber-600 transition-colors" />
                </div>
                <div className="text-xs font-bold text-[#111111]">LeetCode</div>
                <div className="text-[10px] font-mono text-[#686868] truncate">
                  {PERSONAL_INFO.links.leetcodeDisplay}
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Dispatch Inquiry Form */}
          <div className="lg:col-span-6 bg-[#FAFAF9] rounded-2xl border border-[#E8E8E8] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
              <MessageSquare className="w-4 h-4 text-[#245CFF]" />
              <span>Send a Direct Message</span>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-[#111111]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E8E8E8] text-sm text-[#111111] focus:outline-hidden focus:border-[#245CFF] focus:ring-1 focus:ring-[#245CFF] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-[#111111]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E8E8E8] text-sm text-[#111111] focus:outline-hidden focus:border-[#245CFF] focus:ring-1 focus:ring-[#245CFF] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono font-medium text-[#111111]">
                  Project, Collaboration, or Research Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="Describe your AI/ML requirements, research scope, or internship opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E8E8E8] text-sm text-[#111111] focus:outline-hidden focus:border-[#245CFF] focus:ring-1 focus:ring-[#245CFF] transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#686868]">
                  Launches your email client directly
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-white text-xs font-semibold hover:bg-[#245CFF] transition-colors cursor-pointer shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF]"
                  id="btn-send-message"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Email client opened with pre-filled message template!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-12 border-t border-[#E8E8E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#686868]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Kanpur, India</span>
            <span>·</span>
            <span>B.Tech CSE (AI) '28</span>
            <span>·</span>
            <span>IITK VR Lab</span>
          </div>
        </div>
      </div>
    </section>
  );
}

