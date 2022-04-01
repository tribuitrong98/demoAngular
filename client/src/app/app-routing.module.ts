import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginComponent } from "./Components/Pages/login/login.component";
import { RegisterComponent } from "./Components/Pages/register/register.component";

const routesConfig: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: HomeComponent},
]

@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent,
      RegisterComponent
    ],
    imports: [
      RouterModule.forRoot(routesConfig), 
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    exports: [RouterModule]
  })

export class AppRoutingModule{}