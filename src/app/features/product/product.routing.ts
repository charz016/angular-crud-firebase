import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductPage } from './pages/list-product/list-product.component';
import { ListProductModule } from './pages/list-product/list-product.module';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListProductPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ListProductModule],
})
export class ProductRoutingModule { }
