import { Component } from '@angular/core';
import { GoogleMap, GoogleMapOptions, GoogleMaps, Marker, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  constructor() {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

   addMarker(){
  //   this will load the marker on the map
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 23.069491199999998,
        lng: 72.53196799999999
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert(' Marker has been clicked!!');
    });
  }
  loadMap() {
    // This code is necessary for browser

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 23.069491199999998,
           lng: 72.53196799999999
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}
