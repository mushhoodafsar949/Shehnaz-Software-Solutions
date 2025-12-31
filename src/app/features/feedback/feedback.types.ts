// Shared types for feedback feature
export interface AdvancedFeedback {
  id?: string;
  clientName: string;
  clientEmail: string;
  company?: string;
  industry?: string;
  projectName?: string;
  completionDate?: Date;
  servicesUsed?: string[];
  projectSize?: string;
  ratings: { [key: string]: number };
  highlights: string;
  improvements: string;
  recommendation: string;
  allowPublish: boolean;
  showCompany: boolean;
  contactForCase: boolean;
  type?: string;
  date?: Date;
}

export interface Review {
  id: string;
  name: string;
  email: string;
  company?: string;
  position?: string;
  avatar?: string;
  rating: number;
  subject: string;
  message: string;
  projectName?: string;
  date: Date;
  tags: ReviewTag[];
  verified: boolean;
  likes?: number;
  isLiked?: boolean;
  expanded?: boolean;
  metrics?: ReviewMetric[];
  industry?: string;
  services?: string[];
}

export interface ReviewTag {
  name: string;
  type: string;
}

export interface ReviewMetric {
  label: string;
  value: number;
}

export interface FeedbackType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  count: number;
}

export interface LiveStat {
  id: string;
  icon: string;
  value: number;
  displayValue: string;
  label: string;
  trend: number;
}

export interface EmojiRating {
  emoji: string;
  label: string;
}

export interface QuickFeedback {
  rating: number;
  comment: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  rating: number;
  token: string;
}

export interface ReviewFilters {
  industry: string;
  rating: string;
  service: string;
  search: string;
}

export interface ImpactMetric {
  title: string;
  description: string;
  value: string;
  metric: string;
  progress: number;
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  data: number[];
  backgroundColor?: string[];
  borderColor?: string;
  tension?: number;
  label?: string;
}

export interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  [key: string]: unknown;
}

export interface KeyMetric {
  label: string;
  value: string;
  trend: 'positive' | 'negative' | 'neutral';
}

export interface DropdownOption {
  label: string;
  value: string;
}

