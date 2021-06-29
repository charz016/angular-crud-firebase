import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserPage } from './pages/list-user/list-user.component';
import { ListUserModule } from './pages/list-user/list-user.module';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListUserPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ListUserModule],
})
export class UserRoutingModule { }
