import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule, MdSidenavModule, MdCheckboxModule, MdTabsModule, MdSelectModule } from '@angular/material';


// used to create fake backend
// import { fakeBackendProvider } from './_fake-back/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService, UserService } from './_services/index';


import { AppComponent }  from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { HeaderComponent } from './Header/header.component';
import { AdministrationComponent } from './Administration/administration.component';
import { PreferenceComponent } from './Administration/User-preference/preference.component';
import { ChangePasswordComponent } from './Administration/Change-password/change-password.component';
import { ViewUsersComponent } from './Administration/View-users/view-users.component';
import { ViewCustomersComponent } from './Administration/View-customers/view-customers.component';
import { ViewVehiclesComponent } from './Administration/View-vehicles/view-vehicles.component';
import { ViewVehicleGroupsComponent } from './Administration/View-vehicle-groups/view-vehicle-groups.component';
import { ForgotPasswordComponent } from './Forgot-password/forgot-password.component';

import { AppRoutingModule, routingComponents } from './app.routes';
@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, MdInputModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule, MdSidenavModule, MdCheckboxModule, MdTabsModule, MdSelectModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AdministrationComponent, PreferenceComponent, ChangePasswordComponent, ViewUsersComponent, ViewCustomersComponent, ViewVehiclesComponent, ViewVehicleGroupsComponent,
    ForgotPasswordComponent,
    routingComponents
  ],
  bootstrap:    [ AppComponent ],
  providers:    [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions,
  ]
})

export class AppModule {  }
