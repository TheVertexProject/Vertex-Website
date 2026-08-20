import React, { useState } from 'react';
import { 
  Lock, 
  X, 
  Download, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  HardDrive, 
  Cpu, 
  Mail, 
  BellRing, 
  Sparkles, 
  Shield 
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-white/15 shadow-2xl overflow-hidden my-8">
        
        {/* Top Header with Lock badge */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 border-b border-white/10 relative">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                  Build Status: In Active Development
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Download Vertex OS
              </h2>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Release Notice:</strong> Downloads will be available once the initial stable build is finalized. 
              The engineering team is currently validating automated GPT partitioning and VFS cloud caching on bare-metal OEM hardware.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Minimum Requirements */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Target System Requirements (Preview)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">Architecture</span>
                <p className="font-bold text-slate-200">64-bit x86 / ARM64</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">Memory (RAM)</span>
                <p className="font-bold text-slate-200">4GB (8GB Rec.)</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">Disk Storage</span>
                <p className="font-bold text-slate-200">32GB NVMe / SSD</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">Firmware</span>
                <p className="font-bold text-slate-200">UEFI 64-bit</p>
              </div>
            </div>
          </div>

          {/* Release Readiness Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Pre-Release Milestone Checklist
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-emerald-500/20 text-slate-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Linux 6.12+ Zen Kernel & Wayland Compositor
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">
                  Done
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-slate-200">
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin inline-block"></span>
                  Vertex Installer GPT Partitioning & Recovery
                </span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded">
                  Testing
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-white/5 text-slate-400">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-500" />
                  Public ISO Mirrors & Cryptographic SHA256 Signatures
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Get Notified Form */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-950 to-blue-950/50 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold font-mono">
              <BellRing className="w-4 h-4 text-cyan-400" />
              <span>ALPHA 1.0 RELEASE NOTIFICATION</span>
            </div>
            
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're on the early alpha list! We'll send an email alert to <strong>{email}</strong> the second the public ISO drops.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <p className="text-xs text-slate-300">
                  Enter your email to receive direct download links, checksums, and install guides the moment the build goes public.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@domain.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Notify Me</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Platform: <strong className="text-slate-300">Vertex OS</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
};
