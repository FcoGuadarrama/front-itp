import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './components/results/results.component';
import {ActivityService} from "../services/activity.service";
import { PaginatorPipePipe } from './pipes/paginator-pipe.pipe';
import {MatPaginatorModule} from "@angular/material/paginator";
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavBarComponent,
    LoginComponent,
    ResultsComponent,
    PaginatorPipePipe,
    RegisterComponent,
    AdminPanelComponent,
    InicioComponent,
    PageNotFoundComponent,
    SignUpComponent,
    SidebarComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
