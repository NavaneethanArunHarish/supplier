import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '../service/baseurl';
import { ApiheaderService } from '../util/api-header';
import { Login } from '../model-structure/login';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private apiHeader: ApiheaderService) {}
  login(loginObj) {
    return this.http.post<Login>(
      BaseURL.BASE_API_URL + '/api/user/login',
      loginObj,
      this.apiHeader.getLoginHeader()
    );
  }
  
}