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
var Fireworks = (function (_super) {
    __extends(Fireworks, _super);
    function Fireworks() {
        var _this = _super.call(this) || this;
        _this.numBalls = 100;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.gravity = 0.2;
        _this.floor = 200;
        _this.bounce = -0.6;
        return _this;
    }
    Fireworks.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        this.balls = [];
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball3D(3, Math.random() * 0xffffff);
            this.balls.push(ball);
            ball.ypos = -100;
            ball.vx = Math.random() * 6 - 3;
            ball.vy = Math.random() * 6 - 6;
            ball.vz = Math.random() * 6 - 3;
            this.addChild(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Fireworks.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.move(ball);
        }
        this.sortZ();
    };
    Fireworks.prototype.move = function (ball) {
        ball.vy += this.gravity;
        ball.xpos += ball.vx;
        ball.ypos += ball.vy;
        ball.zpos += ball.vz;
        if (ball.ypos > this.floor) {
            ball.ypos = this.floor;
            ball.vy *= this.bounce;
        }
        if (ball.zpos > -this.fl) {
            var scale = this.fl / (this.fl + ball.zpos);
            ball.scaleX = ball.scaleY = scale;
            ball.x = this.vpX + ball.xpos * scale;
            ball.y = this.vpY + ball.ypos * scale;
            ball.visible = true;
        }
        else {
            ball.visible = false;
        }
    };
    Fireworks.prototype.sortZ = function () {
        this.balls.sort(function (a, b) { return b.zpos - a.zpos; });
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.setChildIndex(ball, i);
        }
    };
    return Fireworks;
}(BaseSprite));
__reflect(Fireworks.prototype, "Fireworks");
//# sourceMappingURL=Fireworks.js.map