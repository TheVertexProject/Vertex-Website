import React from 'react';
import { getCreatorAgeDetails } from '../utils/calcAge';
import { Sparkles, Code2, Heart, Shield, Terminal, Clock, Calendar, CheckCircle2, User, Globe, Mail } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  const ageDetails = getCreatorAgeDetails();

  return (
    <section id="creator-section" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Independent Solo Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About the Creator &{' '}
            <span className="text-gradient-vibrant">
              The Vertex Project
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The story behind an ambitious, privacy-first desktop Linux distribution built from the ground up.
          </p>
        </div>

        {/* Main Creator Profile Box */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Creator Bio & Dynamic Age Statement */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Dynamic Age Highlight Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-fuchsia-500/10 to-cyan-500/15 border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold tracking-wide">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>SOLO DEVELOPER PROFILE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Created by a <span className="text-amber-300 underline decoration-amber-400/60 underline-offset-4 font-mono font-extrabold">{ageDetails.years}-year-old developer</span> behind The Vertex Project.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vertex OS is proof that youth and independent passion can challenge mainstream operating systems with cleaner architecture, faster boot cycles, and zero corporate telemetry.
                </p>
              </div>

              {/* Mission & Philosophy Text */}
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>The Vertex Project</strong> was founded with a singular, uncompromising vision: to create a modern Ubuntu-based Linux distribution that treats the user with absolute respect. No telemetry trackers, no background bloat, and no artificial ecosystem lock-in.
                </p>
                <p>
                  Built on a rock-solid, hardened <strong>Ubuntu LTS foundation</strong> with APT package access, the creator developed custom proprietary components including the <strong>Vertex Browser</strong> (sovereign, sandboxed native web engine), <strong>Vertex Installer</strong> (bare-metal GPT disk partitioning engine), <strong>Vertex Cloud Sync</strong> (kernel VFS caching via fast R3 bucket storage with Google Auth), and <strong>Vertex ID</strong> (local hardware PAM authentication).
                </p>
              </div>

              {/* Key Values / Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Sovereign Computing</h4>
                    <p className="text-[11px] text-slate-400">Your keys and data remain on your silicon, always.</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Low-Level Performance</h4>
                    <p className="text-[11px] text-slate-400">Written in Rust, C++, and native Linux kernel VFS APIs.</p>
                  </div>
                </div>
              </div>

              {/* Direct Project Contact */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-mono">
                  <Globe className="w-4 h-4 text-cyan-400" /> vertex.jo3.org
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 font-mono">
                  <Mail className="w-4 h-4 text-fuchsia-400" /> the.vertex.project.main@gmail.com
                </span>
              </div>

            </div>

            {/* Right Column: Live Dynamic Age Calculation Engine & Telemetry Card */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Dynamic Age Calculator Card */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-amber-500/30 space-y-4 shadow-xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-amber-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    DYNAMIC CHRONO ENGINE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                    Real-time Auto-calculating
                  </span>
                </div>

                {/* Big Stat Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 text-center space-y-1">
                  <div className="text-4xl font-extrabold text-amber-400 font-mono">
                    {ageDetails.years} Years Old
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    Calculated dynamically from birthdate: {ageDetails.birthDateString}
                  </p>
                </div>

                {/* Calculation Details */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Birthdate Anchor:
                    </span>
                    <span className="font-mono text-slate-200">2013-06-25</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Total Days of Craft:</span>
                    <span className="font-mono text-cyan-300">{ageDetails.daysAlive.toLocaleString()} days</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400">Next Birthday In:</span>
                    <span className="font-mono text-fuchsia-300">{ageDetails.nextBirthdayDays} days</span>
                  </div>
                </div>

                {/* Javascript Formula Snippet */}
                <div className="p-3 rounded-xl bg-slate-950 border border-white/10 font-mono text-[11px] text-slate-400 space-y-1">
                  <div className="text-slate-500">// Dynamic calculation formula</div>
                  <div className="text-cyan-300">const birthDate = new Date('2013-06-25');</div>
                  <div className="text-cyan-300">const age = Math.floor((new Date() - birthDate) / (365.25 * 24 * 60 * 60 * 1000));</div>
                  <div className="text-emerald-400">// Output: {ageDetails.years} years (increments every year)</div>
                </div>

              </div>

              {/* Independent Project Badge */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-300">
                  Funded independently with zero venture capital strings attached.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
