import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from './components/home/home.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
  imports: [RouterModule.forRoot(routes), LayoutModule, HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
