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
var Friction2 = (function (_super) {
    __extends(Friction2, _super);
    function Friction2() {
        var _this = _super.call(this) || this;
        _this.friction = 0.9;
        return _this;
    }
    Friction2.prototype.init = function () {
        this.ball = new Ball();
        this.setDisplayCenter(this.ball);
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Friction2.prototype.onEnterFrame = function () {
        // let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        // let angle = Math.atan2(this.vy, this.vx);
        // if (speed > this.friction) {
        // 	speed -= this.friction;
        // } else {
        // 	speed = 0;
        // }
        // this.vx = Math.cos(angle) * speed;
        // this.vy = Math.sin(angle) * speed;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
    };
    return Friction2;
}(BaseSprite));
__reflect(Friction2.prototype, "Friction2");
//# sourceMappingURL=Friction2.js.map