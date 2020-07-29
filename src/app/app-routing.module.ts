import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
