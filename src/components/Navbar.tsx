import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { Download, Shield, ExternalLink, Menu, X, Sparkles, Terminal, Code2, Cloud } from 'lucide-react';
import vertexLogo from '../assets/icon.png';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenDownloadModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: RoutePath, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== route) {
      onNavigate(route);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="vertex-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0d14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-slate-900/80 border border-white/15 p-1 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/50 shadow-lg shadow-cyan-500/10">
              <img
                src={vertexLogo}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/icon.png';
                }}
                alt="Vertex OS Logo"
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Vertex OS
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                  v0.3 Alpha
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                vertex.jo3.org
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('/', 'overview')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                currentRoute === '/'
                  ? 'text-white bg-white/10 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Overview
            </button>
            <button
              id="nav-link-suite"
              onClick={() => handleNavClick('/', 'software-suite')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              Software Suite
            </button>
            <button
              id="nav-link-cloud"
              onClick={() => handleNavClick('/', 'cloud-transparency')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Cloud className="w-3.5 h-3.5 text-magenta-400 text-fuchsia-400" />
              Cloud Architecture
            </button>
            <button
              id="nav-link-creator"
              onClick={() => handleNavClick('/', 'creator-section')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              About The Project
            </button>
            <button
              id="nav-link-specs"
              onClick={() => handleNavClick('/', 'system-specs')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              Specs
            </button>
            <div className="h-4 w-px bg-white/15 mx-1" />
            <button
              id="nav-link-privacy"
              onClick={() => handleNavClick('/privacy-policy')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                currentRoute === '/privacy-policy'
                  ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Privacy
            </button>
            <button
              id="nav-link-terms"
              onClick={() => handleNavClick('/terms-of-service')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                currentRoute === '/terms-of-service'
                  ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Terms
            </button>
          </nav>

          {/* Right Action: Active Status & Download CTA */}
          <div className="flex items-center gap-3">
            {/* Active Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300/90 text-xs font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono text-[11px] tracking-wide text-amber-200">Active Dev</span>
            </div>

            {/* Download CTA (Locked trigger) */}
            <button
              id="nav-download-btn"
              onClick={onOpenDownloadModal}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-white/15 hover:border-cyan-500/40 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download OS</span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-950/60 px-1.5 py-0.5 rounded border border-white/10">
                Alpha
              </span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-mono text-amber-300">Active Development Build</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">v0.3-alpha</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-2">
            <button
              onClick={() => handleNavClick('/', 'overview')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Overview</span>
            </button>
            <button
              onClick={() => handleNavClick('/', 'software-suite')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Proprietary Software Suite
              </span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">5 Tools</span>
            </button>
            <button
              onClick={() => handleNavClick('/', 'cloud-transparency')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-fuchsia-400" />
                Google Auth & Cloud Transparency
              </span>
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <button
              onClick={() => handleNavClick('/', 'creator-section')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              About The Creator (Age Bio)
            </button>
            <button
              onClick={() => handleNavClick('/', 'system-specs')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              System Specs & Architecture
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('/privacy-policy')}
              className="px-3 py-2 text-center rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-white/10"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick('/terms-of-service')}
              className="px-3 py-2 text-center rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-white/10"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownloadModal();
            }}
            className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Vertex OS (Check Status)
          </button>
        </div>
      )}
    </header>
  );
};
