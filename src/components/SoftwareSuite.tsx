import React, { useState } from 'react';
import { PROPRIETARY_TOOLS } from '../data/vertexData';
import { SoftwareTool } from '../types';
import { 
  HardDrive, 
  CloudLightning, 
  ShieldCheck, 
  Layers, 
  Check, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  KeyRound, 
  Zap,
  Globe,
  Shield
} from 'lucide-react';

interface SoftwareSuiteProps {
  onLearnMoreCloud: () => void;
}

export const SoftwareSuite: React.FC<SoftwareSuiteProps> = ({ onLearnMoreCloud }) => {
  const [selectedTool, setSelectedTool] = useState<SoftwareTool>(PROPRIETARY_TOOLS[0]);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} />;
      case 'HardDrive':
        return <HardDrive className={className} />;
      case 'CloudLightning':
        return <CloudLightning className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  return (
    <section id="software-suite" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-fuchsia-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Vertex Project In-House Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proprietary & Custom{' '}
            <span className="text-gradient-vibrant">
              Software Suite
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Unlike generic Linux distributions that bundle off-the-shelf installers and scripts, 
            Vertex OS features an exclusive suite of tailor-made system tools built for raw performance, 
            seamless storage provisioning, and integrated Google Drive caching.
          </p>
        </div>

        {/* Interactive 4-Tool Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROPRIETARY_TOOLS.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/95 border-cyan-400 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-400/40 -translate-y-1'
                    : 'bg-slate-900/60 hover:bg-slate-900/80 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header with Icon & Category */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${
                      tool.color === 'cyan' ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300' :
                      tool.color === 'magenta' ? 'bg-fuchsia-950/80 border-fuchsia-500/40 text-fuchsia-300' :
                      tool.color === 'blue' ? 'bg-blue-950/80 border-blue-500/40 text-blue-300' :
                      'bg-amber-950/80 border-amber-500/40 text-amber-300'
                    }`}>
                      {getIcon(tool.iconName, 'w-6 h-6')}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 border border-white/10 text-slate-400">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {tool.tagline}
                  </p>
                </div>

                {/* Bottom Trigger Indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className={`font-mono text-[11px] ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {isSelected ? 'Currently Inspecting' : 'Inspect Tool'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Detailed Inspector for Selected Tool */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle colored accent glow in top corner */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 ${
            selectedTool.color === 'cyan' ? 'bg-cyan-500' :
            selectedTool.color === 'magenta' ? 'bg-fuchsia-500' :
            selectedTool.color === 'blue' ? 'bg-blue-500' :
            'bg-amber-500'
          }`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left side: Overview & Key capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  selectedTool.color === 'cyan' ? 'bg-cyan-950/90 border-cyan-500/40 text-cyan-300' :
                  selectedTool.color === 'magenta' ? 'bg-fuchsia-950/90 border-fuchsia-500/40 text-fuchsia-300' :
                  selectedTool.color === 'blue' ? 'bg-blue-950/90 border-blue-500/40 text-blue-300' :
                  'bg-amber-950/90 border-amber-500/40 text-amber-300'
                }`}>
                  {getIcon(selectedTool.iconName, 'w-6 h-6')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedTool.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                      v0.3-custom
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{selectedTool.category}</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {selectedTool.summary}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Engineered Capabilities & Safeguards
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedTool.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-200">
                      <div className="p-0.5 rounded bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special callout for Cloud Sync tool */}
              {selectedTool.id === 'vertex-cloud-sync' && (
                <div className="p-4 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-fuchsia-300 flex items-center gap-1.5">
                      <CloudLightning className="w-4 h-4 text-fuchsia-400" />
                      Google Auth & R3 Storage Transparency
                    </span>
                    <p className="text-xs text-slate-300">
                      Fetches drive content via fast R3 object bucket. Tokens stored locally at <code className="text-cyan-300 font-mono">~/.config/rclone/rclone.conf</code> with zero telemetry.
                    </p>
                  </div>
                  <button
                    onClick={onLearnMoreCloud}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-lg shadow-fuchsia-600/20"
                  >
                    <span>Cloud Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Special callout for Vertex Browser tool */}
              {selectedTool.id === 'vertex-browser' && (
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-cyan-400" />
                      Sovereign Browser Architecture
                    </span>
                    <p className="text-xs text-slate-300">
                      Vertex OS uses its own built-in browser with hardware-isolated process sandboxing, native tracker nullification, and zero telemetry daemons.
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono shrink-0">
                    Default OS Browser
                  </div>
                </div>
              )}
            </div>

            {/* Right side: Technical Specs table & CLI simulation */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Technical Specs Card */}
              <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> LOW-LEVEL SYSTEM SPECS
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Native C++ / Rust</span>
                </div>

                <div className="space-y-3">
                  {selectedTool.technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex flex-col text-xs pb-2 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-[11px] font-mono">{spec.label}</span>
                      <span className="text-slate-200 font-medium mt-0.5">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Note */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Architecture Deep Dive</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  {selectedTool.architectureNote}
                </p>
              </div>

              {/* System Deployment Model */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/20 text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    INTEGRATION & EXECUTION MODEL
                  </span>
                  <span className="text-[10px] text-slate-400">Daemon Isolation</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {selectedTool.deploymentModel}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
