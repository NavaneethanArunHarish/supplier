
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiheaderService {

  constructor() { }

  ngOnInit() {}

  getHeader(token) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return options;
  }

  getLoginHeader() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return options;
  }

}
