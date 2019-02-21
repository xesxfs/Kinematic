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
var Ball3D = (function (_super) {
    __extends(Ball3D, _super);
    function Ball3D(radius, color) {
        if (radius === void 0) { radius = 40; }
        if (color === void 0) { color = 0xff0000; }
        var _this = _super.call(this) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.vz = 0;
        _this.xpos = 0;
        _this.ypos = 0;
        _this.zpos = 0;
        _this.mass = 1;
        _this.radius = radius;
        _this.color = color;
        return _this;
    }
    Ball3D.prototype.init = function () {
        this.graphics.lineStyle(0);
        this.graphics.beginFill(this.color);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
    };
    return Ball3D;
}(BaseSprite));
__reflect(Ball3D.prototype, "Ball3D");
//# sourceMappingURL=Ball3D.js.map