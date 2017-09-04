import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import { HttpService } from '../http/http.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignupRoutingModule
    ],
    declarations: [SignupComponent],
    providers: [HttpService]

})
export class SignupModule {
}
