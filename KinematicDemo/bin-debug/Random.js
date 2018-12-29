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
var Random = (function (_super) {
    __extends(Random, _super);
    function Random() {
        var _this = _super.call(this) || this;
        _this.angleX = 0;
        _this.angleY = 0;
        _this.centerX = 600;
        _this.centerY = 200;
        _this.range = 150;
        _this.xspeed = .07;
        _this.yspeed = .11;
        return _this;
    }
    Random.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Random.prototype.onEnterFrame = function (e) {
        this.ball.x = this.centerX + Math.sin(this.angleX) * this.range;
        this.ball.y = this.centerY + Math.sin(this.angleY) * this.range;
        this.angleX += this.xspeed;
        this.angleY += this.yspeed;
    };
    return Random;
}(BaseSprite));
__reflect(Random.prototype, "Random");
//# sourceMappingURL=Random.js.map