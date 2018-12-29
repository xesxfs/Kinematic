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
var Pulse = (function (_super) {
    __extends(Pulse, _super);
    function Pulse() {
        var _this = _super.call(this) || this;
        _this.angle = 0;
        _this.speed = .1;
        _this.range = .5;
        _this.centerScale = 1;
        return _this;
    }
    Pulse.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.setDisplayCenter(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Pulse.prototype.onEnterFrame = function (e) {
        this.ball.scaleX = this.ball.scaleY = this.centerScale + Math.sin(this.angle) * this.range;
        this.angle += this.speed;
    };
    return Pulse;
}(BaseSprite));
__reflect(Pulse.prototype, "Pulse");
//# sourceMappingURL=Pulse.js.map