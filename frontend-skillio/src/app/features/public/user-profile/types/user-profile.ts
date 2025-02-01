export interface Project {
    id: string;
    name: string;
    role: string;
    status: 'current' | 'completed';
  }
  
  export interface Review {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    comment: string;
  }
  
  export interface UserProfile {
    name: string;
    faculty: string;
    avatar: string;
    banner: string;
    rating: number;
    bio: string;
    projects: Project[];
    reviews: Review[];
  }