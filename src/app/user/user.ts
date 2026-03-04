import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  message: string = '';
  constructor(private userService: UserService,private router:Router) {

  }
  ngOnInit(): void {
      this.forUser();
  }
  forUser(){
    this.userService.getUser().subscribe({
      next:(res)=>{
        console.log(res);
        this.message=res.toString();
      },
      error:(err)=>{
        console.log(err);
        this.router.navigate(['/NotFound']);
      }
    })
  }
}
