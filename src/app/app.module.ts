import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  , HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { AddclientComponent } from './pages/addclient/addclient.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AssignprofileComponent } from './pages/assignprofile/assignprofile.component';
import { SidenavbarComponent } from './layouts/sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    ProfileComponent,
    AddclientComponent,
    HeaderComponent,
    AssignprofileComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide :  HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
