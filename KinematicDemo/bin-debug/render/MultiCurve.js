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
var MultiCurve = (function (_super) {
    __extends(MultiCurve, _super);
    function MultiCurve() {
        var _this = _super.call(this) || this;
        _this.numPoints = 9;
        return _this;
    }
    MultiCurve.prototype.init = function () {
        var points = new Array();
        for (var i = 0; i < this.numPoints; i++) {
            var x = Math.random() * this.stage.stageWidth;
            var y = Math.random() * this.stage.stageHeight;
            var point = egret.Point.create(x, y);
            points.push(point);
        }
        this.graphics.lineStyle(1);
        this.graphics.moveTo(points[0].x, points[0].y);
        for (i = 1; i < this.numPoints - 2; i++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            this.graphics.curveTo(points[i].x, points[i].y, xc, yc);
        }
        this.graphics.curveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    };
    return MultiCurve;
}(BaseSprite));
__reflect(MultiCurve.prototype, "MultiCurve");
//# sourceMappingURL=MultiCurve.js.map