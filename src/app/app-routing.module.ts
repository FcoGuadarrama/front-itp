import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./components/test/test.component";
import {LoginComponent} from "./components/login/login.component";
import {ResultsComponent} from "./components/results/results.component";
import {RegisterComponent} from "./components/register/register.component";
import {AdminPanelComponent} from "./components/admin/admin-panel/admin-panel.component";
import {IsNotLogInService} from "../services/Middleware/is-not-log-in.service";
import {IsLogInService} from "../services/Middleware/is-log-in.service";
import {InicioComponent} from "./components/inicio/inicio.component";
import {PageNotFoundComponent} from "./components/shared/page-not-found/page-not-found.component";
import {SignUpComponent} from "./components/admin/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component:InicioComponent,
    canActivate: [IsNotLogInService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsNotLogInService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotLogInService]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [IsNotLogInService]
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [IsNotLogInService]
  },
  {
    path: 'admin/panel',
    component: AdminPanelComponent,
    canActivate: [IsLogInService]
  },
  {
    path: 'admin/signup',
    component: SignUpComponent,
    canActivate: [IsLogInService]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
