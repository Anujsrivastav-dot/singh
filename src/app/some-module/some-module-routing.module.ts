import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { FetchdataService } from '../fetchdata.service';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { UpdateComponent } from '../update/update.component';
import { EmailComponent } from '../email/email.component';
import { PasswordComponent } from '../password/password.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'update/:id', component: UpdateComponent},
  { path: 'email', component: EmailComponent},
  {
    path: 'auth/reset_password/:token',
    component: PasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeModuleRoutingModule { }
