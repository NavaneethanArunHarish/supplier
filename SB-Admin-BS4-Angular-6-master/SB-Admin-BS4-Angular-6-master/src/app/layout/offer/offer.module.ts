import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferRoutingModule } from './offer-routing';
import { OfferComponent } from './offer.component';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
    imports: [CommonModule, OfferRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ProgressBarModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [OfferComponent]
})
export class OfferModule { } 