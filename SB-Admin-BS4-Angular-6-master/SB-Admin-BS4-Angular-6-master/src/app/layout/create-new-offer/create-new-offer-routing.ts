import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewOfferComponent } from './create-new-offer.component';

const routes: Routes = [
    {
        path: '',
        component: CreateNewOfferComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateNewOfferRoutingModule {}