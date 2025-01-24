import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'authToken';
  private readonly USERS_KEY = 'registeredUsers';
  private isAuthenticatedSignal = signal(false);
  private readonly _router = inject(Router);

  constructor() {
    this.initializeSession();
  }

  /**
   * Initializes the session by checking if a token exists in sessionStorage.
   */
  private initializeSession(): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const token = sessionStorage.getItem(this.AUTH_TOKEN_KEY);
      if (token) {
        this.isAuthenticatedSignal.set(true);
      }
    }
  }

  /**
   * Logs in the user by checking the credentials against the registered users list.
   * @param username - The username to authenticate.
   * @param password - The password to authenticate.
   * @returns True if login is successful, false otherwise.
   */
  login(username: string, password: string): boolean {
    const users = this.getRegisteredUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      const token = this.generateAuthToken(username);
      sessionStorage.setItem(this.AUTH_TOKEN_KEY, token);
      this.isAuthenticatedSignal.set(true);
      return true;
    }
    return false;
  }

  /**
   * Logs out the current user and removes their session token.
   */
  logout(): void {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
    }
    this.isAuthenticatedSignal.set(false);
    this._router.navigate(['/login']);
  }

  /**
   * Registers a new user and persists the user in localStorage.
   * @param username - The username to register.
   * @param password - The password for the new user.
   * @returns True if registration is successful, false if the username is already taken.
   */
  register(username: string, password: string): boolean {
    const users = this.getRegisteredUsers();

    if (users.some((u) => u.username === username)) {
      return false; // Username already exists.
    }

    users.push({ username, password });
    this.saveRegisteredUsers(users);
    return true;
  }

  /**
   * Checks if the current session is authenticated.
   * @returns True if authenticated, false otherwise.
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSignal();
  }

  /**
   * Provides access to the authentication signal for real-time updates.
   * @returns The isAuthenticated signal.
   */
  getAuthSignal() {
    return this.isAuthenticatedSignal;
  }

  /**
   * Retrieves the list of registered users from localStorage.
   * @returns The array of registered users.
   */
  private getRegisteredUsers(): { username: string; password: string }[] {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  /**
   * Saves the list of registered users to localStorage.
   * @param users - The array of users to persist.
   */
  private saveRegisteredUsers(users: { username: string; password: string }[]): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  /**
   * Generates a dummy authentication token for the session.
   * @param username - The username for which to generate the token.
   * @returns A generated token string.
   */
  private generateAuthToken(username: string): string {
    return `${username}-${new Date().getTime()}`;
  }
}
