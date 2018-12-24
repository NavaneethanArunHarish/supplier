import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferSummaryComponent } from './create-offer-summary.component';

const routes: Routes = [
    {
        path: '',
        component: CreateOfferSummaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateOfferSummaryRoutingModule { }