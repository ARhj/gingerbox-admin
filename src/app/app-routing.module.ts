import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddclientComponent } from './pages/addclient/addclient.component';
import { AssignprofileComponent } from './pages/assignprofile/assignprofile.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'dashbord',canActivate : [AuthGuard] ,component: DashbordComponent},
  {path:'profile',canActivate : [AuthGuard],component: ProfileComponent},
  {path:'addclient',canActivate : [AuthGuard],component: AddclientComponent},
  {path:'assignprofile',canActivate : [AuthGuard],component: AssignprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
