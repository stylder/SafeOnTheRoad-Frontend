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

    initialMarker: Marker = {
        lat: 22.6464226,
        lng: -103.0205916,
        draggable: true
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
        this.initialMarker.lat = $event.coords.lat;
        this.initialMarker.lng = $event.coords.lng;
        console.log('>>>DragEnd', $event);
    }

    initRute() {
        console.log('>>>Iniciando ruta cada:', this.seconds, 'segundos');
        this.running = true;

        let temporalMarker = {
            lat: this.initialMarker.lat + 0.001,
            lng: this.initialMarker.lng + 0.001,
            draggable: false
        };

        this.initialMarker.draggable = false;

        this.subscription = Observable.interval(2000 * this.seconds).subscribe(x => {

            temporalMarker = {
                lat: temporalMarker.lat + 0.01,
                lng: temporalMarker.lng + 0.01,
                draggable: false
            };

            console.log('>>>', temporalMarker);
            this.markers.push(temporalMarker)

        });
    }

    endRute() {
        console.log('>>>Terminando Viaje');
        this.running = false;
        this.initialMarker.draggable = true;
        this.subscription.unsubscribe();
    }

    clearMarkers() {
        this.markers = [];
    }


}


interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
