import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize } from 'rxjs';

export enum LoadingState {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  IDLE = 'IDLE'
}

@Injectable({
  providedIn: 'root'
})
export class InitialLoadingStateService {
  private requestCount = 0;
  private loadingStateSubject = new BehaviorSubject<LoadingState>(LoadingState.SUCCESS);

  loadingState$: Observable<LoadingState> = this.loadingStateSubject.asObservable();

  startLoading(): void {
    this.requestCount++;
    if (this.requestCount === 1) {
      this.loadingStateSubject.next(LoadingState.LOADING);
    }
  }

  endLoading(): void {
    if (this.requestCount > 0) {
      this.requestCount--;
      if (this.requestCount === 0) {
        this.loadingStateSubject.next(LoadingState.SUCCESS);
      }
    }
  }

  withLoading<T>(observable$: Observable<T>): Observable<T> {
    this.startLoading();
    return observable$.pipe(
      delay(10000),
      finalize(() => this.endLoading())
    );
  }
}
