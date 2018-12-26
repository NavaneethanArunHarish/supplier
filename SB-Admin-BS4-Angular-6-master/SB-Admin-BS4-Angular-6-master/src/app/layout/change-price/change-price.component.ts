import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-change-price',
    templateUrl: './change-price.component.html',
    styleUrls: ['./change-price.component.scss'],
    animations: [routerTransition()]
})
export class ChangePriceComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}
