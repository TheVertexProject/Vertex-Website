import React from 'react';
import { HardDrive, Cloud, Shield, FolderGit2, CheckCircle2, Terminal, ArrowRight, Sparkles, ExternalLink, Lock, Key } from 'lucide-react';
import { RoutePath } from '../types';

interface AboutSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-white/10 bg-slate-950/70">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Operating System & Integration Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            System & Cloud Sync Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Comprehensive architectural and privacy documentation for bare-metal deployment and cloud integration.
          </p>
        </div>

        {/* 2. Explicit App Purpose & Functionality Card */}
        <div className="rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl p-6 sm:p-8 shadow-xl relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                About Vertex OS
              </h2>
              <span className="text-xs text-cyan-400 font-mono">Independent Linux-based Operating System</span>
            </div>
          </div>

          <p className="text-base text-slate-200 leading-relaxed">
            <strong className="text-white font-semibold">Vertex OS</strong> is an independent Linux-based operating system designed for streamlined desktop computing and hardware deployment. It provides a modular deployment environment and built-in integration tools for local administration.
          </p>
        </div>

        {/* 3. Purpose of Google Drive Integration (Required for OAuth Verification) */}
        <div className="rounded-2xl bg-slate-900/90 border border-fuchsia-500/30 backdrop-blur-xl p-6 sm:p-8 shadow-xl relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Google Drive & Cloud Integration Purpose
              </h2>
              <span className="text-xs text-fuchsia-400 font-mono">rclone Virtual Filesystem (VFS) Sync Engine</span>
            </div>
          </div>

          <p className="text-base text-slate-200 leading-relaxed">
            During the setup process, <strong className="text-white font-semibold">Vertex OS</strong> offers optional cloud synchronization via its integrated sync engine (using <code className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-mono text-xs">rclone</code>):
          </p>

          <ul className="space-y-4 text-sm text-slate-300">
            <li className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-start gap-3">
              <span className="text-cyan-400 font-bold shrink-0 mt-0.5 text-base">✦</span>
              <div>
                <strong className="text-white font-semibold">Requested Access:</strong> Read and write permissions to Google Drive (<code className="px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 font-mono text-xs border border-white/10">https://www.googleapis.com/auth/drive</code> or <code className="px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 font-mono text-xs border border-white/10">drive.file</code>) and basic account email verification.
              </div>
            </li>

            <li className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-start gap-3">
              <span className="text-cyan-400 font-bold shrink-0 mt-0.5 text-base">✦</span>
              <div>
                <strong className="text-white font-semibold">Primary Purpose:</strong> Allows the system to automatically mount the user's remote cloud storage to a local virtual folder (<code className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-xs border border-cyan-500/40 font-bold">~/Vertex Cloud</code>) for seamless backup and file access.
              </div>
            </li>

            <li className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-start gap-3">
              <span className="text-cyan-400 font-bold shrink-0 mt-0.5 text-base">✦</span>
              <div>
                <strong className="text-white font-semibold">Data Privacy:</strong> All authentication tokens and user files remain strictly on the local installation (<code className="px-1.5 py-0.5 rounded bg-slate-900 text-amber-300 font-mono text-xs border border-white/10">~/.config/rclone/rclone.conf</code>). No user data, passwords, or personal files are transmitted to or stored on external telemetry servers.
              </div>
            </li>
          </ul>

          {/* Limited Use Policy Callout */}
          <div className="rounded-xl bg-cyan-950/40 border-l-4 border-cyan-400 p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
            <div>
              <strong className="text-white font-semibold">Limited Use Policy:</strong> Vertex OS's use and transfer to any other app of information received from Google APIs adheres to the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline font-medium hover:text-cyan-200 inline-flex items-center gap-0.5"
              >
                Google API Services User Data Policy
                <ExternalLink className="w-3 h-3" />
              </a>
              , including the Limited Use requirements.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

