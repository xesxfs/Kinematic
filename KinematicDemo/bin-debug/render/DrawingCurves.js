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
var DrawingCurves = (function (_super) {
    __extends(DrawingCurves, _super);
    function DrawingCurves() {
        var _this = _super.call(this) || this;
        _this.x0 = 100;
        _this.y0 = 200;
        _this.x2 = 300;
        _this.y2 = 200;
        return _this;
    }
    DrawingCurves.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    };
    DrawingCurves.prototype.onMouseMove = function (e) {
        // this.x1 = e.localX;
        // this.y1 = e.localY;
        this.x1 = e.localX * 2 - (this.x0 + this.x2) / 2;
        this.y1 = e.localY * 2 - (this.y0 + this.y2) / 2;
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.x0, this.y0);
        this.graphics.curveTo(this.x1, this.y1, this.x2, this.y2);
    };
    return DrawingCurves;
}(BaseSprite));
__reflect(DrawingCurves.prototype, "DrawingCurves");
//# sourceMappingURL=DrawingCurves.js.map