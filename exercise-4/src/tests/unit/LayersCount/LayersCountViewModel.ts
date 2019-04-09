const { registerSuite } = intern.getInterface("object");
const { assert } = intern.getPlugin("chai");

import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import FeatureLayer = require("esri/layers/FeatureLayer");
import LayersCountViewModel = require("./../../../lib/LayersCount/LayersCountViewModel");

registerSuite("Layers Count", {
  /**
   * This unit test checks passing a expected property within the StyleOptions constructor as
   * a json object results in that property being properly set.
   */
  jsonConstructorValidProperty() {
    assert.equal(1, 1);
    let map = new Map({
      basemap: "topo-vector"
    });

    var featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
    });

    map.add(featureLayer);

    let mapView = new MapView({
      map: map
    });

    mapView.when().then(function() {
      let widgetViewModel = new LayersCountViewModel();
      widgetViewModel.view = mapView;
      let countResponse = widgetViewModel.getCount();
      console.log("Response", countResponse);
      assert.equal(countResponse, 1);
    });
  }
});
