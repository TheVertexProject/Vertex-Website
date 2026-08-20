import React from 'react';
import { 
  HardDrive, 
  Cloud, 
  ShieldCheck, 
  FolderGit2, 
  CheckCircle2, 
  Terminal, 
  ExternalLink, 
  Lock, 
  Key, 
  FileText, 
  Info,
  Check,
  ServerOff
} from 'lucide-react';
import { RoutePath } from '../types';

interface AboutSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden border-t border-white/10 bg-slate-950/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Verification App Identity Badge & Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-cyan-950/50">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>OAuth Verification & Application Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-vibrant">Vertex OS</span> & Google Drive Integration
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Detailed disclosure of the application's functional purpose, Google OAuth scopes, and local filesystem integration.
          </p>
        </div>

        {/* 1. Explicit Application Identity & General Purpose */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">Official Application Name</span>
                <h3 className="text-2xl font-black text-white tracking-tight">Vertex OS</h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 w-fit">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Independent Linux Operating System</span>
            </div>
          </div>

          <div className="space-y-4 text-slate-200 text-base leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Vertex OS</strong> is an independent Linux-based operating system designed for streamlined desktop computing, bare-metal hardware deployment, and local system administration. It provides a hardened, modular OS deployment environment equipped with automated GPT partitioning, Btrfs filesystem support, and proprietary desktop productivity tools.
            </p>
            <p>
              The system includes the <strong className="text-white">Vertex OS Installer</strong> and the <strong className="text-white">Vertex Cloud Sync</strong> utility, which assist users in configuring hardware storage and connecting personal cloud backup services.
            </p>
          </div>
        </div>

        {/* 2. Google Drive & Cloud Integration Purpose (OAuth Verification Core) */}
        <div id="google-drive-integration" className="rounded-3xl bg-slate-900/95 border border-blue-500/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          
          {/* Header with official Google Drive branding badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3.5">
              {/* Official Google Drive icon representation */}
              <div className="w-12 h-12 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg shrink-0">
                <svg viewBox="0 0 87.3 78" className="w-full h-full">
                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                  <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                  <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                  <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                  <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                  <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">OAuth 2.0 Integration</span>
                <h3 className="text-2xl font-black text-white tracking-tight">Google Drive & Cloud Integration Purpose</h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-medium">
              <Cloud className="w-3.5 h-3.5 text-blue-400" />
              <span>Vertex Cloud Sync (powered by rclone)</span>
            </div>
          </div>

          <div className="space-y-4 text-slate-200 leading-relaxed text-sm sm:text-base">
            <p>
              During the initial installation process (or inside the operating system via the Vertex Cloud Sync utility), <strong className="text-white font-semibold">Vertex OS</strong> provides an optional workflow for users to connect their <strong className="text-white">Google Drive</strong> account.
            </p>
          </div>

          {/* Detailed OAuth Scope & Data Handling Breakdown */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Scope 1: Drive File Mount */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Requested Google Drive Access Scopes</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded border border-white/10 font-mono text-xs">https://www.googleapis.com/auth/drive</code> or <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded border border-white/10 font-mono text-xs">https://www.googleapis.com/auth/drive.file</code> and basic account verification (<code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded border border-white/10 font-mono text-xs">userinfo.email</code>).
              </p>
            </div>

            {/* Scope 2: Primary Functional Purpose */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Primary Functional Purpose</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                Allows Vertex OS to automatically mount the user's remote Google Drive cloud storage to a local virtual filesystem directory (<code className="text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40 font-mono text-xs sm:text-sm font-bold">~/Vertex Cloud</code>). This enables users to seamlessly access, backup, view, and edit their remote documents directly within native Linux file managers (e.g., Nautilus / Dolphin).
              </p>
            </div>

            {/* Scope 3: Local-Only Data Privacy */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict Local-Only Storage & No Telemetry</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                All OAuth tokens and configuration keys are stored <strong className="text-white">strictly on the user's local disk</strong> at <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded border border-white/10 font-mono text-xs">~/.config/rclone/rclone.conf</code> with restrictive file permissions. No user credentials, tokens, or personal file contents are ever transmitted to or stored on external telemetry servers.
              </p>
            </div>

          </div>

          {/* Visual User Authentication Flow Diagram */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white tracking-wide flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                VERTEX OS AUTHENTICATION & MOUNT WORKFLOW
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">USER AUTHORIZED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
                <span className="text-cyan-400 font-bold">Step 1: Installer Setup</span>
                <p className="text-slate-400 text-[11px]">User initiates Google Drive connection in Vertex OS setup wizard.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
                <span className="text-blue-400 font-bold">Step 2: Google Consent</span>
                <p className="text-slate-400 text-[11px]">User logs in via official Google OAuth consent screen.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold">Step 3: Local VFS Mount</span>
                <p className="text-slate-400 text-[11px]">Token saved locally to mount Google Drive at ~/Vertex Cloud.</p>
              </div>
            </div>
          </div>

          {/* Mandatory Google Limited Use Policy Callout */}
          <div className="rounded-2xl bg-cyan-950/40 border-l-4 border-cyan-400 p-5 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-1">Google API Services User Data Policy Compliance (Limited Use Disclosure)</strong>
                <span>
                  Vertex OS's use and transfer of information received from Google APIs to any other app will adhere to the{' '}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 underline font-semibold hover:text-cyan-200 inline-flex items-center gap-1"
                  >
                    Google API Services User Data Policy
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  , including the Limited Use requirements.
                </span>
              </div>
            </div>
          </div>

          {/* Official Google Trademark & Non-Affiliation Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-slate-400 text-xs leading-relaxed">
            <strong className="text-slate-300">Google Trademark Disclaimer:</strong> Google, Google Drive, and the Google logo are trademarks of Google LLC. Vertex OS is an independent operating system developed by The Vertex Project and is not affiliated with, sponsored by, or endorsed by Google LLC.
          </div>

        </div>

        {/* 3. Mandatory Legal Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate?.('/privacy-policy')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-left group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Legal Transparency</span>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">Privacy Policy</h4>
              <p className="text-xs text-slate-400">Complete data protection, Google OAuth disclosures, and zero-telemetry rules.</p>
            </div>
            <FileText className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-4" />
          </button>

          <button
            onClick={() => onNavigate?.('/terms-of-service')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/50 hover:bg-slate-900 transition-all text-left group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase">Terms & Conditions</span>
              <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">Terms of Service</h4>
              <p className="text-xs text-slate-400">Pre-release terms, software licensing, and usage guidelines.</p>
            </div>
            <FileText className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0 ml-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
