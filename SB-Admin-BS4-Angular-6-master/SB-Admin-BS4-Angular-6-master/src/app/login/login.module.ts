import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from '../layout/service/login';
import { ApiheaderService } from '../layout/util/api-header';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, TranslateModule, MaterialModule],
    declarations: [LoginComponent],
    providers: [
        LoginService,
        ApiheaderService
    ]
})
export class LoginModule {}
