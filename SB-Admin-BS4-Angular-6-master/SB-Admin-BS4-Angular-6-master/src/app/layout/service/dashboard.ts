import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '../service/baseurl';
import { ApiheaderService } from '../util/api-header';

@Injectable()
export class DashboardService {
  jwtToken: any;
  constructor(private http: HttpClient, private apiHeader: ApiheaderService) { }

  getProducts() {
    this.jwtToken = localStorage.getItem('jwtToken');
    return this.http.get(
      BaseURL.BASE_API_URL + '/api/product',
      this.apiHeader.getHeader(this.jwtToken)
    );
  }

  getOffers() {
    this.jwtToken = localStorage.getItem('jwtToken');
    return this.http.get(
      BaseURL.BASE_API_URL + '/api/offer',
      this.apiHeader.getHeader(this.jwtToken)
    );
  }

}
