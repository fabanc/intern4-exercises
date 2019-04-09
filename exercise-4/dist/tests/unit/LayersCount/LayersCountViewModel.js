define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "./../../../lib/LayersCount/LayersCountViewModel"], function (require, exports, Map, MapView, FeatureLayer, LayersCountViewModel) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var registerSuite = intern.getInterface("object").registerSuite;
    var assert = intern.getPlugin("chai").assert;
    registerSuite("Layers Count", {
        jsonConstructorValidProperty: function () {
            assert.equal(1, 1);
            var map = new Map({
                basemap: "topo-vector"
            });
            var featureLayer = new FeatureLayer({
                url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
            });
            map.add(featureLayer);
            var mapView = new MapView({
                map: map
            });
            mapView.when().then(function () {
                var widgetViewModel = new LayersCountViewModel();
                widgetViewModel.view = mapView;
                var countResponse = widgetViewModel.getCount();
                console.log("Response", countResponse);
                assert.equal(countResponse, 1);
            });
        }
    });
});
//# sourceMappingURL=LayersCountViewModel.js.map