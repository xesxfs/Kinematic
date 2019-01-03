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
var Friction1 = (function (_super) {
    __extends(Friction1, _super);
    function Friction1() {
        var _this = _super.call(this) || this;
        _this.friction = 0.1;
        return _this;
    }
    Friction1.prototype.init = function () {
        this.ball = new Ball();
        this.setDisplayCenter(this.ball);
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Friction1.prototype.onEnterFrame = function () {
        var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        var angle = Math.atan2(this.vy, this.vx);
        if (speed > this.friction) {
            speed -= this.friction;
        }
        else {
            speed = 0;
        }
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
    };
    return Friction1;
}(BaseSprite));
__reflect(Friction1.prototype, "Friction1");
//# sourceMappingURL=Friction1.js.map