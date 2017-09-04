import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';

import {
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        NgbAlertModule.forRoot()
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
