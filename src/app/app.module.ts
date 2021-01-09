import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Forms/Usermanagement/login/login.component';
import { HomeComponent } from './Forms/home/home.component';
import { RegisterComponent } from './Forms/Usermanagement/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/AuthInterceptor';
import { APP_BASE_HREF } from '@angular/common';
import { AppDataComponent } from './Forms/home/app-data/app-data.component';
import { UserInfoComponent } from './Forms/UserManagement/user-info/user-info.component';
import { SidebarMenuComponent } from './Forms/Home/sidebar-menu/sidebar-menu.component';
import { SidebarFooterMenuComponent } from './Forms/Home/sidebar-footer-menu/sidebar-footer-menu.component';
import { UserMessagesComponent } from './Forms/UserManagement/user-messages/user-messages.component';
import { FooterComponent } from './Forms/Home/footer/footer.component';
import { LockClockComponent } from './Forms/Home/lock-clock/lock-clock.component';
import { UserProfileComponent } from './Forms/userManagement/user-profile/user-profile.component';


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
