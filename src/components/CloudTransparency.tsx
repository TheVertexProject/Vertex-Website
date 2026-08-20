import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Key, 
  Lock, 
  ServerOff, 
  CheckCircle2, 
  ExternalLink, 
  FileCode, 
  AlertTriangle,
  RefreshCw,
  FolderSync,
  Database
} from 'lucide-react';
import { RoutePath } from '../types';

interface CloudTransparencyProps {
  onNavigate: (route: RoutePath) => void;
}

export const CloudTransparency: React.FC<CloudTransparencyProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'flow' | 'config' | 'limited-use'>('flow');

  return (
    <section id="cloud-transparency" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Google Auth & R3 Bucket Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cloud Transparency &{' '}
            <span className="text-gradient-vibrant">
              Zero-Telemetry Promise
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Vertex OS uses high-performance <strong className="text-white">R3 object bucket storage</strong> for fetching and caching your drive content, authenticated seamlessly via <strong className="text-white">Google Auth</strong>. 
            All tokens and credentials remain strictly on your physical machine with zero telemetry.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 relative overflow-hidden">
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 w-fit">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Local-Only Token Storage</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google Auth tokens and R3 bucket configurations are strictly saved on your local device at{' '}
              <code className="text-cyan-300 font-mono bg-slate-950 px-1 py-0.5 rounded border border-white/10">
                ~/.config/rclone/rclone.conf
              </code>
              . Protected by standard POSIX permissions (chmod 600).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 relative overflow-hidden">
            <div className="p-3 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-400 w-fit">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">R3 Bucket Fast Storage</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Drive content is retrieved directly from optimized R3 bucket storage using high-speed multi-threaded chunks, verified and authorized on-device through Google Auth tokens without external tracking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3 relative overflow-hidden">
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Instant Revocation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You maintain 100% sovereign authority over your Google account. You can revoke Vertex OS authentication permissions at any second 
              via your standard Google Account security console or by deleting the local config file.
            </p>
          </div>

        </div>

        {/* Interactive Architecture & Disclosure Panel */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('flow')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'flow'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-950/50'
                }`}
              >
                1. Google Auth & R3 Storage Architecture
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'config'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-950/50'
                }`}
              >
                2. On-Disk Configuration Sample
              </button>
              <button
                onClick={() => setActiveTab('limited-use')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'limited-use'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-950/50'
                }`}
              >
                3. Google Limited Use Disclosure
              </button>
            </div>

            <span className="text-xs font-mono text-slate-400">
              OAuth 2.0 PKCE • RFC 7636 • R3 Storage
            </span>
          </div>

          {/* Tab Content 1: Flow Diagram */}
          {activeTab === 'flow' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2 text-center relative">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-white">Google Auth</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    User authenticates via the official Google OAuth consent flow to verify identity and authorize cloud drive access.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2 text-center relative">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 font-mono font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-white">Local PKCE Validation</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Authorization tokens are exchanged locally via PKCE loopback and saved in <code className="text-cyan-300">~/.config/rclone/rclone.conf</code>.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2 text-center relative">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-mono font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-white">R3 Bucket Fetch</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Daemon fetches drive contents from the high-throughput R3 object storage bucket with signed headers.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2 text-center relative">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs flex items-center justify-center mx-auto mb-2">
                    04
                  </div>
                  <h4 className="text-xs font-bold text-white">VFS Kernel Mount</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Virtual File System mounts content as a native local directory (<code className="text-emerald-300">~/VertexDrive</code>) with sparse caching.
                  </p>
                </div>

              </div>

              {/* Zero Telemetry Banner */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-500/20 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Strict Zero-Knowledge Guarantee:</strong> At no point during Google Auth validation, R3 bucket fetching, 
                  or background synchronization are your files, metadata, email address, or OAuth tokens transmitted to any secondary third-party servers.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content 2: Config file sample */}
          {activeTab === 'config' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2 text-slate-300">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  File Location: ~/.config/rclone/rclone.conf
                </span>
                <span className="text-emerald-400">Permissions: 0600 (Owner Read/Write Only)</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
                <div className="text-slate-500"># Configuration generated on local client only</div>
                <div className="text-cyan-400">[r3-drive-storage]</div>
                <div><span className="text-slate-400">type =</span> s3</div>
                <div><span className="text-slate-400">provider =</span> Other</div>
                <div><span className="text-slate-400">auth_provider =</span> google_oauth2</div>
                <div><span className="text-slate-400">token =</span> &#123;&quot;access_token&quot;:&quot;ya29.a0AfH6SM...&quot;,&quot;token_type&quot;:&quot;Bearer&quot;,&quot;expiry&quot;:&quot;2026-08-19T16:00:00Z&quot;&#125;</div>
                <div><span className="text-slate-400">vfs_cache_mode =</span> full</div>
                <div><span className="text-slate-400">vfs_cache_max_size =</span> 25G</div>
                <div><span className="text-slate-400">vfs_read_chunk_size =</span> 128M</div>
              </div>

              <p className="text-xs text-slate-400">
                You can audit or remove this configuration file at any time from your local directory at <code className="text-cyan-300 font-mono">~/.config/rclone/rclone.conf</code> to completely purge stored credentials from your disk.
              </p>
            </div>
          )}

          {/* Tab Content 3: Limited Use Disclosure */}
          {activeTab === 'limited-use' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Google API Services User Data Policy — Limited Use Disclosure
                </h4>
                <blockquote className="p-3.5 rounded-xl bg-slate-900/80 border-l-2 border-cyan-400 text-xs text-slate-200 leading-relaxed font-sans italic">
                  "Vertex OS's use and transfer to any other app of information received from Google APIs will adhere to{' '}
                  <a 
                    href="https://developers.google.com/terms/api-services-user-data-policy" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-300 underline hover:text-cyan-200 inline-flex items-center gap-0.5 not-italic"
                  >
                    Google API Services User Data Policy
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  , including the Limited Use requirements."
                </blockquote>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specifically, Vertex OS:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Does NOT transfer your Google data to third parties or advertising networks</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Does NOT use Google user data to train generalized AI or machine learning models</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Does NOT retain your personal files on any telemetry or advertising servers</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Only uses Google Auth to verify your identity and authorize drive content access via R3 bucket</span>
                  </li>
                </ul>
              </div>

              {/* Instructions on Revoking Permissions */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h5 className="text-xs font-semibold text-white">How to Revoke Google Auth Access</h5>
                  <p className="text-xs text-slate-400">
                    Visit your Google Account Security Dashboard and remove "The Vertex Project" under Third-Party Apps with Account Access.
                  </p>
                </div>
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Google Permissions Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Quick Legal links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Project: <strong className="text-slate-200 font-mono">The Vertex Project</strong></span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('/privacy-policy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Read Full Privacy Policy →
              </button>
              <button
                onClick={() => {
                  onNavigate('/terms-of-service');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Read Terms of Service →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
