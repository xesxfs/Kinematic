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
var SpinningE = (function (_super) {
    __extends(SpinningE, _super);
    function SpinningE() {
        var _this = _super.call(this) || this;
        _this.numPoints = 12;
        _this.easing = .1;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    SpinningE.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.points = [];
        this.points[0] = new Point3D(-150, -250, 100);
        this.points[1] = new Point3D(150, -250, 100);
        this.points[2] = new Point3D(150, -150, 100);
        this.points[3] = new Point3D(-50, -150, 100);
        this.points[4] = new Point3D(-50, -50, 100);
        this.points[5] = new Point3D(50, -50, 100);
        this.points[6] = new Point3D(50, 50, 100);
        this.points[7] = new Point3D(-50, 50, 100);
        this.points[8] = new Point3D(-50, 150, 100);
        this.points[9] = new Point3D(150, 150, 100);
        this.points[10] = new Point3D(150, 250, 100);
        this.points[11] = new Point3D(-150, 250, 100);
        for (var i = 0; i < this.numPoints; i++) {
            var point = this.points[i];
            point.setVanishingPoint(this.vpX, this.vpY);
            point.setCenter(0, 100, 200);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    SpinningE.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    SpinningE.prototype.onEnterFrame = function () {
        var angleY = (this.mouseX - this.vpX) * .001;
        var angleX = (this.mouseY - this.vpY) * .001;
        for (var i = 0; i < this.numPoints; i++) {
            var point = this.points[i];
            point.rotateX(angleX);
            point.rotateY(angleY);
        }
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.beginFill(0xffcccc);
        this.graphics.moveTo(this.points[0].screenX, this.points[0].screenY);
        for (var i_1 = 1; i_1 < this.numPoints; i_1++) {
            this.graphics.lineTo(this.points[i_1].screenX, this.points[i_1].screenY);
        }
        this.graphics.lineTo(this.points[0].screenX, this.points[0].screenY);
        this.graphics.endFill();
    };
    return SpinningE;
}(BaseSprite));
__reflect(SpinningE.prototype, "SpinningE");
//# sourceMappingURL=SpinningE.js.map