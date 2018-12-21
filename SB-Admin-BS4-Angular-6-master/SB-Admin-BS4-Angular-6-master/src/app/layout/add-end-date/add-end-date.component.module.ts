import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEndDateRoutingModule } from './add-end-date.component.routing';
import { AddEndDateComponent } from './add-end-date.component';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
    imports: [CommonModule, AddEndDateRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ProgressBarModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [AddEndDateComponent]
})
export class AddEndDateModule { } 