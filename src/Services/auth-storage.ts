import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStorage {

  getRoles():string[] {
    return JSON.parse(localStorage.getItem('role') || '[]');

  }
  setRoles(role:string[]){
    localStorage.setItem('role',JSON.stringify(role));
     
  }
  getUsername():string{
    return localStorage.getItem('username') || '';
  } 
  setUsername(username:string){
    localStorage.setItem('username',username);
  }
  getToken(): string {
    return localStorage.getItem('token') || '';
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  isLoggedIn(): boolean {
    return this.getToken() !== '';
  }
  clear(){
    return localStorage.clear();
  }

}
