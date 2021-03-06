import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../service/dashboard.js';
import { CreateNewOfferRoutingModule } from './create-new-offer-routing';
import { CreateNewOfferComponent } from './create-new-offer.component';
import { ApiheaderService } from '../util/api-header';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, CreateNewOfferRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [CreateNewOfferComponent],
    providers: [
        DashboardService,
        ApiheaderService
    ]
})
export class CreateNewOfferModule { } 