import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditQuantityComponent } from './edit-quantity.component';

const routes: Routes = [
    {
        path: '',
        component: EditQuantityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditQuantityRoutingModule { }