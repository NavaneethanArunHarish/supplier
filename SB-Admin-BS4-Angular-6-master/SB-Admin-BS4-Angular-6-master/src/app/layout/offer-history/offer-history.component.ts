import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-offer-history',
    templateUrl: './offer-history.component.html',
    styleUrls: ['./offer-history.component.scss'],
    animations: [routerTransition()]
})
export class OfferHistoryComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}
