import { Injectable, signal } from '@angular/core';

interface EngagementState {
  isLiked: boolean;
  isBookmarked: boolean;
  likeCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class EngagementService {
  private readonly engagementState = signal<EngagementState>({
    isLiked: false,
    isBookmarked: false,
    likeCount: 245
  });

  getState() {
    return this.engagementState;
  }

  toggleLike() {
    this.engagementState.update(state => ({
      ...state,
      isLiked: !state.isLiked,
      likeCount: state.likeCount + (state.isLiked ? -1 : 1)
    }));
  }

  toggleBookmark() {
    this.engagementState.update(state => ({
      ...state,
      isBookmarked: !state.isBookmarked
    }));
  }
}