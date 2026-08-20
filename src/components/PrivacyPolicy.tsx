import React from 'react';
import { 
  ShieldCheck, 
  Key, 
  ServerOff, 
  Lock, 
  CheckCircle2, 
  ExternalLink, 
  ArrowLeft,
  Calendar,
  AlertTriangle,
  FolderGit2,
  Cloud
} from 'lucide-react';
import { RoutePath } from '../types';

interface PrivacyPolicyProps {
  onNavigate: (route: RoutePath) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Vertex OS Overview</span>
          </button>
        </div>

        {/* Header with Exact App Name */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Application: Vertex OS • Privacy Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Vertex OS Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Effective Date & Last Updated: August 20, 2026 • Published by The Vertex Project
          </p>
        </div>

        {/* Executive Commitment Card */}
        <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
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

        {/* Content Sections */}
        <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
          
          {/* 1. Local Credential Storage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-cyan-400" />
              1. Local-Only Credential Storage
            </h2>
            <p>
              When you configure cloud drive integration (such as Google Drive synchronization via the Vertex Cloud Sync utility or during the Vertex OS Installer setup), 
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
              <ServerOff className="w-5 h-5 text-blue-400" />
              2. Zero Telemetry, Analytics, or Tracking
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>No OS Diagnostics or Pingbacks:</strong> Vertex OS does not send background heartbeats, crash dumps, or usage analytics back to our developers or any third-party infrastructure.</li>
              <li><strong>No Hardware Tracking:</strong> We do not track unique hardware identifiers, MAC addresses, IP addresses, or serial numbers.</li>
              <li><strong>Website Analytics:</strong> The project website does not use invasive tracking cookies, third-party advertising pixels, or behavioral profiling scripts.</li>
            </ul>
          </section>

          {/* 3. Google API Services User Data Policy & Limited Use Disclosure */}
          <section className="space-y-4 p-6 rounded-2xl bg-slate-900/80 border border-blue-500/30">
            <div className="flex items-center gap-2 text-blue-300">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">
                3. Google Drive API & User Data Policy (Limited Use Disclosure)
              </h2>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Vertex OS provides an integrated background sync engine (powered by rclone) that uses Google OAuth 2.0 to authenticate and authorize access to your Google Drive content, mounting it seamlessly into your local desktop virtual file system at <code className="text-cyan-300 font-mono">~/Vertex Cloud</code>.
            </p>

            <blockquote className="p-4 rounded-xl bg-slate-950 border-l-2 border-cyan-400 text-xs text-slate-200 italic leading-relaxed">
              "Vertex OS's use and transfer of information received from Google APIs to any other app will adhere to the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 underline not-italic hover:text-cyan-200 inline-flex items-center gap-0.5"
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
                  <span>Only requests the minimum required Google Drive scopes (<code className="text-cyan-300 text-[10px]">drive</code> or <code className="text-cyan-300 text-[10px]">drive.file</code>) necessary to mount remote files.</span>
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
                  <span>All file transfers occur directly between the local client machine and official Google API servers over encrypted HTTPS.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Token Lifecycle and Revocation */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              4. Token Lifecycle & Immediate Revocation
            </h2>
            <p>
              Users maintain absolute control over their connected Google accounts:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Local Disconnect:</strong> You can disconnect and delete local credentials at any time by deleting <code>~/.config/rclone/rclone.conf</code> or selecting "Disconnect Cloud Drive" in Vertex OS Settings.</li>
              <li><strong>Remote Revocation:</strong> You can revoke access remotely at any moment from your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-cyan-300 underline">Google Account Security Dashboard</a>.</li>
            </ul>
          </section>

          {/* 5. Google Trademarks & Non-Affiliation */}
          <section className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-400">
            <p>
              <strong className="text-slate-300">Google Trademark Disclaimer:</strong> Google, Google Drive, and the Google logo are trademarks of Google LLC. Vertex OS is an independent operating system developed by The Vertex Project and is not affiliated with, sponsored by, or endorsed by Google LLC.
            </p>
          </section>

          {/* 6. Contact Information */}
          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg font-bold text-white">6. Contact & Data Protection Officer</h2>
            <p>
              If you have any questions regarding privacy or cloud security practices in Vertex OS, contact our maintainer directly:
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
