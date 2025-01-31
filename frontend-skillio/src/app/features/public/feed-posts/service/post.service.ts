import { Injectable, signal } from '@angular/core';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly postSignal = signal<Post>({
    id: '1',
    title: 'Mastering React Hooks: A Comprehensive Guide',
    content: 'React Hooks have revolutionized the way we manage state and side effects in functional components...',
    author: {
      name: 'Eva Green',
      role: 'Senior React Developer',
      company: 'Ecomia',
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FxcWprlrukqBbkqrR4t6LWlgiBGKVS.png'
    },
    featuredImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FxcWprlrukqBbkqrR4t6LWlgiBGKVS.png',
    readTime: 5,
    tags: ['React', 'JavaScript', 'Web Development', 'Hooks'],
    engagement: {
      likes: 245,
      comments: 37,
      shares: 18
    }
  });

  getPost() {
    return this.postSignal;
  }
}