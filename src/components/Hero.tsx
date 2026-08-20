import React, { useState } from 'react';
import { Download, Lock, ShieldCheck, Sparkles, Terminal, CheckCircle2, ChevronRight, HardDrive, CloudLightning, Cpu } from 'lucide-react';
import { calculateCreatorAge } from '../utils/calcAge';
import vertexLogo from '../assets/icon.png';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onExploreSuite: () => void;
  onViewCloudTransparency: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDownloadModal,
  onExploreSuite,
  onViewCloudTransparency
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'security' | 'architecture'>('status');
  const creatorAge = calculateCreatorAge();

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows & Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-fuchsia-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      
      {/* Grid line pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Headline, Bio Age callout, Locked CTA */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status & Creator Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Active Development Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-950/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="tracking-wide">IN ACTIVE DEVELOPMENT</span>
              </div>

              {/* Creator Age Dynamic Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>The Vertex Project</span>
                <span className="text-slate-400">•</span>
                <span className="text-cyan-200">Built by a {creatorAge}-year-old developer</span>
              </div>
            </div>

            {/* Main Headline & Semantic Header */}
            <header className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">
                <span>OAuth Application Name:</span>
                <span className="text-cyan-300 font-bold">Vertex OS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Vertex OS
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl pt-1">
                An independent Linux operating system engineered for <span className="text-cyan-300 font-medium">bare-metal hardware deployment</span>, 
                automated GPT partitioning, and seamless <span className="text-blue-300 font-medium">Google Drive cloud sync</span> via the Vertex Cloud Sync subsystem — with strictly local security and zero remote telemetry.
              </p>
            </header>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-2.5">
                <HardDrive className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Auto GPT & NVMe</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-2.5">
                <CloudLightning className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Google Drive VFS Sync</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">0% Telemetry</span>
              </div>
            </div>

            {/* CTAs & Locked Download Button with Tooltip / Sub-badge */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Disabled/Locked Download Button with interactive state */}
                <div className="relative group">
                  <button
                    id="hero-download-locked-btn"
                    onClick={onOpenDownloadModal}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-400 bg-slate-800/80 border border-slate-700/80 cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-800 flex items-center justify-center gap-3 shadow-lg group-hover:shadow-amber-500/10"
                    aria-label="Download Vertex OS (Locked during active development)"
                  >
                    <div className="p-1 rounded bg-slate-900/80 border border-white/10">
                      <Lock className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-slate-200 font-medium">Download Vertex OS</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 font-mono font-normal">
                      Alpha Locked
                    </span>
                  </button>
                  
                  {/* Hover Tooltip explaining download status */}
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:flex flex-col w-72 p-3 bg-slate-950/95 backdrop-blur-md rounded-xl border border-amber-500/30 text-xs shadow-2xl z-20 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Build Status: Active Development</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Downloads will be available once the initial stable build is finalized. Click to view release checklist & notify options.
                    </p>
                  </div>
                </div>

                {/* Secondary Explore Suite Button */}
                <button
                  id="hero-explore-suite-btn"
                  onClick={onExploreSuite}
                  className="px-5 py-3.5 rounded-xl font-medium text-sm text-white bg-slate-900/90 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/5 cursor-pointer"
                >
                  <span>Explore Proprietary Suite</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Explicit Required Tooltip/Sub-badge text */}
              <p className="text-xs text-amber-300/80 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse"></span>
                <span>Downloads will be available once the initial stable build is finalized.</span>
              </p>
            </div>

            {/* Quick Trust / Architecture bullets */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Ubuntu LTS Base
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Linux 6.12+ Zen Kernel
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" /> Wayland Compositor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Btrfs + LUKS2 TPM2
              </span>
            </div>

          </div>

          {/* Right Column: 3D Ribbon Logo Card & Interactive System HUD */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 opacity-30 blur-xl"></div>
              
              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden">
                
                {/* Top Bar of the Mock Display */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-400">vertex-core-sys</span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center p-0.5 rounded-lg bg-slate-950/80 border border-white/10">
                    <button
                      onClick={() => setActiveTab('status')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                        activeTab === 'status'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Daemon
                    </button>
                    <button
                      onClick={() => setActiveTab('security')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                        activeTab === 'security'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Security
                    </button>
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                        activeTab === 'architecture'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Storage
                    </button>
                  </div>
                </div>

                {/* Center Brand Ribbon Image with Holographic Frame */}
                <div className="relative py-4 flex flex-col items-center justify-center">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/30 to-amber-500/40 shadow-2xl shadow-cyan-500/20 group">
                    <div className="w-full h-full rounded-xl bg-slate-950 overflow-hidden relative flex items-center justify-center">
                      <img
                        src={vertexLogo}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Vertex_OS.png';
                        }}
                        alt="Vertex OS Logo"
                        className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-bold text-white tracking-wide">Vertex OS</h3>
                    <p className="text-xs text-slate-400 font-mono">Ubuntu-Based OS Project • The Vertex Project</p>
                  </div>
                </div>

                {/* Tab Content Panels */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 min-h-[140px] flex flex-col justify-center">
                  {activeTab === 'status' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/10 text-slate-400">
                        <span>DAEMON SERVICE</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          ONLINE (LOCAL)
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">VFS Cache Engine:</span>
                        <span className="text-cyan-300">~/VertexDrive (R3 Bucket FUSE)</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">Auth Identity:</span>
                        <span className="text-fuchsia-300">Google Auth (Local PKCE)</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">Outbound Telemetry:</span>
                        <span className="text-emerald-300">STRICTLY 0 BYTES</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/10 text-slate-400">
                        <span>HARDWARE ISOLATION</span>
                        <span className="text-cyan-400">TPM 2.0 ACTIVE</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">Disk Encryption:</span>
                        <span className="text-emerald-300">LUKS2 aes-xts-plain64</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">Auth Subsystem:</span>
                        <span className="text-cyan-300">Local PAM + FIDO2 Token</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">OAuth Isolation:</span>
                        <span className="text-fuchsia-300">Direct PKCE (No Proxies)</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>GPT DISK SCHEME</span>
                        <span className="text-cyan-300">NVMe Aligned</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded h-2 overflow-hidden flex">
                        <div className="bg-cyan-500 w-1/12" title="ESP (1GB)"></div>
                        <div className="bg-fuchsia-500 w-2/12" title="Recovery (4GB)"></div>
                        <div className="bg-blue-600 w-9/12" title="Btrfs Root + Home subvolumes"></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>/boot/efi (FAT32)</span>
                        <span>/ (Btrfs Zstd LUKS2)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[11px] text-slate-300 font-mono">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /> AMD64 / ARM64
                  </span>
                  <button
                    onClick={onViewCloudTransparency}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
                  >
                    View OAuth Transparency →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
