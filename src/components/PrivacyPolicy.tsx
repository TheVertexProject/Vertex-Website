import React from 'react';
import { ShieldCheck, Lock, Key, ServerOff, ExternalLink, ArrowLeft, Mail, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { RoutePath } from '../types';

interface PrivacyPolicyProps {
  onNavigate: (route: RoutePath) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 min-h-screen relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>LEGAL & DATA PROTECTION POLICY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Effective Date & Last Updated: August 19, 2026 • Published by The Vertex Project
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="mt-10 space-y-10 text-slate-300 leading-relaxed text-sm">
          
          {/* Executive Summary Card */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Executive Privacy Commitment
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Vertex Project</strong> ("Vertex OS", "we", "us", or "our"), 
              is built around a fundamental engineering principle: <strong>your personal computer belongs entirely to you.</strong> 
              Vertex OS does not collect telemetry, does not log your browsing or system usage, does not maintain remote user databases, and does not sell or share any user information.
            </p>
          </div>

          {/* 1. Local Credential Storage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-cyan-400" />
              1. Local-Only Credential Storage
            </h2>
            <p>
              When you configure cloud drive integration (such as R3 object storage bucket fetching authenticated via Google Auth in the Vertex Cloud Sync Engine), 
              all authentication tokens, refresh tokens, and remote metadata are written <strong>strictly and exclusively to your local machine</strong> at:
            </p>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-cyan-300">
              ~/.config/rclone/rclone.conf
            </div>
            <p>
              These credentials are protected by standard Linux file access permissions (POSIX <code>chmod 600</code>, readable only by your local Linux user account). 
              At no point are these credentials transmitted, mirrored, or backed up to any server operated by The Vertex Project.
            </p>
          </section>

          {/* 2. Zero Telemetry & No Remote Tracking */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ServerOff className="w-5 h-5 text-fuchsia-400" />
              2. Zero Telemetry, Analytics, or Tracking
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>No OS Diagnostics or Pingbacks:</strong> Vertex OS does not send background heartbeats, crash dumps, or usage analytics back to our developers or any third-party infrastructure.</li>
              <li><strong>No Hardware Tracking:</strong> We do not track unique hardware identifiers, MAC addresses, IP addresses, or serial numbers.</li>
              <li><strong>Website Analytics:</strong> The project website does not use invasive tracking cookies, third-party advertising pixels, or behavioral profiling scripts.</li>
            </ul>
          </section>

          {/* 3. Google API Services User Data Policy & Limited Use Disclosure */}
          <section className="space-y-4 p-6 rounded-2xl bg-slate-900/80 border border-fuchsia-500/30">
            <div className="flex items-center gap-2 text-fuchsia-300">
              <ShieldCheck className="w-5 h-5 text-fuchsia-400" />
              <h2 className="text-lg font-bold text-white">
                3. Google Auth & User Data Policy / Limited Use Disclosure
              </h2>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Vertex OS provides an integrated background sync engine that uses Google Auth to verify user identity and authorize access to drive content stored in an optimized R3 bucket, mounted into your local desktop file tree.
            </p>

            <blockquote className="p-4 rounded-xl bg-slate-950 border-l-2 border-fuchsia-400 text-xs text-slate-200 italic leading-relaxed">
              "Vertex OS's use and transfer to any other app of information received from Google APIs will adhere to the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-300 underline not-italic hover:text-fuchsia-200 inline-flex items-center gap-0.5"
              >
                Google API Services User Data Policy
                <ExternalLink className="w-3 h-3" />
              </a>
              , including the Limited Use requirements."
            </blockquote>

            <div className="space-y-2 text-xs text-slate-300">
              <h3 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px]">
                Under this policy, Vertex OS adheres to the following strict boundaries:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-950/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Only requests the minimum required Google Auth scopes necessary for authentication.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Never shares or transfers Google user data to third parties or advertising networks.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Never uses Google user data to train generalized machine learning or AI models.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Drive content fetching occurs directly via secure R3 bucket object streams to the local client.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Instructions for Revoking Google Drive Permissions */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              4. How to Revoke Google Drive Access
            </h2>
            <p>
              You maintain complete control over authorizations granted to Vertex OS. You may revoke access at any time through either of the following methods:
            </p>
            <div className="space-y-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-1">
                <strong className="text-white text-xs font-mono">Method A: Via Google Account Security Portal (Immediate Remote Invalidation)</strong>
                <p className="text-xs text-slate-400">
                  1. Navigate to <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-cyan-300 underline">https://myaccount.google.com/permissions</a>.<br />
                  2. Select <strong>The Vertex Project / Vertex OS</strong> from the list of Third-Party Apps.<br />
                  3. Click <strong>Delete all connections that you have with The Vertex Project</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-1">
                <strong className="text-white text-xs font-mono">Method B: Local Configuration File Removal (Local Token Purge)</strong>
                <p className="text-xs text-slate-400">
                  Delete the local configuration file located at <code className="text-cyan-300 font-mono">~/.config/rclone/rclone.conf</code> via your desktop file manager or settings utility to immediately purge all stored access tokens from your physical storage device.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Contact Information */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              5. Contact & Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or data security in Vertex OS, please contact the maintainer directly:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1 text-xs font-mono">
              <div>Project: <strong className="text-white">The Vertex Project (Vertex OS)</strong></div>
              <div>Maintainer Email: <a href="mailto:the.vertex.project.main@gmail.com" className="text-cyan-300 underline">the.vertex.project.main@gmail.com</a></div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
