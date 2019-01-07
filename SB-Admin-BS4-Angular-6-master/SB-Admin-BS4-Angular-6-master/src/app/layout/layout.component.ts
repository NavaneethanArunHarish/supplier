import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(public router: Router) { }

    ngOnInit() {
        this.myWidth = window.innerWidth;
        this.footer();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    order() {
        this.footer();
        this.orderColor = '2px solid #FF7800';
        this.orderBg = "#FFF0E1";
        this.router.navigate(['/orders']);
    }

    offer() {
        this.footer();
        this.offerColor = '2px solid #FF7800';
        this.offerBg = "#FFF0E1";
        this.router.navigate(['/offers']);
    }

    archive() {
        this.footer();
        this.archiveColor = '2px solid #FF7800';
        this.archiveBg = "#FFF0E1";
        this.router.navigate(['/archive']);
    }

    footer() {
        this.offerColor = '2px solid #D7D8DC';
        this.orderColor = '2px solid #D7D8DC';
        this.archiveColor = '2px solid #D7D8DC';
        this.offerBg = "#FFF";
        this.orderBg = "#FFF";
        this.archiveBg = "#FFF";
    }
}
