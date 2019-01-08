import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-create-offer-step3',
    templateUrl: './create-offer-step3.component.html',
    styleUrls: ['./create-offer-step3.component.scss'],
    animations: [routerTransition()]
})
export class CreateOfferStep3Component implements OnInit {
    model: any;
    constructor() { }

    ngOnInit() {
        window.scroll(0,0);
    }

}