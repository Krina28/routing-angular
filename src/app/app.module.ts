import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { AppService } from './services/app.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './page-not-found/notFound.component';
import { LoadingComponent } from './loading/loading.component';

//TODO

//lazy loading routing
// Lazy loading module. for ex, auth (login, signup, forgot pwd, reset pwd)
//login - signup forms with validations of all kinds. phone number, dropdown, email
//Toast message

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    NavigationComponent,
    UserDetailsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
