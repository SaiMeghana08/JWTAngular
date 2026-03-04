import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './Auth/auth-guard';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'admin',component:Admin,canActivate:[authGuard],data:{roles:['Admin']}},
    {path:'user',component:User,canActivate:[authGuard],data:{roles:['User']}},
    {path:'login',component:Login},
    {path:'NotFound',component:NotFound},
    {path:'**',redirectTo:'NotFound', pathMatch:'full'}
];
