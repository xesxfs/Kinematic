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
var Oval = (function (_super) {
    __extends(Oval, _super);
    function Oval() {
        var _this = _super.call(this) || this;
        _this.centerY = 200;
        _this.centerX = 600;
        _this.radiusx = 200;
        _this.radiusy = 100;
        _this.angle = 0;
        _this.speed = .1;
        return _this;
    }
    Oval.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Oval.prototype.onEnterFrame = function (e) {
        this.ball.x = this.centerX + Math.cos(this.angle) * this.radiusx;
        this.ball.y = this.centerY + Math.sin(this.angle) * this.radiusy;
        this.angle += this.speed;
    };
    return Oval;
}(BaseSprite));
__reflect(Oval.prototype, "Oval");
//# sourceMappingURL=Oval.js.map