import { NavItem, Project, SkillGroup, ExperienceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming & Core',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript / TypeScript', level: 75 },
      { name: 'SQL (MySQL/SQLite)', level: 80 },
      { name: 'Data Structures', level: 85 },
    ],
  },
  {
    category: 'ML & Data Science',
    skills: [
      { name: 'TensorFlow / PyTorch', level: 85 },
      { name: 'Scikit-Learn', level: 90 },
      { name: 'XGBoost', level: 80 },
      { name: 'Pandas / NumPy', level: 95 },
    ],
  },
  {
    category: 'Computer Vision & 3D',
    skills: [
      { name: 'OpenCV', level: 85 },
      { name: 'MediaPipe', level: 80 },
      { name: 'Open3D', level: 70 },
      { name: 'MiDaS (Depth Estimation)', level: 75 },
    ],
  },
  {
    category: 'Tools & Deployment',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Vercel / GitHub Pages', level: 80 },
      { name: 'React', level: 70 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'fake-news',
    title: 'Fake News Detection System',
    summary: 'End-to-end classifier with real-time scraping pipeline.',
    description: 'A robust system designed to classify news articles as real or fake. It features a real-time scraping pipeline that fetches news from various sources, preprocesses the text, and runs it through an ensemble model for high-accuracy prediction.',
    tech: ['Python', 'NLP Embeddings', 'TensorFlow', 'XGBoost', 'SQLite', 'BeautifulSoup'],
    role: 'Lead Developer',
    highlights: [
      'Built a real-time web scraping pipeline handling 100+ articles/min.',
      'Implemented an MYSQL-backed inference engine for low-latency predictions.',
      'Achieved 99.57% accuracy on the test dataset using ensemble methods.'
    ],
    image: 'https://picsum.photos/id/24/800/600',
    links: {
      github: 'https://github.com/username/fake-news',
      demo: '#',
    },
  },
  {
    id: '3d-crime',
    title: '3D Crime Scene Reconstruction',
    summary: 'AI system transforming 2D evidence into 3D scenes.',
    description: 'A cutting-edge forensic tool that reconstructs crime scenes into interactive 3D environments. It utilizes depth estimation and pose estimation to model the spatial relationship of objects and individuals from limited 2D footage or images.',
    tech: ['MiDaS', 'MediaPipe', 'Open3D', 'WebGL', 'Python'],
    role: 'AI Researcher',
    highlights: [
      'Integrated MiDaS for monocular depth estimation.',
      'Utilized MediaPipe for precise human pose estimation within the scene.',
      'Developed a witness-text analysis module to correlate testimony with spatial data.'
    ],
    image: 'https://picsum.photos/id/201/800/600',
    links: {
      github: 'https://github.com/username/3d-crime',
      video: '#',
    },
  },
  {
    id: 'stock-risk',
    title: 'Portfolio Stock Risk Analyzer',
    summary: 'Time-series analysis tool for risk assessment.',
    description: 'An analytical dashboard that assesses portfolio risk and issues buy/sell suggestions. It leverages historical data and predictive modeling to identify market trends and volatility spikes.',
    tech: ['Time-series Analysis', 'XGBoost', 'Plotly', 'Pandas', 'Python'],
    role: 'Data Scientist',
    highlights: [
      'Engineered features based on moving averages and volatility indices.',
      'Visualized risk metrics using interactive dashboard charts.',
      'Backtested strategy showed a 15% reduction in potential drawdown.'
    ],
    image: 'https://picsum.photos/id/20/800/600',
    links: {
      github: 'https://github.com/username/stock-risk',
    },
  },
  {
    id: 'edu-quest',
    title: 'EduQuest (Hackathon)',
    summary: 'Gamified education platform for personalized learning.',
    description: 'Built the project but got rejected in the college internal level hackathon.',
    tech: ['React', 'Flask', 'Scikit-Learn', 'Django'],
    role: 'Full Stack Dev',
    highlights: [
      'Built the recommendation engine using a collaborative filtering approach.',
    ],
    image: 'https://picsum.photos/id/180/800/600',
    links: {
      demo: '#',
      github: 'https://github.com/sakanth_kumar/eduquest',
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'edu',
    type: 'education',
    role: 'B.Tech in AI & Machine Learning',
    organization: 'Sri Shakthi Institute of Engineering and Technology',
    period: '2023 - Present',
    description: '3rd Year Student. Focused on Computer Vision, Deep Learning, and Algorithm Design. CGPA: 7.41/10.',
  },

  {
    id: 'proj',
    type: 'experience',
    role: 'Self Led Machine Learning Projects',
    organization: 'Self',
    period: '2023 - Present',
    description: 'In the line of doing multiple AI and machine learning projects.',
  },
];
