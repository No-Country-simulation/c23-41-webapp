import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, { response: any, expiration: number }>();

  set(url: string, response: any, ttl: number = 7000): void { // Default TTL of 5 minutes
    const expiration = Date.now() + ttl;
    this.cache.set(url, { response, expiration });
  }

  get(url: string): any | undefined {
    const cached = this.cache.get(url);

    // If the response has expired, we delete the cache and return undefined
    if (cached && cached.expiration > Date.now()) {
      return cached.response;
    } else {
      this.cache.delete(url);
      return undefined;
    }
  }

  clear(): void {
    this.cache.clear();
  }
}
