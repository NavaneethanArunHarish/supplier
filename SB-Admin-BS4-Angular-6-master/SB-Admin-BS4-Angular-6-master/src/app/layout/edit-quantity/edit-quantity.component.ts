import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-edit-quantity',
    templateUrl: './edit-quantity.component.html',
    styleUrls: ['./edit-quantity.component.scss'],
    animations: [routerTransition()],
})
export class EditQuantityComponent implements OnInit {
    model: any;
    constructor() { }

    ngOnInit() {
    }

}