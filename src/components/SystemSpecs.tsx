import React from 'react';
import { SYSTEM_SPECS, DEVELOPMENT_MILESTONES } from '../data/vertexData';
import { Cpu, Terminal, CheckCircle2, Clock, Sparkles, Server, HardDrive, Shield } from 'lucide-react';

export const SystemSpecs: React.FC = () => {
  return (
    <section id="system-specs" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>Architecture & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            System Specifications &{' '}
            <span className="text-gradient-vibrant">
              Development Roadmap
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Built on a hardened Linux 6.12+ kernel foundation with native Wayland graphics and high-efficiency memory management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: System Architecture Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">System Architecture</h3>
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Target: x86_64 / ARM64
                </span>
              </div>

              <div className="space-y-4">
                {SYSTEM_SPECS.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-slate-400 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {spec.label}
                    </span>
                    <span className="text-slate-200 font-semibold font-mono sm:text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hardware Certification Targets */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Hardware Validation Benchmarks
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Framework 13/16
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dell XPS Line
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Lenovo ThinkPad
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ASUS ROG / Zenbook
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AMD Ryzen 7000+
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-white/5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Intel Core Ultra
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Development Roadmap & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Release Phases & Progress</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>Active Build Phase</span>
                </div>
              </div>

              <div className="space-y-4">
                {DEVELOPMENT_MILESTONES.map((m, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border transition-all ${
                      m.status === 'completed'
                        ? 'bg-slate-950/80 border-emerald-500/30'
                        : m.status === 'in-progress'
                        ? 'bg-slate-950/90 border-amber-500/40 ring-1 ring-amber-500/20'
                        : 'bg-slate-950/40 border-white/5 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase">
                          {m.phase}
                        </span>
                        <span className="text-white font-bold text-sm">{m.title}</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        m.status === 'completed' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                        m.status === 'in-progress' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {m.status === 'completed' ? 'Completed' : m.status === 'in-progress' ? 'In Active Development' : 'Upcoming'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {m.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {m.items.map((item, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">
                          • {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 text-xs text-slate-400 flex items-center justify-between">
                <span>Current Sprint: ISO Validation & VFS Caching Audit</span>
                <span className="text-cyan-300 font-mono font-bold">~68% to Alpha 1.0</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
