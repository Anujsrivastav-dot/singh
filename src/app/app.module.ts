import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchdataService } from './fetchdata.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {SomeModuleRoutingModule} from "./some-module/some-module-routing.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    UpdateComponent,
    EmailComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,SomeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
