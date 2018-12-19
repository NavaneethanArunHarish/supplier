import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Login } from '../layout/model-structure/login';
import { LoginService } from '../layout/service/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    login: any = {};
    constructor(public router: Router, private loginService: LoginService) { }

    ngOnInit() { }

    onLoggedin() {
        this.loginService.login(this.login).
            subscribe(loginStatus => {
                let loginData = new Login();
                loginData = loginStatus;
                localStorage.setItem('jwtToken', loginData.data.jwt);
                this.router.navigate(['/dashboard']);
            },
                err => {
                    console.log('err:', err);
                });
    }

}
