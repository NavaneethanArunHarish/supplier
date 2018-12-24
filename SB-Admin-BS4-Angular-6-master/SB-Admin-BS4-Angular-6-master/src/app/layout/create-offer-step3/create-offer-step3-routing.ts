import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferStep3Component } from './create-offer-step3.component';

const routes: Routes = [
    {
        path: '',
        component: CreateOfferStep3Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateOfferStep3RoutingModule { }