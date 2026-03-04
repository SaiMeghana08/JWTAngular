import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStorage } from './auth-storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = 'http://localhost:9090';
  
  constructor(private http: HttpClient,private authStorage: AuthStorage) {}
  requestHeader=new HttpHeaders({
    'No-Auth':'True'
  })
  getAuth(UserInfo: any) {
    return this.http.post(`${this.URL}/authenticate`, UserInfo, {
      headers: this.requestHeader
    });
  }
  getUser(){
    return this.http.get(`${this.URL}/user`,{responseType:'text'});
  }
  getAdmin(){
    return this.http.get(`${this.URL}/admin`,{responseType:'text'});
  }
  isRoleMatch(allowedRoles:string[]):boolean{
    const roles=this.authStorage.getRoles();
    for (let i = 0; i < roles.length; i++) {
    if (allowedRoles.includes(roles[i])) {
      return true;
    }
  }
    return false;
  }
}
