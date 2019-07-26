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
var SeekTest = (function (_super) {
    __extends(SeekTest, _super);
    function SeekTest() {
        var _this = _super.call(this) || this;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this._vehicle = new SteeredVehicle();
        _this.addChild(_this._vehicle);
        return _this;
    }
    SeekTest.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    SeekTest.prototype.onEnterFrame = function (event) {
        this._vehicle.seek(new Vector2D(this.mouseX, this.mouseY));
        this._vehicle.update();
    };
    SeekTest.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    return SeekTest;
}(BaseSprite));
__reflect(SeekTest.prototype, "SeekTest");
//# sourceMappingURL=SeekTest.js.map