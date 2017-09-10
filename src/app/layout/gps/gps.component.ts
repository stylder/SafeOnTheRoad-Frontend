import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'app-maps',
    templateUrl: './gps.component.html',
    styleUrls: ['./gps.component.scss'],
    animations: [routerTransition()]
})


export class GPSComponent implements OnInit {

    // initial center position for the map
    lat = 22.6464226;
    lng = -103.0205916;
    lastMarket: Marker = {
        lat: this.lat + .001,
        lng: this.lng + .001,
        draggable: false
    };
    seconds = 5;
    running = false;
    zoom = 10;
    markers: Marker[];
    subscription: any;

    constructor() {
        this.markers = []
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

    markerDrag($event: any) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        console.log('>>>DragEnd', $event);
    }

    initRute() {
        console.log('>>>Iniciando ruta cada:', this.seconds, 'segundos');
        this.running = true;


        this.subscription = Observable.interval(2000 * this.seconds).subscribe(x => {

            this.lastMarket.lat = this.lastMarket.lat + .00;
            this.lastMarket.lng = this.lastMarket.lng + .00;

            console.log('>>>', this.lastMarket);
            this.markers.push(this.lastMarket)

        });
    }

    endRute() {
        console.log('>>>Terminando Viaje');
        this.running = false;
        this.subscription.unsubscribe();
    }


}


interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
