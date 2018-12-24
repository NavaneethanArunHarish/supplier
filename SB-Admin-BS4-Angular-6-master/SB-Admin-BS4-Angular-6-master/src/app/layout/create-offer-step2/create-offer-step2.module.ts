import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../service/dashboard.js';
import { CreateOfferStep2RoutingModule } from './create-offer-step2-routing';
import { CreateOfferStep2Component } from './create-offer-step2.component';
import { ApiheaderService } from '../util/api-header';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CreateOfferStep2RoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [CreateOfferStep2Component],
    providers: [
        DashboardService,
        ApiheaderService
    ]
})
export class CreateOfferStep2Module { } 