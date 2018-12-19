import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from '../service/dashboard.js';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-new-offer',
  templateUrl: './create-new-offer.component.html',
  styleUrls: ['./create-new-offer.component.scss'],
  animations: [routerTransition()]
})
export class CreateNewOfferComponent implements OnInit {
  product: any = [];
  productName: any;
  selectedUnit: any = [];
  constructor(private modalService: NgbModal, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dashboardService.getProducts()
      .subscribe(products => {
        this.product = products;
        this.product = this.product.data;
      }, err => {
        console.log('error: ', JSON.stringify(err));
      })
  }

  onChangeUnit() {
    console.log(this.productName);
    for (let i = 0; i < this.product.length; i++) {
      if (this.productName === this.product[i].name) {
        this.selectedUnit = this.product[i].sellingUnits;
      }
    }
  }

}
