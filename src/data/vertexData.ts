import { SoftwareTool, Milestone } from '../types';

export const PROPRIETARY_TOOLS: SoftwareTool[] = [
  {
    id: 'vertex-browser',
    name: 'Vertex Browser',
    tagline: 'Proprietary sovereign web browser with hardware sandboxing and zero tracking',
    category: 'Proprietary System Suite',
    iconName: 'Globe',
    badge: 'Proprietary Core',
    color: 'cyan',
    summary: 'A custom native web browser engineered specifically for Vertex OS, delivering hardware-accelerated rendering, per-tab process sandboxing, native ad/tracker nullification, and strict zero telemetry.',
    keyFeatures: [
      'Built-in tracker nullification & DNS-over-HTTPS protecting queries directly on-silicon',
      'Strict containerized process isolation preventing cross-tab memory leaks and zero-day exploits',
      'Hardware-accelerated Wayland video decoding with sub-millisecond input response',
      'Deep desktop integration with Vertex Command HUD for instant tab querying'
    ],
    technicalSpecs: [
      { label: 'Rendering Core', value: 'Hardware-Accelerated Native Web Engine (WebKit / Blink embed)' },
      { label: 'Sandboxing Model', value: 'Linux Seccomp-BPF + Landlock Container Isolation' },
      { label: 'Telemetry Policy', value: '100% Zero-Telemetry (No analytics daemons or remote telemetry)' },
      { label: 'Wayland Acceleration', value: 'Direct DMA-BUF zero-copy surface rendering' }
    ],
    architectureNote: 'Replaces bloated standard browsers with a streamlined, lightweight native client consuming under 350MB base memory while blocking invasive telemetry at the network socket layer.',
    deploymentModel: 'Default pre-installed system browser natively bound to the Vertex OS desktop shell.'
  },
  {
    id: 'vertex-installer',
    name: 'Vertex Installer',
    tagline: 'Hardware deployment, automated GPT partitioning, and onboarding engine',
    category: 'Proprietary System Suite',
    iconName: 'HardDrive',
    badge: 'Proprietary Core',
    color: 'cyan',
    summary: 'An autonomous, fail-safe bare-metal provisioning engine engineered specifically for modern NVMe, SATA, and eMMC storage controllers.',
    keyFeatures: [
      'Automated GPT Partitioning with smart aligned block layouts for maximum flash longevity',
      'Dual-boot preservation algorithm that safely identifies existing Windows / EFI partitions',
      'Full-disk LUKS2 encryption with TPM 2.0 automatic secure key sealing',
      'Zero-downtime atomic subvolume initialization powered by Btrfs with Zstd compression'
    ],
    technicalSpecs: [
      { label: 'Architecture', value: 'Rust / Modern C++ with low-level blockdev bindings' },
      { label: 'Partition Table', value: 'GPT (GUID Partition Table) with EFI System Partition (ESP)' },
      { label: 'Filesystem Default', value: 'Btrfs with optimized subvolumes (@, @home, @var_log)' },
      { label: 'Security Layer', value: 'LUKS2 aes-xts-plain64 + TPM2 PCRExtend integration' }
    ],
    architectureNote: 'Directly orchestrates low-level Linux block devices through atomic ioctl calls, completely replacing legacy ubiquity/calamares with a modern declarative installer state machine.',
    deploymentModel: 'Autonomous bare-metal execution from live ISO media with hardware-level block isolation.'
  },
  {
    id: 'vertex-cloud-sync',
    name: 'Vertex Cloud Sync Engine',
    tagline: 'Background integration daemon interfacing with high-performance R3 bucket storage via Google Auth',
    category: 'Proprietary System Suite',
    iconName: 'CloudLightning',
    badge: 'Proprietary Core',
    color: 'magenta',
    summary: 'A kernel-level Virtual File System (VFS) cache layer and asynchronous sync daemon that fetches and streams drive content from an optimized R3 bucket, secured via Google Auth.',
    keyFeatures: [
      'Kernel FUSE / VFS caching for instant on-demand file streaming without downloading full folders',
      'High-throughput R3 object bucket synchronization authenticated securely via Google Auth / OAuth 2.0',
      'Local-only credential vault strictly saved in standard user configuration (~/.config/rclone/rclone.conf)',
      'Intelligent chunked background upload queue with SHA-256 integrity verification'
    ],
    technicalSpecs: [
      { label: 'Cloud Storage Protocol', value: 'High-Performance R3 Object Storage Bucket' },
      { label: 'Authentication Provider', value: 'Google Auth (OAuth 2.0 PKCE User Authorization)' },
      { label: 'Storage Mount', value: 'Native systemd mount unit target at ~/VertexDrive' },
      { label: 'Token Isolation', value: '100% On-Device Auth Token Storage (Zero Telemetry)' }
    ],
    architectureNote: 'Bypasses slow web apps by mounting cloud files as native POSIX paths, fetching content from high-speed R3 bucket storage with Google Auth verification for zero-latency local workflows.',
    deploymentModel: 'Native systemd user service daemon mounted dynamically upon desktop session login.'
  },
  {
    id: 'vertex-id-auth',
    name: 'Vertex ID & Auth Subsystem',
    tagline: 'Centralized, secure authentication and identity management service',
    category: 'Proprietary System Suite',
    iconName: 'ShieldCheck',
    badge: 'Proprietary Core',
    color: 'blue',
    summary: 'A unified Linux PAM (Pluggable Authentication Modules) integration framework coupling hardware security tokens, local biometrics, and session credentials.',
    keyFeatures: [
      'Pluggable PAM security module interfacing with FIDO2 / WebAuthn hardware keys (YubiKey)',
      'Biometric fingerprint & facial recognition fallback via libfprint & Howdy hooks',
      'Local Master Keyring with zero telemetry, keeping passwords and API keys on silicon',
      'Single-sign-on integration for local desktop sessions and cloud sync unlocks'
    ],
    technicalSpecs: [
      { label: 'PAM Hook', value: 'pam_vertex_auth.so with system-auth priority stack' },
      { label: 'Hardware Support', value: 'FIDO2 / U2F, TPM 2.0 cryptographic hierarchy' },
      { label: 'Storage', value: 'Protected Linux Secret Service API (org.freedesktop.secrets)' },
      { label: 'Telemetry', value: 'Strictly zero outgoing network packets' }
    ],
    architectureNote: 'Maintains airtight cryptographical isolation between user space processes and root-level security tokens, guaranteeing that unauthorized applications cannot inspect sensitive tokens.',
    deploymentModel: 'Integrated directly into the Linux PAM authentication stack and system credential bus.'
  },
  {
    id: 'vertex-shell-enhancements',
    name: 'Vertex Shell & Desktop Enhancements',
    tagline: 'Custom desktop tweaks, utilities, quick-access HUD, and live environment tools',
    category: 'Desktop Environment',
    iconName: 'Layers',
    badge: 'Proprietary UI/UX',
    color: 'orange',
    summary: 'A custom desktop runtime providing hardware status overlays, low-latency window compositing, and instant power management profiles.',
    keyFeatures: [
      'Vertex Command HUD: Universal fuzzy spotlight search for files, system settings, and cloud queries',
      'Smart Battery & Thermal Governor: Dynamically throttles CPU p-states based on active workload',
      'Live ISO Recovery Suite: Integrated diagnostics tool inside the live boot environment',
      'Modern Wayland compositing with sub-millisecond input latency and smooth window shaders'
    ],
    technicalSpecs: [
      { label: 'Compositor', value: 'Wayland native with adaptive sync (FreeSync / G-Sync)' },
      { label: 'HUD Engine', value: 'GTK4 / libadwaita with asynchronous D-Bus message queue' },
      { label: 'Performance Profile', value: 'Automated dynamic scheduler (Power Saver / Balanced / Turbo)' },
      { label: 'Customization', value: 'Dynamic declarative CSS theming with live hot-reload' }
    ],
    architectureNote: 'Engineered as low-footprint C/Rust daemon plugins to keep idle memory utilization under 450MB while rendering responsive glassmorphic UI elements.',
    deploymentModel: 'Embedded directly inside the Wayland compositor display server pipeline.'
  }
];

export const DEVELOPMENT_MILESTONES: Milestone[] = [
  {
    phase: 'Phase 1',
    title: 'Ubuntu LTS Base & Toolchain',
    status: 'completed',
    description: 'Hardened Ubuntu LTS base system integration with custom kernel patches, stripped telemetry daemons, and Wayland compositor foundation.',
    items: ['Ubuntu LTS minimal rootfs bootstrap', 'Kernel 6.x optimized build', 'APT & Vertex repository toolchain']
  },
  {
    phase: 'Phase 2',
    title: 'Proprietary Software Suite Alpha',
    status: 'in-progress',
    description: 'Developing the in-house Vertex Browser, Vertex Installer, R3 Bucket Cloud Sync with Google Auth, and PAM auth modules.',
    items: ['Vertex Browser native sandboxing', 'Vertex GPT Installer beta tests', 'R3 bucket VFS sync with Google Auth']
  },
  {
    phase: 'Phase 3',
    title: 'Hardware Testing & ISO Release Candidate',
    status: 'upcoming',
    description: 'Multi-device hardware validation (Intel, AMD, Framework, Dell XPS, ThinkPad) before opening public ISO downloads.',
    items: ['Automated CI/CD ISO builds', 'Public Alpha release candidate', 'Secure download mirrors & checksums']
  }
];

export const SYSTEM_SPECS = [
  { label: 'Base Distribution', value: 'Ubuntu LTS (Hardened, telemetry-stripped core)' },
  { label: 'Kernel Base', value: 'Linux Kernel 6.12+ LTS with low-latency Zen tweaks' },
  { label: 'Display Protocol', value: 'Pure Wayland (with XWayland sandboxed fallback)' },
  { label: 'Default Web Browser', value: 'Vertex Browser (Sovereign, telemetry-free, sandboxed process engine)' },
  { label: 'Package Management', value: 'APT (Debian/Ubuntu packages) + Flatpak / Vertex PKG layer' },
  { label: 'Memory Footprint', value: '~480MB Idle RAM on cold boot' },
  { label: 'Cloud Architecture', value: 'R3 Bucket Object Storage with Google Auth & local VFS FUSE mount' },
  { label: 'Hardware Architecture', value: 'x86_64 (AMD64) & Planned ARM64 (Apple Silicon / Snapdragon)' }
];
