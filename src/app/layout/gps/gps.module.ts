import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpService} from '../../http/http.service'
import { GPSRoutingModule } from './gps-routing.module';
import { GPSComponent } from './gps.component';
import { AgmCoreModule } from '@agm/core';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        GPSRoutingModule,
        PageHeaderModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA9Spq1BAFuEAVeL0FBquWeFhSwuXHFBGE'
        })
    ],
    declarations: [GPSComponent],
    providers: [HttpService]
})
export class GPSModule { }


