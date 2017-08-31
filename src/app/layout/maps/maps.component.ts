import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';


@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss'],
    animations: [routerTransition()]
})
export class MapsComponent implements OnInit {
    lat: number = 22.6464226;
    lng: number = -103.0205916;

    constructor() {

    }

    ngOnInit() {
    }
}
