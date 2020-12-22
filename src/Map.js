import { Loader } from "@googlemaps/js-api-loader"
class Map {
    constructor() {
        this.mapContainer = document.createElement("div");
        this.map = document.createElement("div");
    }

    render() {
        this.mapContainer.classList.add('map__container');
        this.mapContainer.appendChild(this.map);
        this.map.id = `map`;
        let map;
        let mapOptions = {
            center: { lat: -0.000, lng: 0.000 },
            zoom: 3,
            disableDefaultUI: true,
            styles: [
                {
                    elementType: "geometry",
                    stylers: [{ color: "#242f3e" }]
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#242f3e" }]
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#746855" }]
                },
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }],
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }],
                },
            ]
        }
        let loader = new Loader({
            apiKey: "AIzaSyBoy8KFwYeML9Go-KwhzDK1w64TcAZMYqk",
            version: "weekly",
            mapOptions: mapOptions
        });
        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
        });

        return this.mapContainer;
    }
}

export default Map;
