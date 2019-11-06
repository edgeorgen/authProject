import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/create-user', pathMatch: 'full'},
  {path:'create-user', component: CreateUserComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
