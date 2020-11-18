import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './page-not-found/notFound.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    //loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { path: 'login', redirectTo: '/', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
