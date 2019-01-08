import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.scss'],
    animations: [routerTransition()]
})
export class ArchiveComponent implements OnInit {
    filterEnable: boolean = false;
    searchEnable: boolean = false;
    expiryEnable: boolean = true;
    terminateEnable: boolean = false;
    expiryBorder: any;
    terminateBorder: any = "0.5px solid #D7D8DC";
    margin: any = "6px";
    constructor() {

    }

    ngOnInit() {
        window.scroll(0,0);
    }

    onExpiry() {
        this.expiryEnable = true;
        this.terminateEnable = false;
        this.expiryBorder = "2px solid #FF7800";
        this.terminateBorder = "0.5px solid #D7D8DC";
        // this.margin = "3px";
    }

    onTerminate() {
        this.expiryEnable = false;
        this.terminateEnable = true;
        this.terminateBorder = "2px solid #FF7800";
        this.expiryBorder = "0.5px solid #D7D8DC";
        // this.margin = "3px";
    }
}
