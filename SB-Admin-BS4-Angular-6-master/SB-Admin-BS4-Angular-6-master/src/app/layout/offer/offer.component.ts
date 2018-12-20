import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  animations: [routerTransition()]
})
export class OfferComponent implements OnInit {
  myWidth: any;
  myHeight: any;
  closeResult: string;
  filterEnable: boolean = false;
  constructor(private translate: TranslateService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.myWidth = window.innerWidth;
    this.myHeight = window.innerHeight;
    console.log("width:" + this.myWidth);
    console.log("height:" + this.myHeight);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
