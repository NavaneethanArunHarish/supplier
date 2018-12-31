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
    orderColor: any;
    offerColor: any;
    archiveColor: any;
    orderBg: any;
    offerBg: any;
    archiveBg: any;

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

    order() {
        this.offerColor = '2px solid #fff';
        this.orderColor = '2px solid #FF7800';
        this.archiveColor = '2px solid #fff';
        this.offerBg = "#FFF";
        this.orderBg = "#FFF0E1";
        this.archiveBg = "#FFF";
    }

    offer() {
        this.offerColor = '2px solid #FF7800';
        this.orderColor = '2px solid #fff';
        this.archiveColor = '2px solid #fff';
        this.offerBg = "#FFF0E1";
        this.orderBg = "#FFF";
        this.archiveBg = "#FFF";
    }

    archive() {
        this.offerColor = '2px solid#fff';
        this.orderColor = '2px solid #fff';
        this.archiveColor = '2px solid #FF7800';
        this.offerBg = "#FFF";
        this.orderBg = "#FFF";
        this.archiveBg = "#FFF0E1";
    }
}
