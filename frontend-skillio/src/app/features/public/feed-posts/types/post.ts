export interface Post {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
      role: string;
      company: string;
      avatar: string;
    };
    featuredImage: string;
    readTime: number;
    tags: string[];
    engagement: {
      likes: number;
      comments: number;
      shares: number;
    };
  }