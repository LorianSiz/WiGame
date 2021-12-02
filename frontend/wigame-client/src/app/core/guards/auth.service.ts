import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  getUserName(): string {
    return JSON.parse(<string>localStorage.getItem('userName'));
  }

  setUserName(pseudo: string): void {
    localStorage.setItem('pseudo', JSON.stringify(pseudo));
  }

  getAccessToken(): string {
    return JSON.parse(<string>localStorage.getItem('accessToken'));
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
  }

  clearStorage(): void {
    localStorage.removeItem('roles');
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idPerson');
  }

}
