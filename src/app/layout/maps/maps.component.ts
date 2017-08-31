import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';


@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss'],
    animations: [routerTransition()]
})



export class MapsComponent implements OnInit {

    // initial center position for the map
    lat: number = 22.6464226;
    lng: number = -103.0205916;
    zoom: number = 10;
    markers: Marker[];


    constructor() {

        this.markers = [
            {
                lat: 22.6464226,
                lng: -103.0205916,
                label: "Jerez",
                draggable: true
            },
            {
                lat: 22.7766572,
                lng: -102.9371446,
                label: 'Los Haro',
                draggable: true
            }
        ]
    }

    ngOnInit() {
        console.log(this.markers)
    }

    mapClicked($event: any) {
        console.log($event);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true

        })
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }






}



interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
