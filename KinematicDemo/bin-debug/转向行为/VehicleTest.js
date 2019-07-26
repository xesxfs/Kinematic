var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var VehicleTest = (function (_super) {
    __extends(VehicleTest, _super);
    function VehicleTest() {
        var _this = _super.call(this) || this;
        _this.VehicleTest();
        return _this;
    }
    VehicleTest.prototype.VehicleTest = function () {
        this._vehicle = new Vehicle();
        this._vehicle.position = new Vector2D(100, 100);
        this._vehicle.velocity.length = 5;
        this._vehicle.velocity.angle = Math.PI / 4;
        this.addChild(this._vehicle);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    VehicleTest.prototype.onEnterFrame = function (event) {
        this._vehicle.update();
    };
    return VehicleTest;
}(egret.Sprite));
__reflect(VehicleTest.prototype, "VehicleTest");
//# sourceMappingURL=VehicleTest.js.map