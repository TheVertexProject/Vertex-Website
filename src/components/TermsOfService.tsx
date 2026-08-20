import React from 'react';
import { FileText, AlertTriangle, HardDrive, ShieldAlert, ArrowLeft, RefreshCw, Mail, Globe, CheckCircle2, Lock } from 'lucide-react';
import { RoutePath } from '../types';

interface TermsOfServiceProps {
  onNavigate: (route: RoutePath) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 min-h-screen relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation Link */}
        <div className="mb-8">
          <button
            onClick={() => {
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Vertex OS Home</span>
          </button>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>LEGAL TERMS OF SERVICE & OPERATING AGREEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Effective Date: August 19, 2026 • Published by The Vertex Project
          </p>
        </div>

        {/* Main Terms Content */}
        <div className="mt-10 space-y-10 text-slate-300 leading-relaxed text-sm">

          {/* CRITICAL PROMINENT DISCLAIMER 1: SYNCHRONIZATION DATA LOSS (Explicitly Mandated) */}
          <div className="p-6 rounded-2xl bg-rose-950/40 border-2 border-rose-500/60 shadow-xl shadow-rose-950/20 space-y-4">
            <div className="flex items-center gap-3 text-rose-300">
              <div className="p-2 rounded-xl bg-rose-900/80 border border-rose-400/40 shrink-0">
                <AlertTriangle className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 font-bold block">
                  CRITICAL MANDATORY NOTICE
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  PROMINENT DISCLAIMER REGARDING POTENTIAL DATA LOSS DURING SYNCHRONIZATION PROCESSES
                </h2>
              </div>
            </div>

            <div className="text-xs text-rose-100/90 leading-relaxed space-y-3 pt-1">
              <p className="font-semibold text-rose-200">
                PLEASE READ CAREFULLY BEFORE ACTIVATING OR USING THE VERTEX CLOUD SYNC ENGINE, R3 BUCKET CACHE, OR GOOGLE AUTH INTEGRATION:
              </p>
              <p>
                File synchronization and fetching between local storage systems and remote cloud repositories (including R3 object storage buckets authenticated via Google Auth) carry inherent risks, including but not limited to: 
                <strong> conflicting simultaneous edits, asynchronous cache invalidation, network interruption timeouts, file truncation during background chunking, race conditions across multiple client devices, or unintentional deletion propagation</strong>.
              </p>
              <p>
                <strong>THE VERTEX PROJECT AND ITS DEVELOPERS EXPLICITLY DISCLAIM ANY AND ALL LIABILITY FOR ACCIDENTAL FILE OVERWRITES, DATA CORRUPTION, INCOMPLETE CACHE WRITES, PERMANENT LOSS OF DOCUMENTS, OR UNAVAILABILITY OF CLOUD STORAGE.</strong>
              </p>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-500/30 text-slate-200 font-mono text-[11px]">
                ⚠️ <strong>User Obligation:</strong> You are solely responsible for maintaining independent, verified offline backups of all mission-critical files prior to and throughout using the Vertex Cloud Sync Engine.
              </div>
            </div>
          </div>

          {/* CRITICAL PROMINENT DISCLAIMER 2: DISK MODIFICATION & GPT PARTITIONING */}
          <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/50 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-300">
              <HardDrive className="w-5 h-5 text-amber-400" />
              <h2 className="text-base sm:text-lg font-bold text-white">
                Hardware Deployment, GPT Partitioning, & Disk Modification Disclaimer
              </h2>
            </div>
            
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
              <p>
                The <strong>Vertex Installer</strong> is designed to perform low-level disk operations, including creating GUID Partition Tables (GPT), creating EFI System Partitions (ESP), wiping block devices, formatting filesystems (Btrfs, EXT4), and configuring LUKS2 cryptographic containers.
              </p>
              <p>
                <strong>WARNING:</strong> Selecting an incorrect target drive or choosing the automatic clean-install scheme will permanently and irrevocably erase all pre-existing operating systems, personal files, and partition tables on the selected storage drive.
              </p>
              <p>
                The Vertex Project shall not be held liable for accidental disk erasures, bootloader corruption, hardware controller incompatibilities, or lost partitions resulting from running the installer. Always verify your target disk device name (e.g., <code>/dev/nvme0n1</code>) and ensure external backups exist.
              </p>
            </div>
          </div>

          {/* 1. Acceptance of Terms & Pre-Release Status */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              1. Acceptance of Terms & Pre-Release / Alpha Status
            </h2>
            <p>
              By accessing this website, or by downloading, compiling, installing, or executing Vertex OS or any related proprietary utilities, you agree to be bound by these Terms of Service.
            </p>
            <p>
              Vertex OS is currently <strong>IN ACTIVE DEVELOPMENT (Alpha Version)</strong>. Pre-release builds may contain bugs, unfinished subsystems, performance bottlenecks, or stability issues. You acknowledge that pre-release software is intended for evaluation and developer testing and should not be used in critical production environments without understanding the risks.
            </p>
          </section>

          {/* 2. Software Licensing & Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              2. Operating System Architecture & Licensing
            </h2>
            <p>
              Vertex OS consists of a hybrid architecture:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 text-xs">
              <li><strong>Open-Source Upstream Foundation:</strong> The underlying Ubuntu LTS base distribution, Linux kernel, standard GNU/POSIX userland libraries, Wayland compositor, and systemd are governed by their respective open-source licenses (GPLv2, LGPL, MIT, Apache 2.0).</li>
              <li><strong>Proprietary & Custom Software Suite:</strong> The proprietary software tools developed exclusively by The Vertex Project — including <strong>Vertex Browser</strong>, <strong>Vertex Installer</strong>, <strong>Vertex Cloud Sync Engine</strong>, <strong>Vertex ID & Auth Subsystem</strong>, and <strong>Vertex Shell Enhancements</strong> — are the copyrighted intellectual property of The Vertex Project. You are granted a personal, non-exclusive, revocable license to execute these tools solely as part of Vertex OS. Reverse engineering, redistribution for commercial resale, or unauthorized proprietary re-licensing is strictly prohibited without prior written consent.</li>
            </ul>
          </section>

          {/* 3. Third-Party Services (Google Auth & Cloud Storage) */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              3. Google Auth & Cloud Storage Third-Party Terms
            </h2>
            <p>
              Use of Google Auth is subject to Google's own Terms of Service and API Policies. Vertex OS operates as a sovereign local client accessing authorization tokens stored strictly on your local disk to facilitate drive content access via high-performance R3 bucket storage. You are responsible for maintaining your account credentials and complying with third-party service terms.
            </p>
          </section>

          {/* 4. Warranty Disclaimer ("AS-IS") */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              4. "AS-IS" Warranty Disclaimer
            </h2>
            <div className="p-4 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed uppercase">
              VERTEX OS, ITS PROPRIETARY SUITE, THIS WEBSITE, AND ALL ASSOCIATED SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </div>
          </section>

          {/* 5. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              5. Limitation of Liability
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE VERTEX PROJECT, ITS INDEPENDENT DEVELOPERS, OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF DATA, SYSTEM DOWNTIME, HARDWARE DAMAGE, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE VERTEX OS OR ITS CLOUD SYNCHRONIZATION ENGINE.
            </p>
          </section>

          {/* 6. Contact Information */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              6. Legal Contact Information
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1 text-xs font-mono">
              <div>Project: <strong className="text-white">The Vertex Project (Vertex OS)</strong></div>
              <div>Contact Email: <a href="mailto:the.vertex.project.main@gmail.com" className="text-cyan-300 underline">the.vertex.project.main@gmail.com</a></div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
