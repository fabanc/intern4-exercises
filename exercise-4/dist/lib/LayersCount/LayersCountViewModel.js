define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "tslib", "esri/core/Accessor", "esri/core/accessorSupport/decorators"], function (require, exports, __extends, __decorate, tslib_1, Accessor, decorators_1) {
    "use strict";
    var FeatureCountViewModel = (function (_super) {
        tslib_1.__extends(FeatureCountViewModel, _super);
        function FeatureCountViewModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FeatureCountViewModel.prototype.getCount = function () {
            return this.view.allLayerViews.length;
        };
        tslib_1.__decorate([
            decorators_1.property()
        ], FeatureCountViewModel.prototype, "view", void 0);
        return FeatureCountViewModel;
    }(decorators_1.declared(Accessor)));
    return FeatureCountViewModel;
});
//# sourceMappingURL=LayersCountViewModel.js.map