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
var Wave2 = (function (_super) {
    __extends(Wave2, _super);
    function Wave2() {
        var _this = _super.call(this) || this;
        _this.xpos = 0;
        _this.ypos = 0;
        _this.centerY = 200;
        _this.xspeed = 2;
        _this.yspeed = 0.5;
        _this.range = 50;
        _this.angle = 0;
        return _this;
    }
    Wave2.prototype.init = function () {
        this.xpos = 0;
        this.graphics.lineStyle(1, 0, 1);
        this.graphics.moveTo(0, this.centerY);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Wave2.prototype.onEnterFrame = function (e) {
        this.xpos += this.xspeed;
        this.angle += this.yspeed;
        this.ypos = this.centerY + Math.sin(this.angle) * this.range;
        this.graphics.lineTo(this.xpos, this.ypos);
    };
    return Wave2;
}(BaseSprite));
__reflect(Wave2.prototype, "Wave2");
//# sourceMappingURL=Wave2.js.map