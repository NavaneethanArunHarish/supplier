import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-create-offer-step2',
    templateUrl: './create-offer-step2.component.html',
    styleUrls: ['./create-offer-step2.component.scss'],
    animations: [routerTransition()]
})
export class CreateOfferStep2Component implements OnInit {
    constructor() { }

    ngOnInit() {
    }

}
