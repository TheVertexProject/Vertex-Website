export type RoutePath = '/' | '/privacy-policy' | '/terms-of-service' | '/software-suite' | '/cloud-transparency' | '/about';

export interface SoftwareTool {
  id: string;
  name: string;
  tagline: string;
  category: 'Proprietary System Suite' | 'Core Infrastructure' | 'Desktop Environment';
  iconName: string;
  badge: string;
  color: 'cyan' | 'blue' | 'magenta' | 'orange';
  summary: string;
  keyFeatures: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  architectureNote: string;
  deploymentModel: string;
}

export interface CloudSyncFeature {
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface Milestone {
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  items: string[];
}
