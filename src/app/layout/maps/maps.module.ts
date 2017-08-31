import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    imports: [
        CommonModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA9Spq1BAFuEAVeL0FBquWeFhSwuXHFBGE'
        })
    ],
    declarations: [MapsComponent]
})
export class MapsModule { }


