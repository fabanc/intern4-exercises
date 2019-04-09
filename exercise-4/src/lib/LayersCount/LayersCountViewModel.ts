/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");
import { declared, property } from "esri/core/accessorSupport/decorators";
import MapView = require("esri/views/MapView");

interface ILayerViewCount {
  name: string;
  count: number;
}

class FeatureCountViewModel extends declared(Accessor) {
  @property()
  public view: MapView;

  getCount(): number {
    return this.view.allLayerViews.length;
  }
}
export = FeatureCountViewModel;
