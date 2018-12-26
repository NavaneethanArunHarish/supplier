import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../service/dashboard.js';
import { ChangePriceRoutingModule } from './change-price-routing';
import { ChangePriceComponent } from './change-price.component';
import { ApiheaderService } from '../util/api-header';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    imports: [CommonModule, ChangePriceRoutingModule, FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        NgbModule.forRoot()],
    declarations: [ChangePriceComponent],
    providers: [
        DashboardService,
        ApiheaderService
    ]
})
export class ChangePriceModule { } 