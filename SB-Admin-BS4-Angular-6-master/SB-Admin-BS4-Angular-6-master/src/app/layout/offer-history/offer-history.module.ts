import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferHistoryRoutingModule } from './offer-history-routing';
import { OfferHistoryComponent } from './offer-history.component';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
    imports: [CommonModule, OfferHistoryRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ProgressBarModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [OfferHistoryComponent]
})
export class OfferHistoryModule { } 