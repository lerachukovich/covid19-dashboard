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
        const loader = new Loader({
            apiKey: "AIzaSyBoy8KFwYeML9Go-KwhzDK1w64TcAZMYqk",
            version: "weekly",
        });
        loader.load().then(() => {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
                mapId: "6e55c1e46786403"
            });
        });

        return this.mapContainer;
    }
}

export default Map;
