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
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.centerX = 200;
        _this.centerY = 200;
        _this.radius = 150;
        _this.angle = 0;
        _this.speed = .1;
        return _this;
    }
    Circle.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Circle.prototype.onEnterFrame = function () {
        this.ball.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.ball.y = this.centerY + Math.sin(this.angle) * this.radius;
        this.angle += this.speed;
    };
    return Circle;
}(BaseSprite));
__reflect(Circle.prototype, "Circle");
//# sourceMappingURL=Circle.js.map