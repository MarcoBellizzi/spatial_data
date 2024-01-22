import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

import * as Leaflet from 'leaflet';
import "leaflet-control-geocoder";

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor(
    private http: HttpClient,
    private router: Router,
    private zone: NgZone
  ) { }

  map!: Leaflet.Map;

  points!: any[];

  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 8,
    center: { lat: -15.8304394302228359, lng: -39.51891650397589 },
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;

    this.http.get<any>('http://localhost:8080/points').subscribe(
      response => {
        this.points = response.points
        this.points.forEach(point => (
          Leaflet.marker(
            { lat: point[0], lng: point[1] },
            { draggable: false })
            .on('click', (event) => this.markerClicked(event))
            .addTo(this.map)
        ))
        Leaflet.polyline(this.points).addTo(this.map)
      }
    )

  }

  markerClicked($event: any) {
    let y = $event.latlng.lat
    let x = $event.latlng.lng
    this.points.forEach(point => {
      if (point[0] == y && point[1] == x) {
        this.zone.run(() => {
          this.router.navigate(['/show-images', {id: point[2]}])
      });
        
      }
    })

  }

}
