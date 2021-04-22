import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
   {path:"signup",component:RegistrationComponent},
   {path:"Home",component:HomeComponent},
   {path:"Purshace",component:PopupComponent},
   {path:"",  redirectTo:"signup",pathMatch:"full"},
 
  // {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
