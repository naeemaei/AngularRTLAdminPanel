import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './UserManagement/user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Usermanagement/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Usermanagement/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/AuthInterceptor';
import { APP_BASE_HREF } from '@angular/common';
import { AppDataComponent } from './home/app-data/app-data.component';
import { UserInfoComponent } from './UserManagement/user-info/user-info.component';
import { SidebarMenuComponent } from './Home/sidebar-menu/sidebar-menu.component';
import { SidebarFooterMenuComponent } from './Home/sidebar-footer-menu/sidebar-footer-menu.component';
import { UserMessagesComponent } from './UserManagement/user-messages/user-messages.component';
import { FooterComponent } from './Home/footer/footer.component';
import { LockClockComponent } from './Home/lock-clock/lock-clock.component';


const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },

  {
    path: '',

    redirectTo: '/home',

    pathMatch: 'full'

  }

];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AppDataComponent,
    UserInfoComponent,
    SidebarMenuComponent,
    SidebarFooterMenuComponent,
    UserMessagesComponent,
    FooterComponent,
    LockClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
