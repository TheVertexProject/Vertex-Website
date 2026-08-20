import React from 'react';
import { RoutePath } from '../types';
import { calculateCreatorAge } from '../utils/calcAge';
import vertexLogo from '../assets/icon.png';
import { 
  ShieldCheck, 
  ExternalLink, 
  Mail, 
  Globe, 
  Heart, 
  Code2, 
  Terminal, 
  Cloud, 
  Lock 
} from 'lucide-react';

interface FooterProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentRoute,
  onNavigate,
  onOpenDownloadModal
}) => {
  const creatorAge = calculateCreatorAge();

  const handleLinkClick = (route: RoutePath, sectionId?: string) => {
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
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand, Creator Bio, and Status */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/15 p-1 flex items-center justify-center overflow-hidden">
                <img
                  src={vertexLogo}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Vertex_OS.png';
                  }}
                  alt="Vertex OS Logo"
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">Vertex OS</span>
                <p className="text-[11px] font-mono text-cyan-400">Next-Gen Linux OS</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation Linux operating system designed for seamless hardware deployment and hybrid cloud integration.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-mono font-bold text-[11px]">
                <span>The Vertex Project</span>
                <span>•</span>
                <span>Active Development</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Crafted independently by a <strong className="text-slate-200">{creatorAge}-year-old developer</strong> dedicated to sovereign computing and zero telemetry.
              </p>
            </div>
          </div>

          {/* Col 3: Proprietary Suite */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-cyan-400">
              Proprietary Suite
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'software-suite')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Vertex Browser (Sovereign Web)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'software-suite')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Vertex Installer (GPT Engine)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'software-suite')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Vertex Cloud Sync (R3 Bucket Sync)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'software-suite')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Vertex ID & Auth Subsystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'software-suite')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Vertex Shell & HUD Tweaks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Architecture & Trust */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-fuchsia-400">
              Architecture & Cloud
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'about')}
                  className="hover:text-fuchsia-300 transition-colors text-left text-cyan-400 font-medium"
                >
                  About Vertex OS & Cloud Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'cloud-transparency')}
                  className="hover:text-fuchsia-300 transition-colors text-left"
                >
                  Google Auth & R3 Transparency
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'cloud-transparency')}
                  className="hover:text-fuchsia-300 transition-colors text-left"
                >
                  Local Vault (~/.config/rclone)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'creator-section')}
                  className="hover:text-fuchsia-300 transition-colors text-left"
                >
                  About The Creator (Age Bio)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/', 'system-specs')}
                  className="hover:text-fuchsia-300 transition-colors text-left"
                >
                  System Specs & Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Policies */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-amber-400">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('/privacy-policy')}
                  className={`hover:text-cyan-300 transition-colors text-left ${currentRoute === '/privacy-policy' ? 'text-cyan-400 font-semibold' : ''}`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/terms-of-service')}
                  className={`hover:text-cyan-300 transition-colors text-left ${currentRoute === '/terms-of-service' ? 'text-cyan-400 font-semibold' : ''}`}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-200 transition-colors flex items-center gap-1"
                >
                  <span>Google Limited Use Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDownloadModal}
                  className="text-amber-400/80 hover:text-amber-300 transition-colors text-left flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  <span>Download Status</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Google API Limited Use Policy Disclosure Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Google API Services User Data Policy Compliance:</strong> Vertex OS's use and transfer to any other app of information received from Google APIs will adhere to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. Credentials remain 100% local at <code className="text-slate-300 font-mono">~/.config/rclone/rclone.conf</code> with zero remote telemetry.
          </p>
        </div>

        {/* Mandatory Visible OAuth Links & Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-3">
          <div className="text-sm font-medium">
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/privacy-policy');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors mx-2.5 underline"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/terms-of-service');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors mx-2.5 underline"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-slate-400">
            &copy; 2026 Vertex OS Project. All rights reserved.
          </p>
        </div>

        {/* Bottom Bar: Maintainer Contact */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-4">
            <a
              href="mailto:the.vertex.project.main@gmail.com"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>the.vertex.project.main@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
