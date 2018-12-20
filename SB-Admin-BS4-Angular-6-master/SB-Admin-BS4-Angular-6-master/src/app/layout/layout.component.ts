import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;
    myWidth: any;
    myHeight: any;

    constructor() { }

    ngOnInit() {
        this.myWidth = window.innerWidth;
        this.myHeight = window.innerHeight;
        console.log("width:" + this.myWidth);
        console.log("height:" + this.myHeight);
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
