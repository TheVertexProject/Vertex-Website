import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SoftwareSuite } from './components/SoftwareSuite';
import { CloudTransparency } from './components/CloudTransparency';
import { CreatorSection } from './components/CreatorSection';
import { SystemSpecs } from './components/SystemSpecs';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('/');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Initialize and listen to URL pathname or hash
  useEffect(() => {
    const parseCurrentPath = (): RoutePath => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === '/privacy-policy' || hash === '#privacy-policy') {
        return '/privacy-policy';
      }
      if (path === '/terms-of-service' || hash === '#terms-of-service') {
        return '/terms-of-service';
      }
      return '/';
    };

    setCurrentRoute(parseCurrentPath());

    const handlePopState = () => {
      setCurrentRoute(parseCurrentPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (route: RoutePath) => {
    setCurrentRoute(route);
    try {
      if (route === '/') {
        window.history.pushState({}, '', '/');
      } else {
        window.history.pushState({}, '', route);
      }
    } catch {
      // Fallback for sandboxed iframes
      window.location.hash = route.replace('/', '#');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Fixed Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Area Based on Route */}
      <main className="flex-grow">
        {currentRoute === '/privacy-policy' ? (
          <PrivacyPolicy onNavigate={navigateTo} />
        ) : currentRoute === '/terms-of-service' ? (
          <TermsOfService onNavigate={navigateTo} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onOpenDownloadModal={() => setDownloadModalOpen(true)}
              onExploreSuite={() => {
                const el = document.getElementById('software-suite');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewCloudTransparency={() => {
                const el = document.getElementById('cloud-transparency');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* App Purpose Section: About Vertex OS & Cloud Integration */}
            <AboutSection onNavigate={navigateTo} />

            {/* Proprietary Software Suite Section */}
            <SoftwareSuite
              onLearnMoreCloud={() => {
                const el = document.getElementById('cloud-transparency');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Google Drive OAuth & Cloud Transparency Section */}
            <CloudTransparency onNavigate={navigateTo} />

            {/* Creator Bio with Realtime Dynamic Age Calculation */}
            <CreatorSection />

            {/* System Specs & Development Roadmap */}
            <SystemSpecs />
          </>
        )}
      </main>

      {/* Footer with Legal Links & Limited Use Disclosure */}
      <Footer
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Download Status & Alpha Checklist Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

    </div>
  );
}
