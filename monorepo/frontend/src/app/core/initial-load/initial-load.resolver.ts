import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LoadingState, InitialLoadingStateService } from './initial-load-state.service';
import { delay, filter, map, take, tap } from 'rxjs';

export const initialLoadResolver: ResolveFn<boolean> = (route, state) => {
  const loadingStateService = inject(InitialLoadingStateService);

  return loadingStateService.loadingState$.pipe(
    filter(state => state === LoadingState.SUCCESS),
    delay(10000),
    tap(() => console.log('initial load done')),
    map(() => true),
  );
};
