import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOfferRoutingModule } from './edit-offer.routing.module';
import { EditOfferComponent } from './edit-offer.component';

@NgModule({
    imports: [CommonModule, EditOfferRoutingModule,FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()],
    declarations: [EditOfferComponent]
})
export class EditOfferModule {}