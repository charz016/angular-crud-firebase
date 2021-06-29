import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfficePage } from './pages/list-office/list-office.component';
import { ListOfficeModule } from './pages/list-office/list-office.module';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListOfficePage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ListOfficeModule],
})
export class OfficeRoutingModule { }
