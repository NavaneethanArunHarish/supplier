import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss'],
  animations: [routerTransition()],
})
export class EditOfferComponent implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
  }

}
