export interface Project {
  id: string;
  title: string;
  category: string;
  context: string;
  role?: string;
  supervisor?: string;
  tech: string[];
  shortDescription: string;
  highlights: string[];
  metrics?: { label: string; value: string };
  visualType: 'junsono' | 'genie' | 'resumeiq' | 'legallens';
  deepDive: {
    overview: string;
    architectureNodes: { name: string; type: string; description: string }[];
    keyEngineeringAchievements: string[];
    technicalStackDetails: { category: string; tools: string[] }[];
  };
}

export interface ResearchItem {
  role: string;
  lab: string;
  institution: string;
  supervisor: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
  description?: string;
}

export interface Credential {
  title: string;
  issuer: string;
  type: 'certification' | 'coursework' | 'badge';
  detail: string;
}

