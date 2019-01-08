import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    animations: [routerTransition()]
})
export class OrderComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        window.scroll(0,0);
    }
}
