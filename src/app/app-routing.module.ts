import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/user/user.module').then(
            m => m.UserModule
          ),
      },
      {
        path: 'office',
        loadChildren: () =>
          import('./features/office/office.module').then(
            m => m.OfficeModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./features/product/product.module').then(
            m => m.ProductModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavBarModule,HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
