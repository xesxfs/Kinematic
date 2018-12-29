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
var MultiCurve2 = (function (_super) {
    __extends(MultiCurve2, _super);
    function MultiCurve2() {
        var _this = _super.call(this) || this;
        _this.numPoints = 9;
        return _this;
    }
    MultiCurve2.prototype.init = function () {
        var points = new Array();
        for (var i = 0; i < this.numPoints; i++) {
            var x = Math.random() * this.stage.stageWidth;
            var y = Math.random() * this.stage.stageHeight;
            var point = egret.Point.create(x, y);
            points.push(point);
        }
        this.graphics.beginFill(0xff00ff);
        this.graphics.lineStyle(1);
        var xc1 = (points[0].x + points[this.numPoints - 1].x) / 2;
        var yc1 = (points[0].y + points[this.numPoints - 1].y) / 2;
        this.graphics.moveTo(xc1, yc1);
        for (i = 0; i < this.numPoints - 1; i++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            this.graphics.curveTo(points[i].x, points[i].y, xc, yc);
        }
        this.graphics.curveTo(points[i].x, points[i].y, xc1, yc1);
        this.graphics.endFill();
    };
    return MultiCurve2;
}(BaseSprite));
__reflect(MultiCurve2.prototype, "MultiCurve2");
//# sourceMappingURL=MultiCurve2.js.map