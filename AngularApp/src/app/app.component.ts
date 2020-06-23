import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('divMap') divMap: ElementRef;
  directionsService: any;
  directionsDisplay: any;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  ngOnInit() {
    if (navigator.geolocation) {


      navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position);
        //this.loadMap(position);


      });
    } else {
      alert('Cambia de navegador, so cutre!');
    }
  }

  loadMap(position) {
    const mapProps = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    //crear mapa
    const mapa = new google.maps.Map(this.divMap.nativeElement, mapProps);
    // new google.maps.Map(document.getElementById('mapaGoogle'), mapProps)
    this.directionsDisplay.setMap(mapa);

    const marker = new google.maps.Marker({
      position: mapProps.center,
      title: 'Estoy aqui',
      animation: google.maps.Animation.BOUNCE
    })
    marker.setMap(mapa);

    //evento click sobre el mapa

    google.maps.event.addListener(mapa, 'click', (event) => {
      // console.log(event)
      const marker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.DROP
      });
      marker.setMap(mapa);
      // para eliminar los marcadores clicando sobre ellos.
      google.maps.event.addListener(marker, 'click', (event) => {
        marker.setMap(null);
      });
    })

    // GOOGLE PLACES

    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('inputPlaces'));
    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      console.log(place);

      this.calculoRutaAndando(mapProps.center, place.geometry.location);

      // mapa.setCenter(place.geometry.location);

      // const marker = new google.maps.Marker({
      //   position: place.geometry.location
      // })
      // marker.setMap(mapa)
    }.bind(this));

  }

  onClick() {
    const options = {
      origin: 'Lima 12, Fuenlabrada',
      destination: 'Plaza España, 12',
      travelMode: google.maps.TravelMode.WALKING
    }
    this.directionsService.route(options, (result) => {
      console.log(result);
      this.directionsDisplay.setDirections(result)
    })
  }

  calculoRutaAndando(origin, destination) {
    const options = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.WALKING
    }
    this.directionsService.route(options, (result) => {
      console.log(result);
      this.directionsDisplay.setDirections(result)
    })
  }

}