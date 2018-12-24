import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../service/dashboard.js';
import { CreateOfferStep3RoutingModule } from './create-offer-step3-routing';
import { CreateOfferStep3Component } from './create-offer-step3.component';
import { ApiheaderService } from '../util/api-header';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CreateOfferStep3RoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [CreateOfferStep3Component],
    providers: [
        DashboardService,
        ApiheaderService
    ]
})
export class CreateOfferStep3Module { } 