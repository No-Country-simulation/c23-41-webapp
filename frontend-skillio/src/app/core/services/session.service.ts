import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly AUTH_TOKEN_KEY = 'authToken';
  private readonly _isAuthenticated = signal<boolean>(false);

  constructor() {
    this.initializeSession();
  }

  /**
   * Initializes the session by checking if a token exists in sessionStorage.
   */
  private initializeSession(): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const token = sessionStorage.getItem(this.AUTH_TOKEN_KEY);
      this._isAuthenticated.set(!!token);
    }
  }

  /**
   * Generates a dummy authentication token for the session.
   * @param username - The username for which to generate the token.
   * @returns A generated token string.
   */
  generateToken(username: string): string {
    return `${username}-${new Date().getTime()}`;
  }

  /**
   * Stores the token in sessionStorage and updates the authentication state.
   * @param token - The token to store.
   */
  setToken(token: string): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      sessionStorage.setItem(this.AUTH_TOKEN_KEY, token);
      this._isAuthenticated.set(true);
    }
  }

  /**
   * Retrieves the token from sessionStorage.
   * @returns The token if it exists, otherwise null.
   */
  getToken(): string | null {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      return sessionStorage.getItem(this.AUTH_TOKEN_KEY);
    }
    return null;
  }

  /**
   * Clears the token from sessionStorage and updates the authentication state.
   */
  clearToken(): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
      this._isAuthenticated.set(false);
    }
  }

  /**
   * Returns the authentication state as a Signal.
   * @returns A Signal<boolean> indicating whether the user is authenticated.
   */
  isAuthenticated() {
    return this._isAuthenticated.asReadonly();
  }
}