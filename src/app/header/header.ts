import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthStorage } from '../../Services/auth-storage';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user-service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-header',
  imports: [RouterLink,FormsModule,CommonModule,MatToolbarModule,MatButtonModule],
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
