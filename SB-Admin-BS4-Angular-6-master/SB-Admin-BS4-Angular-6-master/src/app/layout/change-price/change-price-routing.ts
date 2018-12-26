import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePriceComponent } from './change-price.component';

const routes: Routes = [
    {
        path: '',
        component: ChangePriceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangePriceRoutingModule { }