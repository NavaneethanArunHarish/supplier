import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-create-offer-summary',
    templateUrl: './create-offer-summary.component.html',
    styleUrls: ['./create-offer-summary.component.scss'],
    animations: [routerTransition()]
})
export class CreateOfferSummaryComponent implements OnInit {
    model: any;
    constructor() { }

    ngOnInit() {
    }

}