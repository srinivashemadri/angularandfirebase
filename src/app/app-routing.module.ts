import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', redirectTo:'welcome', pathMatch:'full'},
  {path: 'welcome', component:WelcomeComponent},
  { path:'login', component:LoginComponent },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
