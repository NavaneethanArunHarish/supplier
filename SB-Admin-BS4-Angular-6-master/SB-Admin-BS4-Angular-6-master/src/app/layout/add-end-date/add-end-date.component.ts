import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-add-end-date',
  templateUrl: './add-end-date.component.html',
  styleUrls: ['./add-end-date.component.scss'],
  animations: [routerTransition()],
})
export class AddEndDateComponent implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}