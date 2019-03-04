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
var Square3D = (function (_super) {
    __extends(Square3D, _super);
    function Square3D() {
        var _this = _super.call(this) || this;
        _this.numPoints = 4;
        _this.easing = .1;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Square3D.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.points = [];
        this.points[0] = new Point3D(-100, -100, 100);
        this.points[1] = new Point3D(100, -100, 100);
        this.points[2] = new Point3D(100, 100, 100);
        this.points[3] = new Point3D(-100, 100, 100);
        for (var i = 0; i < this.numPoints; i++) {
            var point = this.points[i];
            point.setVanishingPoint(this.vpX, this.vpY);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Square3D.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Square3D.prototype.onEnterFrame = function () {
        var angleY = (this.mouseX - this.vpX) * .001;
        var angleX = (this.mouseY - this.vpY) * .001;
        for (var i = 0; i < this.numPoints; i++) {
            var point = this.points[i];
            point.rotateX(angleX);
            point.rotateY(angleY);
        }
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.points[0].screenX, this.points[0].screenY);
        for (var i_1 = 1; i_1 < this.numPoints; i_1++) {
            this.graphics.lineTo(this.points[i_1].screenX, this.points[i_1].screenY);
        }
        this.graphics.lineTo(this.points[0].screenX, this.points[0].screenY);
    };
    return Square3D;
}(BaseSprite));
__reflect(Square3D.prototype, "Square3D");
//# sourceMappingURL=Square3D.js.map