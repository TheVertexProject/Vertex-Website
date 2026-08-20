import React from 'react';
import { HardDrive, Cloud, Shield, FolderGit2, CheckCircle2, Terminal, ArrowRight, Sparkles } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Purpose Card with Exact Semantic Content */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Operating System Purpose & Subsystems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Core Purpose Description */}
            <div className="lg:col-span-7 space-y-6">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                About Vertex OS &{' '}
                <span className="text-gradient-vibrant">
                  Cloud Integration
                </span>
              </h2>

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Vertex OS is an independent Linux-based operating system designed for bare-metal hardware deployment. 
                  The system integrates with Google Drive via the Vertex Cloud Sync subsystem (powered by rclone) 
                  to allow users to mount and sync their remote files to a local virtual filesystem directory 
                  (<code className="px-2 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-mono text-sm sm:text-base font-semibold">~/Vertex Cloud</code>).
                </p>
              </div>

              {/* Subsystem Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    <HardDrive className="w-4 h-4" />
                    <span>Bare-Metal Deployment</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated GPT partition tables, EFI bootloader configuration, and kernel optimizations tailored directly for physical x86_64 silicon.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-fuchsia-400 font-semibold text-sm">
                    <Cloud className="w-4 h-4" />
                    <span>Rclone VFS Mount Engine</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mounts remote cloud storage on-demand with sparse local caching, chunked transfers, and zero telemetry.
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Interactive Architecture Preview Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white tracking-wide">VFS MOUNT TOPOLOGY</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40">ACTIVE VFS</span>
                </div>

                {/* Directory visualizer */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400">📁</span>
                      <span>/home/user/</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Root User Path</span>
                  </div>

                  <div className="ml-4 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-200 font-semibold">
                      <span className="text-cyan-400">☁️</span>
                      <span>~/Vertex Cloud/</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-bold">Mount Point</span>
                  </div>

                  <div className="ml-8 space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">├──</span>
                      <span>📄 Documents/ (Cloud Synced)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">├──</span>
                      <span>📁 Projects/ (On-Demand VFS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">└──</span>
                      <span>🔒 .vertex-vfs-cache/ (Encrypted Cache)</span>
                    </div>
                  </div>
                </div>

                {/* Security and OAuth Trust verification */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Shield className="w-4 h-4" />
                    <span>Google OAuth 2.0 PKCE</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">Local Token Store</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
