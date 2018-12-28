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
var Arrow = (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Arrow.prototype.init = function () {
        var graphics = this.graphics;
        graphics.lineStyle(1, 0, 1);
        graphics.beginFill(0xffff00);
        graphics.moveTo(-50, -25);
        graphics.lineTo(0, -25);
        graphics.lineTo(0, -50);
        graphics.lineTo(50, 0);
        graphics.lineTo(0, 50);
        graphics.lineTo(0, 25);
        graphics.lineTo(-50, 25);
        graphics.lineTo(-50, -25);
        graphics.endFill();
    };
    return Arrow;
}(egret.Sprite));
__reflect(Arrow.prototype, "Arrow");
//# sourceMappingURL=Arrow.js.map