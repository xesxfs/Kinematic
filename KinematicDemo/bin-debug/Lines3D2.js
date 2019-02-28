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
var Lines3D2 = (function (_super) {
    __extends(Lines3D2, _super);
    function Lines3D2() {
        var _this = _super.call(this) || this;
        _this.numPoints = 50;
        _this.easing = .1;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Lines3D2.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.points = [];
        for (var i = 0; i < this.numPoints; i++) {
            var point = new Point3D(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100);
            point.setVanishingPoint(this.vpX, this.vpY);
            this.points.push(point);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Lines3D2.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Lines3D2.prototype.onEnterFrame = function () {
        var angleY = (this.mouseX - this.vpX) * .001;
        var angleX = (this.mouseY - this.vpY) * .001;
        for (var i = 0; i < this.numPoints; i++) {
            var point = this.points[i];
            point.rotateX(angleX);
            point.rotateY(angleY);
        }
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.points[0].x, this.points[0].y);
        for (var i_1 = 1; i_1 < this.numPoints; i_1++) {
            this.graphics.lineTo(this.points[i_1].x, this.points[i_1].y);
        }
    };
    return Lines3D2;
}(BaseSprite));
__reflect(Lines3D2.prototype, "Lines3D2");
//# sourceMappingURL=Lines3D2.js.map