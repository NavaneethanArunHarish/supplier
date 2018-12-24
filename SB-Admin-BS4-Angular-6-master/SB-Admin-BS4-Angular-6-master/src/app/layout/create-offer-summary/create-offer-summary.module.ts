import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../service/dashboard.js';
import { CreateOfferSummaryRoutingModule } from './create-offer-summary.routing';
import { CreateOfferSummaryComponent } from './create-offer-summary.component';
import { ApiheaderService } from '../util/api-header';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CreateOfferSummaryRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [CreateOfferSummaryComponent],
    providers: [
        DashboardService,
        ApiheaderService
    ]
})
export class CreateOfferSummaryModule { } 