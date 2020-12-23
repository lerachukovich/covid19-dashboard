import { Loader } from "@googlemaps/js-api-loader";
class Map {
    constructor() {
        this.mapContainer = document.createElement("div");
        this.map = document.createElement("div");
    }

    async getData(){
        const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
        const data = await res.json();
        return data
    }

    render() {
        // documentation
        //https://developers.google.com/maps/documentation/javascript/markers
        const legend = document.createElement("div");
        legend.classList.add("legend");
        legend.innerHTML = `<div id="legend"><h3>Legend</h3></div>`;
        const div = document.createElement("div");
        // static legend, copied from https://coronavirus.jhu.edu/map.html
        div.innerHTML = `<div style="display: block;">
    <table width="95%">
        <tbody>
        <tr>
            <td align="left"></td>
        </tr>
        </tbody>
    </table>
    <table cellpadding="0" cellspacing="0" width="95%">
        <tbody>
        <tr>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">Confirmed</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
    <table cellpadding="0" cellspacing="0" width="95%">
        <tbody>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="7.5" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 1,000,000 – 5,000,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="6.777777777777779" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 500,000 – 1,000,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="6.055555555555555" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 400,000 – 500,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="5.333333333333333" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 250,000 – 400,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="4.611111111111111" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 100,000 – 250,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="3.8888888888888893" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 50,000 – 100,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="3.1666666666666665" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 20,000 – 50,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="2.4444444444444446" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 3,000 – 20,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="1.7222222222222223" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">&gt; 1,000 – 3,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td width="35" align="center">
                <div style="width:30px;height:30px;">
                    <svg overflow="hidden" width="30" height="30" style="touch-action: none;">
                        <defs></defs>
                        <circle fill="rgb(230, 0, 0)" fill-opacity="0.8" stroke="none" stroke-opacity="0"
                                stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                cx="0" cy="0" r="1" fill-rule="evenodd"
                                transform="matrix(1.00000000,0.00000000,0.00000000,1.00000000,15.00000000,15.00000000)"></circle>
                    </svg>
                </div>
            </td>
            <td>
                <table width="95%">
                    <tbody>
                    <tr>
                        <td align="left">1 – 1,000</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>`;
        this.mapContainer.appendChild(legend);
        legend.appendChild(div);

        this.mapContainer.classList.add('map__container');
        this.mapContainer.appendChild(this.map);
        this.map.id = `map`;
        let map;
        let mapOptions = {
            center: { lat: -0.000, lng: 0.000 },
            zoom: 3,
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
            ],
        }
        let loader = new Loader({
            apiKey: "AIzaSyBoy8KFwYeML9Go-KwhzDK1w64TcAZMYqk",
            version: "weekly",
            mapOptions: mapOptions
        });
        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
        }).then(() => {
            this.getData().then( content => {
                //rendering markers from api data
                content.forEach((elem, i) =>{
                    const contentString = `<h3>${elem.country}</h3>
                                            <p>Cases : ${elem.cases.toLocaleString()}</p>
                                            <p>Deaths : ${elem.deaths.toLocaleString()}</p>`;
                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                    });
                    const marker = new google.maps.Marker({
                        map,
                        position: { lat: elem.countryInfo.lat, lng: elem.countryInfo.long },
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: Math.log2(elem.cases),
                            fillColor: "#F00",
                            fillOpacity: 0.4,
                            strokeWeight: 0.4
                        }
                    });

                    marker.addListener("mouseover", () => {
                        infowindow.open(map, marker);
                    });
                    google.maps.event.addListener(marker, 'mouseout', (function(marker,content,infowindow){
                        return function() {
                            infowindow.close();
                        };
                    })(marker,content,infowindow));
                });
            });
        });
        return this.mapContainer;
    }
}

export default Map;
