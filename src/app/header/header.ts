import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthStorage } from '../../Services/auth-storage';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
onLogout() {
  this.authStorage.clear();
  this.router.navigate(['/home']);
}
  constructor(private router:Router,private authStorage:AuthStorage,private userService:UserService) {

  }
onClick() {
  this.router.navigate(['/login']);
}
isLoggedIn(): boolean {
  return this.authStorage.isLoggedIn();
}
isMatch(allowedRoles:string[]):boolean{
  return this.userService.isRoleMatch(allowedRoles);
}
}
