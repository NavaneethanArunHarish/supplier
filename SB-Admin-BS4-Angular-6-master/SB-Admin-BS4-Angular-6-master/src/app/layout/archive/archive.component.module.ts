import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchiveRoutingModule } from './archive.component.routing';
import { ArchiveComponent } from './archive.component';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
    imports: [CommonModule, ArchiveRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ProgressBarModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [ArchiveComponent]
})
export class ArchiveModule { } 