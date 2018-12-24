import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferStep2Component } from './create-offer-step2.component';

const routes: Routes = [
    {
        path: '',
        component: CreateOfferStep2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateOfferStep2RoutingModule { }