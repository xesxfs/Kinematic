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
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        return _super.call(this) || this;
    }
    Ship.prototype.draw = function (showFlame) {
        var graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(1, 0xffffff);
        graphics.moveTo(10, 0);
        graphics.lineTo(-10, 10);
        graphics.lineTo(-5, 0);
        graphics.lineTo(-10, -10);
        graphics.lineTo(10, 0);
        if (showFlame) {
            graphics.moveTo(-7.5, -5);
            graphics.lineTo(-15, 0);
            graphics.lineTo(-7.5, 5);
        }
    };
    return Ship;
}(BaseSprite));
__reflect(Ship.prototype, "Ship");
//# sourceMappingURL=Ship.js.map