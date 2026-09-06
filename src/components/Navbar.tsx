import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E8E8E8] shadow-xs py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="group flex items-center gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF] rounded-md"
          id="nav-brand-link"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-white font-mono text-xs font-bold transition-transform group-hover:scale-105">
            AK
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-[#111111] group-hover:text-[#245CFF] transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-mono text-[#686868] hidden sm:block">
              AI/ML · PSIT '28
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F7F7F5] p-1 rounded-full border border-[#E8E8E8]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#111111] shadow-xs font-semibold'
                    : 'text-[#686868] hover:text-[#111111] hover:bg-white/50'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#245CFF] ml-1.5 -translate-y-0.5" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#111111] text-white hover:bg-[#245CFF] transition-colors duration-150 shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF]"
            id="nav-cta-connect"
          >
            <span>Let’s connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F7F7F5] border border-[#E8E8E8] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245CFF]"
            aria-label="Toggle navigation menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E8E8] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#686868] px-3 py-1">
            Navigation
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-[#F7F7F5] text-[#245CFF] font-semibold'
                  : 'text-[#111111] hover:bg-[#F7F7F5]'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-[#245CFF]" />
              )}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-[#111111] text-white hover:bg-[#245CFF]"
            >
              <span>Let’s connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

