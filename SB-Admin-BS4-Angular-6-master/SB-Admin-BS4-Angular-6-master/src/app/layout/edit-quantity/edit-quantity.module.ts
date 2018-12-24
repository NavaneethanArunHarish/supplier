import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditQuantityRoutingModule } from './edit-quantity.routing.module';
import { EditQuantityComponent } from './edit-quantity.component';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
    imports: [CommonModule, EditQuantityRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ProgressBarModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [EditQuantityComponent]
})
export class EditQuantityModule { } 