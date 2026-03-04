import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthStorage } from '../../Services/auth-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private userService: UserService, private authService: AuthStorage,private router:Router) {}

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.userService.getAuth(loginForm.value).subscribe({
      next: (response:any) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.authService.setRoles([response.role]);
        this.authService.isLoggedIn();
        this.authService.setUsername(response.username);
        if(response.role.includes('Admin')){
          this.router.navigate(['/admin']);
        }else if(response.role.includes('User')){
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        console.log(err);
        alert('Invalid Credentials');
      },
    });
    loginForm.reset();
  }
}
