import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEndDateComponent } from './add-end-date.component';

const routes: Routes = [
    {
        path: '',
        component: AddEndDateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEndDateRoutingModule {}