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
var MultiBounce3D = (function (_super) {
    __extends(MultiBounce3D, _super);
    function MultiBounce3D() {
        var _this = _super.call(this) || this;
        _this.numBalls = 50;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.top = -100;
        _this.bottom = 100;
        _this.left = -100;
        _this.right = 100;
        _this.front = 100;
        _this.back = -100;
        return _this;
    }
    MultiBounce3D.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        this.balls = [];
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball3D(15);
            this.balls.push(ball);
            ball.vx = Math.random() * 10 - 5;
            ball.vy = Math.random() * 10 - 5;
            ball.vz = Math.random() * 10 - 5;
            this.addChild(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    MultiBounce3D.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.move(ball);
        }
        this.sortZ();
    };
    MultiBounce3D.prototype.move = function (ball) {
        ball.xpos += ball.vx;
        ball.ypos += ball.vy;
        ball.zpos += ball.vz;
        var radius = ball.radius;
        if (ball.xpos + radius > this.right) {
            ball.xpos = this.right - radius;
            ball.vx *= -1;
        }
        else if (ball.xpos - radius < this.left) {
            ball.xpos = this.left + radius;
            ball.vx *= -1;
        }
        if (ball.ypos + radius > this.bottom) {
            ball.ypos = this.bottom - radius;
            ball.vy *= -1;
        }
        else if (ball.ypos - radius < this.top) {
            ball.ypos = this.top + radius;
            ball.vy *= -1;
        }
        if (ball.zpos + radius > this.front) {
            ball.zpos = this.front - radius;
            ball.vz *= -1;
        }
        else if (ball.zpos - radius < this.back) {
            ball.zpos = this.back + radius;
            ball.vz *= -1;
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
    MultiBounce3D.prototype.sortZ = function () {
        this.balls.sort(function (a, b) { return b.zpos - a.zpos; });
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.setChildIndex(ball, i);
        }
    };
    return MultiBounce3D;
}(BaseSprite));
__reflect(MultiBounce3D.prototype, "MultiBounce3D");
//# sourceMappingURL=MultiBounce3D.js.map