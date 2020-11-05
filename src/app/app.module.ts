import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { AppService } from './services/app.service';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    NavigationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
