import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehiclesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //https://localhost:5001
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //https://localhost:5001/counter
      { path: 'counter', component: CounterComponent },
      //https://localhost:5001/fetch-data
      { path: 'fetch-data', component: FetchDataComponent },
      //https://localhost:5001/vehicles
      { path: 'vehicles', component: VehiclesComponent },
      //https://localhost:5001/login
      { path: 'login', component: LoginComponent },
      //https://localhost:5001/register
      { path: 'register', component: RegisterComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
