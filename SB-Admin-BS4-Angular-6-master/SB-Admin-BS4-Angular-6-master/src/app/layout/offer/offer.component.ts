import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  animations: [routerTransition()]
})
export class OfferComponent implements OnInit {
  myWidth: any;
  myHeight: any;
  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.myWidth = window.innerWidth;
    this.myHeight = window.innerHeight;
    console.log("width:" + this.myWidth);
    console.log("height:" + this.myHeight);
  }

}
